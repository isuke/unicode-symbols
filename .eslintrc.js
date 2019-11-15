module.exports = {
  "env": {
    "es6": true,
    "amd": true,
    "node": true,
    "browser": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "error",
    "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true,
        "trailingComma": "es5",
        "printWidth": 160,
        "arrowParens": "always"
      }
    ]
  }
};
