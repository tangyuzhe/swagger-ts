/* eslint valid-jsdoc: "off" */

'use strict';
const Op = require('sequelize').Op;
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595494968353_179';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'peacelc',
    host: '124.70.188.227',
    port: 3306,
    username: 'root',
    password: 'Fznfzn509.',
    timezone: '+08:00',
    define: {
      timestamps: false,
    },
    operatorsAliases: false,
  };

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '平安灵川',
      description: '平安灵川公众号',
      version: 'v1',
    },
    securityDefinitions: {
      apikey: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    schemes: ['http', 'https'],
    enableSecurity: true,
    routerMap: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
