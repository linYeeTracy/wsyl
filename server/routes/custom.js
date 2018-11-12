/**
 * 用户管理
 */

const router = require('koa-router')();
const { Custom } = require('../db');
const { mongo } = require('../utils');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const moment = require('moment')
const { util } = require('../utils');

// const config = require('../config');

// const { uploadsAvatar } = config.server;

// 获取全部用户信息
router.get('/', async (ctx) => {
  try {
    console.log(1)
    const {byDate} = ctx.request.query
    if(byDate) {
      const currDate = moment(new Date()).format('L');
      const weekDayList = []
      // weekDayList.reduce((arr, next)=> {})
      for(let i=-1; i<6; i++) {
        weekDayList.push(i)
      }
      const alldays = await Custom.getInfo({});
      const formatDays = alldays.map((v, i)=> {
        v.birthday = moment(v.birthday).utcOffset(480).format('YYYY-MM-DD')
        v.weddingday = moment(v.weddingday).utcOffset(480).format('YYYY-MM-DD')
        return v
      })
      ctx.resp.success(formatDays);
      return ;
    }
    const data = await Custom.getInfo({});
    const formatDays = data.map((v, i)=> {
      v.birthday = moment(v.birthday).utcOffset(480).format('YYYY-MM-DD')
      v.weddingday = moment(v.weddingday).utcOffset(480).format('YYYY-MM-DD')
      return v
    })
    ctx.resp.success(util.formatDatas(formatDays));
  } catch (e) {
    ctx.resp.fail();
  }
});

// 新增客户信息
router.post('/', async (ctx) => {
  try {
    const data = await Custom.create(ctx.request.body);
    ctx.resp.success(data);
  } catch (e) {
    // debug(e)
    ctx.resp.fail();
  }
});

// 更新客户信息
router.put('/:customID', async (ctx) => {
  const { customID } = ctx.params;
  try {
    await Custom.update(
      {
        _id: customID
      },
      ctx.request.body
    );
    ctx.resp.success({});

  } catch (e) {
    ctx.resp.fail();
  }
});

// 删除客户信息
router.delete('/:customID', async (ctx) => {
  const { customID } = ctx.params;
  try {
    await Custom.delete({
      _id: customID
    });
    ctx.resp.success({});
  } catch (e) {
    ctx.resp.fail();
  }
});

module.exports = router;
