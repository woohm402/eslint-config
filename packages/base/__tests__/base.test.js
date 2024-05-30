import { ESLint } from 'eslint';
import baseConfig from '../index';
import { describe, it, expect } from 'vitest';

const eslint = new ESLint({ baseConfig });

describe('@woohm402/eslint-config-base', function () {
  it('right', async function () {
    const [result] = await eslint.lintFiles([`${__dirname}/right.js`]);

    expect(result.errorCount).toBe(0);
  });

  it('wrong', async function () {
    const [result] = await eslint.lintFiles([`${__dirname}/wrong.js`]);

    expect(result.errorCount).toBe(1);
  });
});
