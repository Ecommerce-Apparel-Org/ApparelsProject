module.exports = {
  testEnvironment: "jsdom", // Required for DOM testing
  moduleDirectories: ["node_modules", "src"], // Optional: Simplifies imports
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Optional: Jest setup file
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Babel transformation for React
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock styles
  },
  collectCoverage: true, // Ensure coverage is collected
  coverageThreshold: {
    global: {
      statements: 80, // Percentage of statements covered by tests
      branches: 80, // Percentage of branches covered by tests
      functions: 80, // Percentage of functions covered by tests
      lines: 80, // Percentage of lines covered by tests
    },
  },
  coverageReporters: ["json", "text", "lcov"],
};
