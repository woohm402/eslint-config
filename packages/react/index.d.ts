import { ESLint } from 'eslint';

declare const eslintConfigBase: ESLint.Config;

export = (options?: { envAllowedFiles?: string[] }) => eslintConfigBase;
