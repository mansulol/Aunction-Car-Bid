const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const imgs_cars = sequelize.define("imgs_cars", {
        Id_img_car: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        Image: {
            type: DataTypes.TEXT('long')
        }
    },
    {
      timestamps: false
    })

    return imgs_cars
}  