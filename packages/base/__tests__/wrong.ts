import typescript from 'typescript';
import eslint from 'eslint';

// eslint-disable-next-line no-console
console.log({ eslint, typescript });

const a = 1;

function b() {
  const a = 2;
  return a;
}

// below is correct
console.debug(a);
b();
