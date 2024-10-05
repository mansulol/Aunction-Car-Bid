const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const bids = sequelize.define("bids", {
        Id_bid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        Id_car: {
            type: DataTypes.STRING,
            unique: true
        },
        Name: {
            type: DataTypes.STRING
        },
        Location: {
            type: DataTypes.STRING
        },
        Price: {
            type: DataTypes.INTEGER
        },
        Date_bid: {
            type: DataTypes.DATE
        },
        Saved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
      timestamps: false
    })

    return bids
}


