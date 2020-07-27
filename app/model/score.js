/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;

  const Score = app.model.define('score', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    jurisdiction: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    openid: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  }, {
    tableName: 'score',
    timestamps: false, // 去除createAt updateAt
    freezeTableName: true,
  });

  return Score;
};
