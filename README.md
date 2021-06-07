# E-commerce Server ![CI/CD](https://github.com/TP-O/e-commerce-server/actions/workflows/main.yml/badge.svg)

## About
This is our Principles of Database Management project (Sentiment Analysis System For Product Rating as an e-commerce website API) with the purpose of comprehending the hidden sentiments of customers in feedback comments as well as analyzing their product rating patterns. Besides, the project aims to develop a basic website with various simple but essential features in order to enhance the skills in building simple functionalities that access data stored in database servers as well as gain better understanding of entity-relation. Finally, we do not apply any knowledge of AI in this project.
[Mode details](https://github.com/TP-O/e-commerce-server/blob/dev/report/Report.pdf)

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

## API document
Updating... :D

## References

+ [Manage Hierarchical Data](http://mikehillyer.com/articles/managing-hierarchical-data-in-mysql/)
