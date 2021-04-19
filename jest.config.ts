module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 180000,
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  moduleNameMapper: {
    '@app(.*)': '<rootDir>/src/app$1',
    '@modules(.*)': '<rootDir>/src/modules$1',
    '@configs(.*)': '<rootDir>/src/configs$1',
    '@routers(.*)': '<rootDir>/src/routers$1',
  },
};
