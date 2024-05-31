import { ESLint } from 'eslint';
import { describe, it, expect } from 'vitest';
import path from 'path';

const eslint = new ESLint({ overrideConfigFile: path.resolve(__dirname, '../index.js') });

describe('@woohm402/eslint-config-base', function () {
  it('right', async function () {
    const [result] = await eslint.lintFiles([`${__dirname}/right.ts`]);

    expect(result.errorCount).toBe(0);
  });

  it('wrong', async function () {
    const [result] = await eslint.lintFiles([`${__dirname}/wrong.ts`]);

    expect(result.errorCount).toBe(1);
  });
});
