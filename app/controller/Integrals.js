'use strict';

const Controller = require('egg').Controller;
/**
 * @controller Integral
*/
class IntegralsController extends Controller {
  /**
   * @summary 修改个人积分
   * @description 每次做完题提交成绩获取积分
   * @router put /api/integrals
   * @request query string openid
   * @request query double integrals
   * @response 200 Integrals 查询成功
   */
  async update() {
    const { ctx, service } = this;
    const openid = ctx.query.openid;
    const integrals = ctx.query.integrals;
    ctx.body = await service.integrals.UpdateIntegral(openid, integrals);
  }

  /**
   * @summary 查询个人积分
   * @description 查询个人积分
   * @router get /api/integrals
   * @request query string openid
   * @response 200 Integrals 查询成功
   */
  async queryIntegral() {
    const { ctx, service } = this;
    ctx.body = await service.integrals.queryIntegral(ctx.query.openid);
  }

  /**
     * @summary 添加积分
     * @description 往试题库添加一道题目
     * @router post /api/integrals
     * @request body Integrals *body
     * @response 200 Integrals 创建成功
     */
  async create() {
    const { ctx, service } = this;
    ctx.body = await service.integrals.create(ctx.request.body)
  }

  /**
    * @summary 积分排序
    * @description 根据积分从大到小排序
    * @router get /api/integrals/rank
    * @response 200 Integrals 查询成功
   */
  async list() {
    const { ctx, service } = this;
    ctx.body = await service.integrals.list()
  }
}

module.exports = IntegralsController;
