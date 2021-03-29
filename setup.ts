import { exec } from 'child_process';

export const setUp = () => {
  return new Promise((resolve, reject) => {
    exec('yarn db migrate:refresh && yarn db seed', (err, stdout) => {
      if (err) reject(err);
      resolve(stdout);
    });
  });
};
