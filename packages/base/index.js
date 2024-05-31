import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, eslintPluginPrettierRecommended, ...tseslint.configs.recommended, {
  plugins: { 'simple-import-sort': simpleImportSort },
  rules: {
    'simple-import-sort/imports': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name='log']",
        message:
          'console.log() 가 main 에 머지되는 것은 실수일 수 있습니다. 의도하지 않았다면 제거하고, 의도했다면 console.debug() 등 다른 메서드를 사용해주세요.',
      },
    ],
  },
});
