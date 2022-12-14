'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaksi, {
        foreignKey: "id_transaksi",
        as: "user"
      })
      this.belongsTo(models.outlet, {
        foreignKey: "id_outlet",
        as: "transaksi"
      })
    }
  };

  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    id_outlet: DataTypes.INTEGER,
    role: DataTypes.ENUM('admin', 'kasir', 'owner')
  }, {
    sequelize,
    modelName: 'user',
    tableName: "user"
  });
  return user;
};