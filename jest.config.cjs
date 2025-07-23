const { compilerOptions } = require('./tsconfig');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^api/(.*)$': '<rootDir>/src/api/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^common/(.*)$': '<rootDir>/src/common/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^modules/(.*)$': '<rootDir>/src/modules/$1',
    '^router/(.*)$': '<rootDir>/src/router/$1',
    '^types/(.*)$': '<rootDir>/src/types/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      { diagnostics: { ignoreCodes: ['TS151001'] } },
    ],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
