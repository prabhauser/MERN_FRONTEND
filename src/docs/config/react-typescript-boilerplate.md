# Reactjs project with Typescript setup

## Reactjs project

Create a reactjs project by using create-react-app with the TypeScript template.

```
npx create-react-app my-app --template typescript
```

This will get you the bare minimum to start writing React with TypeScript. A few noticeable differences are:

the .tsx file extension
the tsconfig.json
the react-app-env.d.ts
The tsx is for “TypeScript JSX”. The tsconfig.json is the TypeScript configuration file, which has some defaults set. The react-app-env.d.ts references the types of react-scripts, and helps with things like allowing for SVG imports.

## ESLint/Prettier

In order to ensure that our code follows the rules of the project or your team, and the style is consistent, it’s recommended to set up ESLint and Prettier.
Create a .eslintrc file at the root and add the following

```
 {
    "parser": "babel-eslint",
    "plugins": ["react"],
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "es6": true
    },
    "globals": {
        "document": false
    },
    "rules": {
        "space-in-parens": [0, "always"],
        "template-curly-spacing": [0, "never"],
        "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
        "quotes": [1, "single", "avoid-escape"],
        "no-use-before-define": [2, { "functions": false }],
        "semi": [0, "never"],
        "prefer-const": 1,
        "react/prefer-es6-class": 0,
        "react/jsx-filename-extension": 0,
        "react/prop-types": [1],
        "react/no-array-index-key": [1],
        "class-methods-use-this": [1],
        "no-undef": [1],
        "no-case-declarations": [1],
        "no-return-assign": [1],
        "no-param-reassign": [1],
        "no-shadow": [1],
        "camelcase": [1],
        "no-underscore-dangle": [0, "always"]
    }
}

```

-   Create a .prettierrc file at the root and add the following:

```
{
   "singleQuote": true,
   "semi": true,
   "tabWidth": 4,
   "printWidth": 120,
   "trailingComma": "none"
}
```
