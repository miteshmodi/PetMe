module.exports = function(sequelize, DataTypes) {
    var Pets = sequelize.define("Pets", {
      pet_type: DataTypes.STRING,
      age: DataTypes.STRING,
      breed: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      pet_name: DataTypes.STRING,
      image: DataTypes.BLOB('long')
    });
    return Pets;
  };