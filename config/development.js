'use strict';

/**
 * Config file for NODE_ENV=dev
 */
var config = {};

config.SECURESITE = process.env.SECURESITE || 'false';

module.exports = config;
