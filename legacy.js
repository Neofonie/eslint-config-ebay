'use strict';

module.exports = {
    "extends": [
        'eslint-config-neofonie/rules/bp',
        'eslint-config-neofonie/rules/errors',
        'eslint-config-neofonie/rules/node',
        'eslint-config-neofonie/rules/style',
        'eslint-config-neofonie/rules/variables'
    ].map(require.resolve),
    "rules": {},
    "env": {
        "browser": true,
        "node": true,
        "amd": false,
        "mocha": true,
        "jasmine": false,
        "jquery": true
    }
};
