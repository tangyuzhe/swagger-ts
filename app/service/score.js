'use strict';
const Service = require('egg').Service;
const Code = require('../util/code');
class ScoreService extends Service {
  /**
   * 创建成绩单
   * @param score
  */
  async create(score) {
    const { ctx } = this;
    try {
      const res = await ctx.model.Score.create(score);
      return Object.assign({}, Code.Add.SUCCESS, {
        data: res,
      });
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }

  /**
   * 查询指定日期的分数
   * @param Name
   * @param startTime
   * @param endTime
   */
  async queryScore(Name, startTime, endTime) {
    const { ctx } = this;
    const res = await ctx.model.Score.findAll({
      attributes: ['score'],
      where: {
        name: Name,
        time: {
          $between: [startTime, endTime],
        },
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


module.exports = ScoreService;
