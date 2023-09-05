module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': [
      'babel-jest', // or "ts-test" or whichever transformer you're using
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@ag-grid-community|@ag-grid-enterprise)/)',
  ],
};
