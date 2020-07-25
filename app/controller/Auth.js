'use strict';

const Controller = require('egg').Controller;
const qs = require('qs');
/**
 * @controller Auth
 */
class UserInfoController extends Controller {
  /**
   * @summary 微信公众号授权
   * @description 授权获取code后进行API请求
   * @router get /api/user/WXCode
   * @request query string *code
  */
  async getWXAuth() {
    const { ctx, service } = this;
    ctx.body = await service.user.getWXAuth(ctx.query.code);
    ctx.redirect('http://thesecondclass.linaxhua.cn:8081/#/pages/index/index?' + qs.stringify(ctx.body));
  }

  /**
   * @summary 用户信息
   * @description 用户信息接口
   * @router get /api/user/WXinfo
   * @request query string *access_token
   * @request query string *openid
   */
  async getWXInfo() {
    const { ctx, service } = this;
    ctx.body = await service.user.getInfo(ctx.query.access_token, ctx.query.openid);
  }
}
module.exports = UserInfoController;
