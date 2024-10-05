module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1234",
    DB: "db_car_aunction",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
}