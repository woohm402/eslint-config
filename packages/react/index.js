import woohm402 from '@woohm402/eslint-config-base';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from '@eslint/compat';

export default (options) => [
  ...woohm402(options),
  {
    plugins: {
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'error',
    },
  },
];
