import { exec } from 'child_process';

const target = process.argv[2];

if (target !== 'react' && target !== 'base') throw new Error('Invalid target');

const execa = (command: string) =>
  new Promise((resolve, reject) =>
    exec(command, (err, stdout, stderr) =>
      err ? reject(stderr) : resolve(stdout),
    ),
  );

const deploy = async (target: 'base' | 'react') => {
  console.log('Deploying', target);
  const packageJson = await import(`../packages/${target}/package.json`);
  const tagName = `react-v${packageJson.version}`;
  await execa(`git tag ${tagName}`);
  await execa(`git push origin ${tagName}`);
  console.log('Tag pushed', tagName);
};

deploy(target);
