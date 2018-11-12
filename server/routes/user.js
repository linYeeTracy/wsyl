/**
 * 用户管理
 */

const router = require('koa-router')();

const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}

// 新增客户信息
router.post('/login', async (ctx) => {
  try {
    const req = ctx.request.body
    ctx.resp.success({token: USER_MAP[req.userName].token});
  } catch (e) {
    ctx.resp.fail();
  }
});

router.get('/getUserInfo', async (ctx) => {
  try {
    const {token}  = ctx.request.query;
    ctx.resp.success(USER_MAP[token]);
  } catch (e) {
    // debug(e)
    ctx.resp.fail();
  }
});
module.exports = router;
