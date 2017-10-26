module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'forOf': true,
      'jsx': true,
      'es6': true,
      'experimentalObjectRestSpread' : true
    },
    'sourceType': 'module'
  },
  rules: {
    'strict': 0
  },
  extends: 'eslint:recommended',
  plugins: ['angular'],
  env: {
    'node': true,
    'browser': true,
    'jasmine': true
  },
  ecmaFeatures: {
    'modules': true
  },
  globals: {
    'angular': true,
    'module': true,
    'inject': true,
    'require': true,
    'process': true,
    '_': true
  }
};
