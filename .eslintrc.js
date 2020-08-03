module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  // extends: ["plugin:@typescript-eslint/recommended", "react-app", "plugin:prettier/recommended"],
  // extends: [
  //   "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  //   "plugin:react/recommended",
  //   "plugin:jsx-control-statements/recommended",
  //   "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  //   "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  //   "prettier/react",
  // ],
  extends: ["plugin:prettier/recommended", "react-app"],
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  // plugins: [
  //   'html'
  // ],
  // globals: {
  //   $: true,
  //   Swiper: 1,
  //   layer: 1
  // },
  rules: {
    "prettier/prettier": "error",
    "no-void": 0,
    "no-new": 0,
    "no-useless-concat": "off"
    // "arrow-parens": "avoid",
    // "comma-dangle": "never",
  }
};
