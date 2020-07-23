'use strict';
const Service = require('egg').Service;
const Code = require('../util/code');
class IntegralsService extends Service {
  /**
   * 修改个人积分
   * @param Name
   * @param Openid
   * @param Integrals
  */
  async update(Name, Openid, Integrals) {
    const { ctx } = this;
    const data = await ctx.model.Integrals.findOne({
      where: {
        name: Name,
      },
    });
    const query = {};
    if (Openid) {
      query.openid = Openid;
    }
    if (Integrals) {
      query.integrals = Integrals;
    }
    if (!data) {
      return Object.assign({}, Code.Find.ERROE);
    }
    if (data) {
      const res = await ctx.model.Integrals.update(query, {
        where: {
          name: Name,
        },
      });
      if (!res) {
        return Object.assign({}, Code.Update.ERROE);
      }
      if (res) {
        return Object.assign({}, Code.Update.SUCCESS, {
          data: res,
        });
      }
    }
  }


  /**
   * 查询个人积分
   * @param Name
   */
  async queryIntegral(Name) {
    const { ctx } = this;
    const res = await ctx.model.Integrals.findOne({
      attributes: ['integrals'],
      where: {
        name: Name,
      },
    });
    if (!res) {
      return Object.assign({}, Code.Find.ERROE);
    }
    if (res) {
      return Object.assign({}, Code.Find.SUCCESS, {
        data: res,
      });
    }
  }
}
module.exports = IntegralsService;
