'use strict';

const Controller = require('egg').Controller;
/**
 * @controller Score
*/
class ScoreController extends Controller {
  /**
   * @summary 创建成绩
   * @description 提交测试题存取成绩
   * @router post /api/score
   * @request body Score *body
   * @response 200 Score 创建成功
   */
  async create() {
    const { ctx, service } = this;
    ctx.body = await service.score.create(ctx.request.body);
  }


  /**
   * @summary 查询
   * @description 查询测试成绩
   * @router get /api/score
   * @request query string openid
   * @request query string starttime
   * @request query string endtime
   * @response 200 Score 查询成功
   */
  async QueryScore() {
    const { ctx, service } = this;
    ctx.body = await service.score.queryScore(ctx.query.openid, ctx.query.starttime, ctx.query.endtime);
  }

  /**
   * @summary 查询全部成绩
   * @description 查询测试成绩
   * @router get /api/score/all
   * @request query string openid
   * @response 200 Score 查询成功
   */
  async list() {
    const { ctx, service } = this;
    ctx.body = await service.score.list(ctx.query.openid);
  }
}

module.exports = ScoreController;
