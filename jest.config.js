/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@orm/(.*)$': '<rootDir>/src/prisma/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@routes$': '<rootDir>/src/routes',
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@controllers$': '<rootDir>/src/controllers',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@services$': '<rootDir>/src/services',
    '^@app$': '<rootDir>/index.ts',
    '^@models$': '<rootDir>/src/models',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@requestType$': '<rootDir>/src/requestType',
    '^@requestType/(.*)$': '<rootDir>/src/requestType/$1'
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10
    }
  }
};
