"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init(
    {
      nama: DataTypes.TEXT,
      tanggallahir: DataTypes.DATEONLY,
      usia: DataTypes.INTEGER,
      whatsapp: DataTypes.STRING,
      asalkota: DataTypes.STRING,
      pendidikan: DataTypes.STRING,
      foto500: DataTypes.STRING,
      foto1000: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
