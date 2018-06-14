'use strict';

module.exports = {
    "extends": [
        'eslint-config-neofonie/legacy',
        'eslint-config-neofonie/rules/es6'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2017
    },
    "rules": {}
};
