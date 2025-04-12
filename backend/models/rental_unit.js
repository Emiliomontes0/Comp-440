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
            tableName: "rentalunits"
        }
    );
    // Setting foreign key relationship
    RentalUnit.associate = (models) => {
        RentalUnit.belongsTo(models.User, {
            foreignKey: 'ownerID',
            as: 'owner'
        });
    };
    return RentalUnit;
};

