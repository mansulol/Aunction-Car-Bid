module.exports = (app) => {
    const bids_controller = require("../controllers/bids.controller")
    
    var router = require("express").Router()
    
    //Create a new bid
    router.post("/", bids_controller.create)
    
    // Get all bids
    router.get("/", bids_controller.findAll)
    
    //Create a new bid
    router.put("/", bids_controller.update)
    
    //Create a new bid
    router.delete("/:IdBid", bids_controller.delete)
    
    app.use('/api/car_aunction/bids', router)

    console.log('Loaded bids route')
}