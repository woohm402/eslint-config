[![NPM Version](https://img.shields.io/npm/v/%40woohm402%2Feslint-config-base)](https://www.npmjs.com/package/@woohm402/eslint-config-base)

# @woohm402/eslint-config-base

ESLint configuration for TypeScript projects

<br />

## Installation

install from npm or yarn:

```sh
npm install --save-dev @woohm402/eslint-config-base
```

Add the following to your `eslint.config.js` file:

```js
import woohm402EslintConfigBase from '@woohm402/eslint-config-base';

export default [...woohm402EslintConfigBase];
```

<br />

## Rules

This configuration extends the following recommended configurations:

- `eslint`
- `eslint-plugin-prettier`
- `typescript-eslint`

It also includes the following additional rules:

- `'simple-import-sort/imports': 'error'`
  - This rule enforces a consistent order for import statements.
- `'@eslint-community/eslint-comments/no-use': ['error', { allow: [] }]`
  - This rule disallows the use of eslint comments e.g. `// eslint-disable-next-line`.
  - If you want to disable a rule, you should do so in the configuration file.
- `'no-restricted-syntax': ['error', ...]`
  - This rule disallows usage of `console.log`.
  - Usually console.log is used for debugging purposes and should be removed before committing code.
  - If you intended to print to the console, use alternative methods like `console.debug` or `console.error`.
