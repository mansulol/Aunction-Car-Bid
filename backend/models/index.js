// Import db config
const db_config = require("../config/db_config")

const Sequelize = require("sequelize")

// Instance sequelize in a variable
const sequelize = new Sequelize(db_config.DB, db_config.USER, db_config.PASSWORD, {
    host: db_config.HOST,
    dialect: db_config.dialect,
    operatorAliases: false,

    pool: {
        max: db_config.pool.max,
        min: db_config.pool.min,
        acquire: db_config.pool.acquire,
        idle: db_config.pool.idle
    }
})

const db = {}

// Keep my instance of sequelize in a object
db.Sequelize = Sequelize
db.sequelize = sequelize

// Keep my model in the same object
db.imgs_cars_model = require("./imgs_cars.model")(sequelize)
db.cars_model = require("./cars.model")(sequelize)
db.bids_model = require("./bids.model")(sequelize)

// // Relation between my cars and my images
// db.cars_model.hasOne(db.imgs_cars_model, {
//     foreignKey: {
//         name: 'f_idCars_Imgs',
//         sourceKey: 'Id_img_car'
//     },
//     onDelete: 'CASCADE'
// });
// db.imgs_cars_model.belongsTo(db.cars_model, {
//     foreignKey: {
//         name: 'f_idImgs_cars',
//         targetKey: 'Id_img_car'
//     }
// })

// // Relation between my bids and my cars
// db.bids_model.hasOne(db.cars_model, { 
//     foreignKey: {
//         name: 'f_idBids_Cars'
//     },
//     sourceKey: 'Id_car',
//     onDelete: 'CASCADE'
// })
// db.cars_model.belongsTo(db.bids_model, {
//     foreignKey: {
//         name: 'f_idCars_bids'
//     },
//     targetKey: 'Id_car'
// })

module.exports = db