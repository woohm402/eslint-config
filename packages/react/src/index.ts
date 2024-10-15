import base from '@woohm402/eslint-config-base';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';

export default (options: Parameters<typeof base>[0]) => [
  ...base(options),
  react.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
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
