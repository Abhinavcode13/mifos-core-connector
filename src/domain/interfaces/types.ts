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

import { ReqRefDefaults, ServerRoute } from "@hapi/hapi/lib/types";

 export type THttpResponse<R> = {
    data: R
    statusCode: number
 }

 export type TRequestOptions = {
    payload?:unknown | undefined;
    timeout_ms?:number; 
    method?: string;
    headers?: unknown | undefined;
 }

export type Quote = {
   expiration: string;
   extensionList: unknown[];
   geoCode: unknown;
   payeeFspCommissionAmount: string;
   payeeFspCommissionAmountCurrency: string;
   payeeFspFeeAmount: string;
   payeeFspFeeAmountCurrency: string;
   payeeReceiveAmount: string;
   payeeReceiveAmountCurrency: string;
   quoteId: string;
   transactionId: string;
   transferAmount: string;
   transferAmountCurrency: string;
};

export type Payee = {
   dateOfBirth: string;
   displayName: string;
   extensionList: unknown[];
   firstName: string;
   fspId: string;
   idSubValue: string;
   idType: string;
   idValue: string;
   lastName: string;
   merchantClassificationCode: string;
   middleName: string;
   type: string;
   supportedCurrencies: string;
   kycInformation: string;
};

export type Transfer = {
   completedTimestamp: string;
   fulfilment: string;
   homeTransactionId: string;
   transferState: string;
};

export type TLookupPartyInfoResponse = THttpResponse<Payee>;


export interface IRoutes{
   getRoutes():ServerRoute<ReqRefDefaults>[]
}