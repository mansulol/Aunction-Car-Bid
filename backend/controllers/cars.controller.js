const db = require("../models/")
const cars = db.cars_model
const imgCars_Cars = db.imgs_cars_model

// Create a new cars
exports.create = (req, res) => {
    const car = {
        Id_car: "C1234",
        Vehicle_type: req.body.Vehicle_type,
        Make: req.body.Make,
        Model: req.body.Model,
        Year: parseInt(req.body.Year),
        Color: req.body.Color,
        Engine: req.body.Engine,
        Transmition: req.body.Transmition,
        Fuel: req.body.Fuel,
        Drive: req.body.Drive,
        kilometres: parseInt(req.body.kilometres),
        PVP: parseFloat(req.body.PVP),
        Damage: req.body.Damage,
        Id_car_imgs: "IMG1234"
    }

    cars.create(car).then((data) => {
        res.send(data)
    })
}

// Get all cars
exports.findAll = (req, res) => {
    cars.findAll().then( (data) => {
        res.send(data)
    })
}

// Get only a car
exports.findOne = (req, res) => {
    const car = cars.findOne({
        where: {
            Id_car: req.body.Id_car
        }
    }).then((data) => {
        res.send(data)
    })
}

exports.findByMake = (req, res) => {

}

exports.findByType = (req, res) => {

}

// Update a cars
exports.update = (req, res) => {
    let id_car = req.body.Id_car
    let rowCars = req.body.row
    let value = req.body.value

    cars.update(
        rowCars == 'Vehicle_type' ? {Vehicle_type: value}: 
        rowCars == 'Make' ? {Make: value}:
        rowCars == 'Model' ? {Model: value}:
        rowCars == 'kilometres' ? {kilometres: value}:
        rowCars == 'PVP' ? {PVP: value}:
        rowCars == 'Damage' ? {Damage: value}: 
        rowCars == 'Color' ? {Color: value}:
        rowCars == 'Transmition' ? {Transmition: value}:
        rowCars == 'kilometres' ? {kilometres: value}:
        rowCars == 'Fuel' ? {Fuel: value}:
        rowCars == 'Drive' ? {Drive: value}:
        rowCars == 'PVP' ? {PVP: value}:
        rowCars == 'kilometres' ? {kilometres: value}:
        rowCars == 'PVP' ? {PVP: value}:""
    ,
    {
        where: {
            Id_car: id_car
        }
    })
    .then((data) => {
        res.send(data)
    })
}

// Delete a cars
exports.delete = (req, res) => {
    cars.destroy({
        where: {
            Id_car: req.body.Id_car
        }
    })
    .then((data) => {  
        res.json({ message: 'Car deleted from db' });
    })
}

exports.deleteWithImage = (req, res) => {
    imgCars_Cars.destroy({
        where: {
            Id_img_car: req.body.Id_img_car
        }
    })
    cars.destroy({
        where: {
            Id_car: req.body.Id_car
        }
    })
    .then((data) => {  
        res.json({ message: 'Car and its images deleted from db' });
    })
}
