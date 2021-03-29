module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 180000,
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  moduleNameMapper: {
    '@logger': '<rootDir>/src/logger/index',
    '@router': '<rootDir>/src/router/index',
    '@helper': '<rootDir>/src/helper/index',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@exception/(.*)': '<rootDir>/src/exception/$1',
    '@database/(.*)': '<rootDir>/src/database/$1',
    '@validator(.*)': '<rootDir>/src/validator$1',
    '@controller/(.*)': '<rootDir>/src/controller/$1',
    '@service/(.*)': '<rootDir>/src/service/$1',
    '@model/(.*)': '<rootDir>/src/model/$1',
  },
};
