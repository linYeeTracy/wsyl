/**
 * 路由模块
 */

const router = require('koa-router')();
const custom = require('./custom');
const user = require('./user')

// 登陆模块
router.use(
  '/api/v1/customManager/customs/',
  custom.routes(),
  custom.allowedMethods()
);

// 登陆模块
router.use(
  '/api/v1/userManager',
  user.routes(),
  user.allowedMethods()
);

module.exports = router;
