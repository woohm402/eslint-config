import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, eslintPluginPrettierRecommended, ...tseslint.configs.recommended, {
  plugins: { 'simple-import-sort': simpleImportSort },
  rules: { 'simple-import-sort/imports': 'error' },
});
