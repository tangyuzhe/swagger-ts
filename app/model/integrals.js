/* indent size: 2 */
'use strict';
module.exports = app => {
  const DataTypes = app.Sequelize;
  const Integrals = app.model.define('integrals', {
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
    openid: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    integrals: {
      type: DataTypes.DOUBLE(11, 2),
      allowNull: true,
    },
  }, {
    tableName: 'integrals',
    timestamps: false, // 去除createAt updateAt
    freezeTableName: true,
  });
  return Integrals;
};
