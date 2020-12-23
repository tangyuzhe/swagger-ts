'use strict';
const Service = require('egg').Service;
const Code = require('../util/code');
class IntegralsService extends Service {
  /**
   * 已存在积分进行修改
   * @param {*} Openid 
   * @param {*} Integral 
   */
  async UpdateIntegral(Openid, Integral) {
    const { ctx } = this;
    const res = await ctx.model.Integrals.update(
      { integrals: Integral },
      { where: { openid: Openid } }
    )
    return Object.assign({}, {
      data: res,
    });
  }

  /**
   * 添加积分
   * @param {*} integral 
   */
  async create(integral) {
    const { ctx } = this;
    const res = await ctx.model.Integrals.create(integral)
    return Object.assign({}, Code.Add.SUCCESS, {
      data: res,
    });
  }


  /**
   * 查询个人积分
   * @param Openid
   */
  async queryIntegral(Openid) {
    const { ctx } = this;
    const res = await ctx.model.Integrals.findOne({
      attributes: ['integrals'],
      where: {
        openid: Openid,
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

  /**
   * 根据积分排序
   */
  async list() {
    const { ctx } = this;
    const res = await ctx.model.Integrals.findAll({
      'order': [['integrals', 'DESC']]
    })
    return Object.assign({}, Code.Find.SUCCESS, {
      data: res
    })
  }
}
module.exports = IntegralsService;
