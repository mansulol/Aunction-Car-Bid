const db = require("../models")
const bids = db.bids_model
const cars_controller_delete = require("../controllers/cars.controller")

// Create a new bid
exports.create = (req, res) => {

    const bid = {
        Id_bid: "S1234",
        Id_car: req.body.Id_car,
        Name: req.body.Name,
        Location: req.body.Location,
        Price: parseInt(req.body.Price),
        Date_bid: req.body.Date_bid,
        Saved: req.body.Saved = '1' ? true : false
    }

    bids.create(bid).then((data) => {
        res.send(data)
    })
}

// Get all bids
exports.findAll = (req, res) => {
    bids.findAll().then( (data) => {
        res.send(data)
    })
    console.log('Get all bids controller working')
}

// Get all bids by location
exports.findAllLocation = (req, res) => {

}

// Update a bid
exports.update = (req, res) => {
    let rowBids = req.body.row
    let value = req.body.value

    bids.update(
        rowBids == 'Name' ? {Name: value}: 
        rowBids == 'Location' ? {Location: value}:
        rowBids == 'Price' ? {Price: value}:
        rowBids == 'Date_bid' ? {Date_bid: value}:
        rowBids == 'Saved' ? {Saved: value === 1 ? true: false}:""
    ,
    {
        where: {
            Id_bid: req.body.Id_bid
        }
    })
    .then((data) => {
        res.send(data)
    })
}

// Delete a bid
exports.delete = (req, res) => {
    bids.destroy({
        where: {
            Id_bid: req.body.Id_bid
        }
    })
    
    cars_controller_delete.deleteWithImage(req, res)
}

