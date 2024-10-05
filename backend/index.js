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

db.sequelize.sync({ force: true }).then( () => {
    console.log("Forced Drop and Re-Sync DB")
} )

// Fake data to play with the db
function insertDatas(){
    const fs = require('fs')

    const imagePath = '..//backend//imgsPrueba/img_2.webp'
    const imageBuffer = fs.readFileSync(imagePath)

    // INSERT IMG CARS TABLE
    db.imgs_cars_model.create({
        id_img_car: 'IMG1234',   // ID de la imagen
        images: imageBuffer     // Imagen almacenado como buffer
    })
    .then((img) => {
        console.log('Imagen insertada correctamente:', img);
    })
    
    // INSERT CARS TABLE
    db.cars_model.create({
        id_car: 'C1234',           // ID del coche
        vehicle_type: 'SUV',       // Tipo de vehículo
        make: 'Toyota',            // Marca
        model: 'RAV4',             // Modelo
        year: 2020,                // Año
        Color: 'Rojo',             // Color
        Engine: '2.5L',            // Motor
        Transmition: 'Automática', // Transmisión
        Fuel: 'Gasolina',          // Tipo de gasolina
        Drive: 'AWD',              // Tipo de conducción
        kilometres: 30000,         // Kilómetros
        PVP: 25000.50,             // Precio
        Damage: 'Ninguno',         // Daños
        id_car_imgs: 'IMG1234'     // ID de las imágenes relacionadas
    })
    .then(car => {
        console.log('Coche insertado correctamente:', car);
    })
    
    // INSERT BIDS TABLE
    db.bids_model.create({
        id_bid: 'S1234',               // ID de la subasta
        id_car: 'C1234',               // ID del coche (relacionado con la tabla cars)
        name: 'Subasta Octubre',       // Nombre de la subasta
        Location: 'Madrid',            // Localización
        Price: 20000,                  // Precio de salida
        Date_bid: '2024-10-15',        // Fecha de la subasta
        Saved: true  
    })
    .then(bid => {
        console.log('Subasta insertada correctamente:', bid);
    })
}

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


