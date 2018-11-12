/**
 * 数据库配置
 */
const config = {
  addr: process.env.mongoAddr || 'mongodb://localhost:27017/ws'
};

module.exports = config;
