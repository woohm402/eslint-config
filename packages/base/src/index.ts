import ESLintPluginESLintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslint from '@eslint/js';
import tseslint, { ConfigWithExtends } from 'typescript-eslint';

const consoleLogRestrictSyntax = [
  {
    selector:
      "CallExpression[callee.object.name='console'][callee.property.name='log']",
    message:
      'console.log() 가 main 에 머지되는 것은 실수일 수 있습니다. 의도하지 않았다면 제거하고, 의도했다면 console.debug() 등 다른 메서드를 사용해주세요.',
  },
];

const envRestrictSyntax = [
  {
    selector: 'MemberExpression[object.name=process][property.name=env]',
    message:
      '환경변수를 여러 곳에서 접근하는 것은 위험할 수 있습니다. envAllowedFiles 에 소수의 파일들을 등록하고 그곳에서만 접근해주세요.',
  },
  {
    selector:
      'MemberExpression[object.meta.name=import][object.property.name=meta][property.name=env]',
    message:
      '환경변수를 여러 곳에서 접근하는 것은 위험할 수 있습니다. envAllowedFiles 에 소수의 파일들을 등록하고 그곳에서만 접근해주세요.',
  },
];

const baseRules: ConfigWithExtends = {
  plugins: {
    'simple-import-sort': simpleImportSort,
    '@eslint-community/eslint-comments':
      ESLintPluginESLintCommentsConfigs.recommended.plugins[
        '@eslint-community/eslint-comments'
      ],
  },
  rules: {
    'simple-import-sort/imports': 'error',
    '@eslint-community/eslint-comments/no-use': ['error', { allow: [] }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumber: true,
        allowRegExp: false,
        allowNever: false,
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowNullableEnum: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
  },
};

const noRestrictedSyntaxForEnvNotAllowedFiles = (
  options: Options,
): ConfigWithExtends => ({
  ignores: options.envAllowedFiles ?? [],
  rules: {
    'no-restricted-syntax': [
      'error',
      ...consoleLogRestrictSyntax,
      ...envRestrictSyntax,
    ],
  },
});

const noRestrictedSyntaxForEnvAllowedFiles = (
  options: Options,
): ConfigWithExtends => ({
  files: options.envAllowedFiles ?? [],
  rules: {
    'no-restricted-syntax': ['error', ...consoleLogRestrictSyntax],
  },
});

type Options = { envAllowedFiles?: string[]; tsconfigRootDir: string };

export default (options: Options) =>
  tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          project: true,
          tsconfigRootDir: options.tsconfigRootDir,
        },
      },
    },
    baseRules,
    ...(options?.envAllowedFiles && options.envAllowedFiles.length > 0
      ? [noRestrictedSyntaxForEnvAllowedFiles(options)]
      : [noRestrictedSyntaxForEnvNotAllowedFiles(options)]),
  );
