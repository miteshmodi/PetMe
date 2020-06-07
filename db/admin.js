module.exports = function(sequelize, DataTypes) {
    var Admin = sequelize.define("Admin", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      role: DataTypes.STRING,
    });
    return Admin;
  };