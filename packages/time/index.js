'use strict';

const dayjs = require('dayjs');

exports.handler = (event, context, callback) => {
  callback(null, dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'));
};
