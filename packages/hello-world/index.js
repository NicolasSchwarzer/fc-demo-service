'use strict';

module.exports = {
  handler(event, context, callback) {
    console.log('Hello World!');
    callback(null, 'Hello World!');
  },
};
