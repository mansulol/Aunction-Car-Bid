module.exports = (app) => {
    const imgs_cars_controller = require("../controllers/imgs_cars.controller")

    var router = require("express").Router()

    //Create a new entry for images of a car
    router.post("/", imgs_cars_controller.create)
    
    // Get all entry for images of a car
    router.get("/", imgs_cars_controller.findAll)

    router.get("/getByCar/:id", imgs_cars_controller.getImagesById)

    //Updates a image
    router.put("/", imgs_cars_controller.update)

    //Deletes a image 
    router.delete("/", imgs_cars_controller.delete)

    app.use('/api/car_aunction/imgs_cars', router)

    console.log('Loaded img cars route')
}