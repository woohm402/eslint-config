[![NPM Version](https://img.shields.io/npm/v/%40woohm402%2Feslint-config-react)](https://www.npmjs.com/package/@woohm402/eslint-config-react)

# @woohm402/eslint-config-react

ESLint configuration for TypeScript React projects.
This includes `@woohm402/eslint-config-base` and additional rules for React projects.

<br />

## Installation

install:

```sh
npm install --save-dev @woohm402/eslint-config-react
```

Add the following to your `eslint.config.js` file:

```js
import woohm402EslintConfigReact from '@woohm402/eslint-config-react';

export default [
  ...woohm402EslintConfigReact({
    envAllowedFiles: ['src/main.ts'],
    tsconfigRootDir: import.meta.dirname,
  }),
];
```

<br />

## Rules

This configuration extends the following recommended configurations:

- `eslint-plugin-react-hooks`

But treats the following rules as errors:

- `'react-hooks/exhaustive-deps': 'error'`
  - This rule is super important for using `useEffect` correctly.
