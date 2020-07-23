'use strict';
const Service = require('egg').Service;
const Code = require('../util/code');
class QuestionBankService extends Service {
  /**
   * 创建题目
   * @param question
   */
  async create(question) {
    const { ctx } = this;
    try {
      const res = await ctx.model.QuestionBank.create(question);
      return Object.assign({}, Code.Add.SUCCESS, {
        data: res,
      });
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }


  /**
   * 列出指定的试题
   * @param id
   * @param topic
   * @param question_type
   */
  async show(id, topic, question_type) {
    const { ctx } = this;
    const query = {
      attributes: ['id', 'topic', 'question_type', 'question', 'optionA', 'optionB', 'optionC', 'optionD'],
      where: {},
    };
    try {
      if (id) {
        query.where.id = id;
      }
      if (topic) {
        query.where.topic = topic;
      }
      if (question_type) {
        query.where.question_type = question_type;
      }
      const res = await ctx.model.QuestionBank.findAll(query);
      if (res.length === 0) {
        return Object.assign({}, Code.Find.ERROE);
      }
      if (res.length !== 0) {
        return Object.assign({}, Code.Find.SUCCESS, {
          data: res,
          total: res.length,
        });
      }
    } catch (error) {
      // ctx.status = 1000;
      throw (error);
    }
  }


  /**
   * 查询题目答案
   * @param Id
  */
  async findAnswer(Id) {
    const { ctx } = this;
    const res = await ctx.model.QuestionBank.findOne({
      attributes: ['answer'],
      where: {
        id: Id,
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

module.exports = QuestionBankService;
