module.exports = {
  "ignorePatterns": [
    ".eslintrc.js"
  ],
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"]
  },
  "parserOptions": {
    "ecmaVersion": 2021
  }
};
