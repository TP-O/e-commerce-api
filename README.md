# E-commerce Server ![CI/CD](https://github.com/TP-O/e-commerce-server/actions/workflows/main.yml/badge.svg)

## Installation

### Install dependencies

```bash
# yarn
$ yarn install

# npm
$ npm install
```

### Environment variables
```bash
$ cp .env.example .env
```

### Development

```bash
# yarn
$ yarn db migrate && yarn db seed
$ yarn dev

# npm
$ npm run db migrate && npm run db seed
$ npm run dev

# docker
$ yarn docker:dev up --build
$ yarn docker:dev up exec app yarn db migrate && yarn db seed
```
