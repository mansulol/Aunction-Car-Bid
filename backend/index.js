const express = require("express")
const cors = require('cors')

// Instance express
const app = express()

// Libraries to use
app.use(express.json())
app.use( express.urlencoded({extended: true}) )

var corsOptions = {
    origin: "http://localhost:8100"
}
app.use(cors(corsOptions))

// Load db
const db = require("./models")

// db.sequelize.sync().then( () => {
//     console.log("Re-Sync DB")
// })

db.sequelize.sync({ force: true }).then( () => {
    console.log("Forced Drop and Re-Sync DB")
} )

app.get("/", (req, res) =>{
    res.json({
        message: "URL Root inicialized"
    })
})

// Import routes of my app
console.log('Try to load the routes')

require("./routes/bids.route")(app)

require("./routes/cars.route")(app)

require("./routes/imgs_cars.route")(app)

// Port config
const PORT = process.env.PORT || 8080

// Try of my api
app.listen(PORT, () =>{
    console.log(`Backend server running on port ${PORT}`)
})

