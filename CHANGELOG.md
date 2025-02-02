# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.0](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.12...v1.1.0) (2024-04-12)


### Features

* code quality enhancements ([5a84f76](https://github.com/mojaloop/mifos-core-connector/commit/5a84f76f2f2fc675094c4217b6a38b3f17fb9973))


### Bug Fixes

* fixed failing test cases ([6d105ee](https://github.com/mojaloop/mifos-core-connector/commit/6d105eec27d0c142c94bf5b1958f70bff7fb4a86))

### [0.0.12](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.11...v0.0.12) (2024-03-25)


### Bug Fixes

* validate account returned from IBAN to have length > 1 ([122eb88](https://github.com/mojaloop/mifos-core-connector/commit/122eb88515108aad3f34b9fd91016ea132920f02))

### [0.0.11](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.10...v0.0.11) (2024-03-25)

### [0.0.10](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.9...v0.0.10) (2024-03-25)


### Bug Fixes

* removed undefined optional fields from response bodies in quotes and transfers ([cd523e4](https://github.com/mojaloop/mifos-core-connector/commit/cd523e4bb2c8c2ad18f749f32e68dbb3683efb15))

### [0.0.9](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.8...v0.0.9) (2024-03-25)


### Bug Fixes

* make merchantClassificationCode optional in get parties response ([a1349e0](https://github.com/mojaloop/mifos-core-connector/commit/a1349e0b8b59ac26c0d9a11ce464d4c10966d5a2))

### [0.0.8](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.7...v0.0.8) (2024-03-25)


### Features

* make fspId, DateOfBirth and extensionList optional in get parties response ([2ea3f84](https://github.com/mojaloop/mifos-core-connector/commit/2ea3f841ea0691092ada39e6443cfea474732283))


### Bug Fixes

* removed extension list from Get parties response ([ca7c228](https://github.com/mojaloop/mifos-core-connector/commit/ca7c228dba7419a6fd009dc32c9c69185236647b))

### [0.0.7](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.6...v0.0.7) (2024-03-25)


### Bug Fixes

* made some fields optional ([1a7c2bf](https://github.com/mojaloop/mifos-core-connector/commit/1a7c2bf26582c45e5a54cb78cdd524f4b5af5cb0))

### [0.0.6](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.5...v0.0.6) (2024-03-25)


### Bug Fixes

* removed supported currencies and idsubvalue in response ([d943f0d](https://github.com/mojaloop/mifos-core-connector/commit/d943f0d6976e73f55a02c68d1165c1389531ed0d))

### [0.0.5](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.4...v0.0.5) (2024-03-25)

### [0.0.4](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.3...v0.0.4) (2024-03-22)


### Features

* implemented tests for transfers ([0283c7c](https://github.com/mojaloop/mifos-core-connector/commit/0283c7c09e0bcc908a396d5c4f16826f782932bd))
* implemented transfers function ([5ffbfb7](https://github.com/mojaloop/mifos-core-connector/commit/5ffbfb72eba28e1e1856fcd1653c063324838d5a))
* implemented transfers function routes ([6a36bd9](https://github.com/mojaloop/mifos-core-connector/commit/6a36bd942e2d8553d04a406b80e899c456aab476))

### [0.0.3](https://github.com/mojaloop/mifos-core-connector/compare/v0.0.2...v0.0.3) (2024-03-22)


### Features

* added types and functions to calculate quotes from fineract ([a8ea7d9](https://github.com/mojaloop/mifos-core-connector/commit/a8ea7d93ae2df2ac2c66d7193f995a84a569e70a))
* added types and functions to calculate quotes in core aggregate ([801d4ad](https://github.com/mojaloop/mifos-core-connector/commit/801d4ad62a3792b89bd78ebac886a18a68718965))
* finished implementing quoterequests function ([3320007](https://github.com/mojaloop/mifos-core-connector/commit/33200076bb4c664f322ea205606f6fbd1aa3c8cd))
* implemented routes to register /quoterequests ([2d6cdd7](https://github.com/mojaloop/mifos-core-connector/commit/2d6cdd7b62cb2a2bb699bb0488b3129e31943e08))

### [0.0.2](https://github.com/mojaloop/mifos-core-connector/compare/v1.1.3...v0.0.2) (2024-03-22)

### 1.1.3 (2024-03-22)


### Bug Fixes

* added pre-commit hook in .husky ([38f89f4](https://github.com/mojaloop/mifos-core-connector/commit/38f89f41a3c5390e55f4c180130adc1cf3999e0d))
* updated dependencies ([574c56d](https://github.com/mojaloop/mifos-core-connector/commit/574c56db683d8d82577e64d1543f2ea7b36cc321))
