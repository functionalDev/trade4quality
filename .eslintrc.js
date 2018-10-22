module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // extends: [
  //   // add more generic rulesets here, such as:
  //   'eslint:recommended',
  //   // 'plugin:vue/essential'
  // ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always"]
  },
  globals: {}
}
