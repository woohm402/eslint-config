import typescript from 'typescript';
import eslint from 'eslint';

// eslint-disable-next-line
const a = 1;

console.log({ eslint, typescript });

function b() {
  const a = 2;
  return a;
}

const c: number = 1;
const d = `aa ${c === 1 || null}`;

const e: boolean | null = false;
const f = e && 'asdf';

// below is correct
console.debug(a, d, f);
b();
