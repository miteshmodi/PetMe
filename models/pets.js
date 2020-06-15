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
        image: DataTypes.STRING,
        adopted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    });

    Pets.associate = function(models) {
        // We're saying that a pet listing should belong to an admin user
        // A pet can't be created without an admin user due to the foreign key constraint
        Pets.belongsTo(models.Admin, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Pets;
};