import eslint from 'eslint';
import typescript from 'typescript';

const a = [[]];

const b = a.map((_) => _.map((_) => _));

console.debug({ eslint, typescript, b });
