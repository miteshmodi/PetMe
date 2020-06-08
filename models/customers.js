module.exports = function(sequelize, DataTypes) {
    var Customers = sequelize.define("Customers", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
    return Customers;
  };