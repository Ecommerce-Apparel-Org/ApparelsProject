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
};
