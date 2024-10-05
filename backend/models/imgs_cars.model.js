const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const imgs_cars = sequelize.define("imgs_cars", {
        Id_img_car: {
            type: DataTypes.STRING
        },
        Id_img: {
            type: DataTypes.INTEGER
        },
        Images: {
            type: DataTypes.BLOB('long')
        }
    },
    {
      timestamps: false
    })

    return imgs_cars
}  