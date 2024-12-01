import "@testing-library/jest-dom"; // Extends Jest matchers like toBeInTheDocument
// jest.setup.js
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
