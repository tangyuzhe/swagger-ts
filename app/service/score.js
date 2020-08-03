'use strict';
const Service = require('egg').Service;
const Code = require('../util/code');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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
   * @param Openid
   * @param startTime
   * @param endTime
   */
  async queryScore(Openid, startTime, endTime) {
    const { ctx } = this;
    const res = await ctx.model.Score.findAll({
      attributes: ['score'],
      where: {
        openid: Openid,
        time: {
          [Op.between]: [startTime, endTime],
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

  /**
   * 查询全部成绩
   * @param {*} Openid
   */
  async list(Openid) {
    const { ctx } = this;
    const res = await ctx.model.Score.findAll({
      'order': [['time', 'DESC']],
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
}

module.exports = ScoreService;
