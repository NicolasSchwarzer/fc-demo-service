'use strict';

const { exec } = require('child_process');
const path = require('path');

const shellFilePath = path.join(process.env.FC_FUNC_CODE_PATH, 'echo.sh');

exports.handler = (event, context, callback) => {
  exec(shellFilePath, (err, stdout, stderr) => {
    if (err) {
      callback(err);
    } else {
      console.log(stdout, stderr);
      callback(null, stdout);
    }
  });
};
