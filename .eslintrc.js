module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-undef": "off"
    // "no-console": "war"
  }
};
