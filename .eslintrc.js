module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:prettier/recommended',
      'prettier',
      'eslint:recommended'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      project: 'tsconfig.json',
    },
    env: {
      es6: true,
      node: true,
    },
    "rules": {
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "no-var": "error",
        "no-console": "warn",
        "arrow-parens": [
            "error",
            "always"
        ],
        "no-else-return": [
            "error",
            {
                "allowElseIf": false
            }
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowTypedFunctionExpressions": true
            }
        ],
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/object-curly-spacing": [
            "error",
            "always"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/comma-dangle": [
            "error",
            "always-multiline"
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "argsIgnorePattern": "^_",
                "caughtErrors": "all"
            }
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                "allowSingleExtends": true
            }
        ],
        "import/no-unresolved": "off",
        "import/no-default-export": "error",
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    [
                        "parent",
                        "sibling",
                        "index"
                    ],
                    [
                        "object",
                        "type",
                        "unknown"
                    ]
                ],
                "pathGroups": [
                    {
                        "pattern": "react*",
                        "group": "builtin"
                    },
                    {
                        "pattern": "react*/*",
                        "group": "builtin"
                    }
                ],
                "pathGroupsExcludedImportTypes": [
                    "internal"
                ],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ]
    },
  };