module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  covaregeDirectory: 'coverage',
  testeEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
