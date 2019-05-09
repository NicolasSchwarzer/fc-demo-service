'use strict';

const path = require('path');
const { exec, spawn } = require('child_process');
const uuid = require('uuid/v4');

const shellFilePath = path.join(process.env.FC_FUNC_CODE_PATH, 'build.sh');
const dir = 'repos';

exports.handler = (event, context, callback) => {
  const name = uuid();
  const child = spawn(shellFilePath, [dir, name]);

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });
  child.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  child.on('close', (code) => {
    if (code) {
      callback(`build task exit with code ${code}`);
    } else {
      exec(`ls -al ${path.join('/tmp', dir, name, 'build/**/*')}`, (err, stdout, stderr) => {
        if (err) {
          callback(err);
        } else {
          console.log(stdout, stderr);
          callback(null, stdout);
        }
      });
    }
  });
};
