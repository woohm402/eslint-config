import base from '@woohm402/eslint-config-base';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import { fixupPluginRules, fixupConfigRules } from '@eslint/compat';

export default (options: Parameters<typeof base>[0]) => [
  ...base(options),
  ...fixupConfigRules(reactRecommended),
  {
    plugins: {
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
