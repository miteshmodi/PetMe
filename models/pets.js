module.exports = function (sequelize, DataTypes) {
    var Pets = sequelize.define("Pets", {
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_name: DataTypes.STRING,
        image: DataTypes.BLOB('long')
    });
    return Pets;
};