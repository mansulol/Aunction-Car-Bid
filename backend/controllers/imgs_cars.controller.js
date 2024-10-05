const db = require("../models")
const imgCars = db.imgs_cars_model
const Op = db.Sequelize.Op

// Create a new entry for the images of a car
exports.create = (req, res) => {
    const imgCar = {
        Id_img_car: req.body.Id_img_car,
        Id_img: req.body.Id_img,
        Images: req.body.Images
    }
    imgCars.create(imgCar).then((data) => {
        res.send(data)
    })
}

// Get all entry for the images of a car
exports.findAll = (req, res) => {
    imgCars.findAll().then( (data) => {
        res.send(data)
    })
}

exports.getImagesById = (req, res) => {

    imgCars.findAll({
        where: {
            Id_img_car: req.params.id
        }
    }).then((data) => {
        res.send(data)
    })
}

// Update a entry for the images of a car
exports.update = (req, res) => {

    imgCars.update({
        Images: req.body.value
    },
    {
        where: {
            Id_img_car: req.body.Id_imgs_car,
            Id_img: req.body.Id_img
        }
    })
    .then((data) => {
        res.send(data)
    })
}

// Delete a entry for the images of a car
exports.delete = (req, res) => {
    imgCars.destroy({
        where: {
            Id_img_car: req.body.Id_img_car,
            Id_img: req.body.Id_img
        }
    })
    .then((data) => {  
        res.json({ message: 'Images deleted from db' });
    })
}
