'use strict';
const Service = require('egg').Service;
const qs = require('qs');
class UserInfoService extends Service {
  async getWXAuth(Code) {
    const { ctx } = this;
    const obj = {
      appid: 'wx188be89f330876f7',
      // secret: '0bbec777652406507af7c0516d82dbb1',
      code: Code,
      grant_type: 'authorization_code',
    };
    const res = await ctx.curl('https://api.weixin.qq.com/sns/oauth2/access_token?' + qs.stringify(obj));
    return JSON.parse(res.data.toString());
  }

  async getInfo(access_token, openid) {
    const { ctx } = this;
    const res = await ctx.curl('https://api.weixin.qq.com/sns/userinfo?access_token=' + access_token + '&openid=' + openid + '&lang=zh_CN');
    return JSON.parse(res.data.toString());
  }
}
module.exports = UserInfoService;
