'use strict';

module.exports = appInfo => {
  const config =  {
    mysql: {
    // 单数据库信息配置
    client: {
    // host
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '251879836',
    // 数据库名
    database: 'activity_share',
    },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,}};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519286798776_5097';

  // add your config here
  config.middleware = [];

  return config;
};
