import { type KnipConfig } from 'knip';

export default (): KnipConfig => {
  return {
    workspaces: {
      '.': {
        entry: ['scripts/deploy.ts'],
      },
      'packages/base': {
        project: ['!__tests__/**'],
      },
      'packages/react': {
        project: ['!__tests__/**'],
      },
    },
  };
};
