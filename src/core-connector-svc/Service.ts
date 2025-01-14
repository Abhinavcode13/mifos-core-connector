/*****
 License
--------------
Copyright © 2017 Bill & Melinda Gates Foundation
The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

Contributors
--------------
This is the official list (alphabetical ordering) of the Mojaloop project contributors for this file.
Names of the original copyright holders (individuals or organizations)
should be listed with a '*' in the first column. People who have
contributed from an organization can be listed under the organization
that actually holds the copyright for their contributions (see the
Gates Foundation organization for an example). Those individuals should have
their names indented and be marked with a '-'. Email address can be added
optionally within square brackets <email>.


- Okello Ivan Elijah <elijahokello90@gmail.com>

--------------
******/

"use strict";

import { Server } from "@hapi/hapi";
import { IHttpClient } from "../domain";
import { CoreConnectorAggregate } from "../domain";
import { AxiosClientFactory } from "../infra/axiosHttpClient";
import config from "../config";
import { CoreConnectorRoutes } from "./coreConnectorRoutes";
import { loggerFactory } from "../infra/logger";
import { createPlugins } from '../plugins';
import { FineractClientFactory } from "../domain/FineractClient";

const logger = loggerFactory({ context: 'MifosCC' });

export class Service {
    static coreConnectorAggregate: CoreConnectorAggregate;
    static httpClient: IHttpClient;
    static server: Server;

    static async start(httpClient?: IHttpClient){
        if(!httpClient){
            httpClient = AxiosClientFactory.createAxiosClientInstance();
        }
        this.httpClient = httpClient;
        const fineractConfig = config.get("fineract");
        const fineractClient = FineractClientFactory.createClient({
            fineractConfig: fineractConfig,
            httpClient: this.httpClient,
            logger: logger
        });
        this.coreConnectorAggregate = new CoreConnectorAggregate(fineractConfig,fineractClient,logger);

        await this.setupAndStartUpServer();
        logger.info("Core Connector Server started");
    }

    static async setupAndStartUpServer(){
            this.server = new Server(config.get('server'));
            await this.server.register(createPlugins({ logger }));

            const coreConnectorRoutes = new CoreConnectorRoutes(this.coreConnectorAggregate, logger);
            this.server.route(coreConnectorRoutes.getRoutes());
            await this.server.start();
            logger.info(`Core Connector Server running at ${this.server.info.uri}`);
    }

    static async stop(){
        await this.server.stop({timeout: 60});
        logger.info("Service Stopped");
    }
}

// todo: refactor it and move to /src/index.ts
async function _handle_int_and_term_signals(signal: NodeJS.Signals): Promise<void> {
    logger.warn(`Service - ${signal} received - cleaning up...`);
    let clean_exit = false;
    setTimeout(() => {
        clean_exit || process.abort();
    }, 5000);

    // call graceful stop routine
    await Service.stop();

    clean_exit = true;
    process.exit();
}

//catches ctrl+c event
process.on('SIGINT', _handle_int_and_term_signals.bind(this));
//catches program termination event
process.on('SIGTERM', _handle_int_and_term_signals.bind(this));

//do something when app is closing
/* istanbul ignore next */
process.on('exit', async () => {
    logger.info('Service - exiting...');
});

/* istanbul ignore next */
process.on('uncaughtException',(err: Error) => {
    logger.error(`UncaughtException: ${err?.message}`, err);
    process.exit(999);
});
