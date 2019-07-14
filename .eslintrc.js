module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
        'plugin:react/recommended', // uses react-specific linting rules
        'prettier/@typescript-eslint',
        "plugin:prettier/recommended",
        'prettier/react' // disables react-specific linting rules that conflict with prettier
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser"',
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        jsx: true,
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
        project: './tsconfig.json'
    },
    rules: {
        "quotes": [
            "error",
            "single"
        ],
        "prettier/prettier": [
            "error", 
            { 
                "singleQuote": true,
                "tabWidth": 4
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "react/prop-types": "off"
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
