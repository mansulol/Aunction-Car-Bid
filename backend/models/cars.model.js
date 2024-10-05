const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const cars = sequelize.define("cars", {
        Id_car:{
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true
        },
        Vehicle_type:{
            type: DataTypes.STRING
        },
        Make:{
            type: DataTypes.STRING
        },
        Model:{
            type: DataTypes.STRING
        },
        Year:{
            type: DataTypes.INTEGER
        },
        kilometres:{
            type: DataTypes.INTEGER
        },
        PVP:{
            type: DataTypes.FLOAT
        },
        Damage:{
            type: DataTypes.STRING
        },
        Color:{
            type: DataTypes.STRING
        },
        Engine:{
            type: DataTypes.STRING
        },
        Transmition:{
            type: DataTypes.STRING
        },
        Fuel:{
            type: DataTypes.STRING
        },
        Drive:{
            type: DataTypes.STRING
        },
        Id_car_imgs: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    })
    
    return cars
}