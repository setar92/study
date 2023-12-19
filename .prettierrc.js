module.exports = {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: "preserve",
    trailingComma: "all",
    bracketSpacing: true,
    arrowParens: "always",
    overrides: [
        {
            "files": "*.scss",
            "options": {
                "singleQuote": false
            }
        },
        {
            "files": "*.html",
            "options": {
                "printWidth": 9999
            }
        }
    ]
}