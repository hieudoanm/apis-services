/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      lines: 90,
      functions: 90,
      statements: 90,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
