module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ]
};
