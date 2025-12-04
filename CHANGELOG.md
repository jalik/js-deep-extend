# Changelog

## v3.0.1 (2025-12-04)

- deps: upgrade dependencies

## v3.0.0 (2025-11-20)

**BREAKING CHANGES**

- chore: remove default export

## v2.0.0 (2024-11-18)

**BREAKING CHANGES**

- chore(deps): move to node >= 20

**OTHERS**

- fix: do not use original object reference when merging nested objects

## v1.2.2 (2023-05-01)

- Removed named export `{ deepExtend }` from index file (it should not break things since the
  official way is to use the import default syntax)
- Upgraded dependencies

## v1.2.1 (2023-04-14)

- Added missing dev dependency (rimraf)

## v1.2.0 (2023-04-14)

- Added TypeScript declaration files

## v1.1.14

- Upgraded dependencies

## v1.1.13

- Upgraded dependencies

## v1.1.12

- Fixed potential prototype pollution while merging
- Upgraded dependencies

## v1.1.11

- Upgraded dependencies

## v1.1.10

- Added `esnext` and `sideEffects` to package.json
- Renamed deep-extend.js to deepExtend.js
- Upgraded dependencies

## v1.1.9 (deprecated)

**This version has been published with unwanted changes**

## v1.1.8

- Upgraded dependencies

## v1.1.7

- Upgraded dependencies

## v1.1.6

- Fixes merging of arrays by cloning them in the extended object
- Upgraded dependencies

## v1.1.5

- Upgraded dependencies

## v1.1.4

- Upgraded dependencies

## v1.1.3

- Upgraded dependencies

## v1.1.2

- Upgraded dependencies

## v1.1.0

- Lib available in ES6+ syntax (see `src` folder) to enable auto-completion in IDEs

## v1.0.2

- Upgraded dependencies

## v1.0.1

- Fixes recursive merging of arrays

## v1.0.0

- First public release
