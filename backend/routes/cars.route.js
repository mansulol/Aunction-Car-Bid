module.exports = app => {
    const cars_controller = require("../controllers/cars.controller.js")

    var router = require("express").Router()

    //Create a new car
    router.post("/", cars_controller.create)
    
    // Get all cars
    router.get("/", cars_controller.findAll)
    // router.get("/", (req, res) => res.json( {message: "Rute get cars working"}))
    
    // Only get a car
    router.get("/getOne", cars_controller.findOne)

    //Update a car
    router.put("/", cars_controller.update)

    // Deletes a car
    router.delete("/", cars_controller.delete)

    // Deletes a car and its images
    router.delete("/image/:idCar/:idImg", cars_controller.deleteWithImage)

    app.use('/api/car_aunction/cars', router)

    console.log('Loaded cars route')
}