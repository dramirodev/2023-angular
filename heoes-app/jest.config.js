module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testEnvironment: 'jsdom',
  verbose: true,
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};
