## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Build

```bash
# using docker command
$ docker build -t appsoft .
$ docker run -d -p 5001:5001 appsoft

# using make file
$ make build
$ make run
```