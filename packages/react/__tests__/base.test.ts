import { ESLint } from 'eslint';
import { describe, it, expect } from 'vitest';
import path from 'path';

const eslint = new ESLint({
  overrideConfigFile: path.resolve(__dirname, '_config.js'),
});

describe('@woohm402/eslint-config-react', function () {
  it('right', async function () {
    const [result] = await eslint.lintFiles([`${__dirname}/right.tsx`]);

    expect(result.errorCount).toBe(0);
  });

  it('wrong', async function () {
    const [result] = await eslint.lintFiles([`${__dirname}/wrong.tsx`]);

    expect(result.errorCount).toBe(1);
  });
});
