module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // 'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'semi': ['warning', 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'quotes': ['warning', 'single', { 'avoidEscape': true }],
    'comma-dangle': ['warning', 'always-multiline'],
    'vue/require-default-prop': 'off',
  }
}