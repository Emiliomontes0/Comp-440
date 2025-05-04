module.exports = (sequelize, DataTypes) => {
    const RentalUnit = sequelize.define(
        "RentalUnit",
        {
            ownerID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            features: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
            }
        },
        {
            tableName: "rental_units",

            hooks:{
                beforeCreate: (unit) => {
                    if(unit.features && Array.isArray(unit.features)){
                        unit.features = unit.features.map(f => f.toLowerCase());
                    }
                },
                beforeUpdate: (unit) => {
                    if(unit.features && Array.isArray(unit.features)){
                        unit.features = unit.features.map(f => f.toLowerCase());
                    }
                }
            }

        }
    );
    // Setting foreign key relationship
    RentalUnit.associate = (models) => {
        RentalUnit.belongsTo(models.User, {
            foreignKey: 'ownerID',
            as: 'owner'
        });
        RentalUnit.hasMany(models.Review, {
            foreignKey: 'rentalUnitID'
        });
    };
    return RentalUnit;
};

