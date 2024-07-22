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
const d = `aa ${c || null}`;

// below is correct
console.debug(a, d);
b();
