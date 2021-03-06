/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const QuestionBank = app.model.define('questionbank', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    topic: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    optionA: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'optionA',
    },
    optionB: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'optionB',
    },
    optionC: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'optionC',
    },
    optionD: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'optionD',
    },
    answer: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  }, {
    tableName: 'questionbank',
    timestamps: false, // 去除createAt updateAt
    freezeTableName: true,
  });

  return QuestionBank;
};
