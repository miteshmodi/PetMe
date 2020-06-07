module.exports = function (sequelize, DataTypes) {
    var Admin = sequelize.define("Admin", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Admin;
};