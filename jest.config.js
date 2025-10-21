/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",              // ⚡ Utilise ts-jest (pas Babel)
  testEnvironment: "jsdom",       // Pour simuler le DOM
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Supporte tes alias @/...
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
  ],
};
