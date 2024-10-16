# Aunction Car Bid

A mobile-friendly website where you can view and bid on car auctions, with filtering system such as make and models and record of your bids

![Images](/frontend/src/assets/imgs/main/main.png)

### Pre-requisites 📋

- NodeJs
- MySQL Server
- MySQL Workbench
- Post Man

### Instalation 🔧

First you need to clone my repository

```bash
    git clone https://github.com/mansulol/Aunction-Car-Bid.git
```

Then enter in the main folder

```bash
    cd /Aunction-Car-Bid
```

And finally enter in frontend folder and all install the dependencies

```bash
    cd /frontend

    npm install
```

Finally do the same with the backend folder

```bash
    cd /backend

    npm install
```

**And ur done!**

## Some Dependencies ⚙️

![Static Badge](https://img.shields.io/badge/Angular-FF0000?style=for-the-badge&logo=angular&logoColor=react&labelColor=black)

![Static Badge](https://img.shields.io/badge/Express-D2D2D2?style=for-the-badge&logo=express&logoColor=white&labelColor=black)

![Static Badge](https://img.shields.io/badge/Sequelize-0000FF?style=for-the-badge&logo=sequelize&logoColor=blue&labelColor=black)

![Static Badge](https://img.shields.io/badge/MYSQL-C7A20F?style=for-the-badge&logo=mysql&logoColor=yellow&labelColor=black)

![Static Badge](https://img.shields.io/badge/IONIC-0F96C7?style=for-the-badge&logo=ionic&logoColor=dark&labelColor=black)

### Test endpoints 🔩

I use [postMan](https://www.postman.com/) to test my app with some endpoints

My endpoints: https://www.postman.com/mission-explorer-77431554/workspace/subasta/request/38432192-4ce2c2e2-f2d1-4083-ac3b-07f6fdab5b3a?action=share&creator=38432192&ctx=documentation

## Buid with 🛠️

Here are the updated descriptions in English:

- [Angular](https://angular.io/) - The web framework used for building user interfaces.
- [Ionic](https://ionicframework.com/) - A framework for developing hybrid mobile applications.
- [Sequelize](https://sequelize.org/) - An ORM (Object-Relational Mapping) for Node.js that simplifies interaction with SQL databases.

## Some datas to test with 👁️‍🗨️

<details>
<summary> Fake datas </summary>

#### Cars table
<code>
INSERT INTO cars 
(Id_car, Vehicle_type, Make, Model, Year, kilometres, PVP, Damage, Color, Engine, Transmission, Fuel, Drive, Id_car_img) 
VALUES 
    ('C1238', 'SUV', 'Kia', 'Sportage', 2022, 10000, 27000.00, 'Ninguno', 'Verde', '2.0L I4', 'Automática', 'Gasolina', 'AWD', 'IMG1238'),
    ('C1239', 'Sedán', 'Hyundai', 'Elantra', 2021, 50000, 15000.50, 'Rasguño leve', 'Plateado', '1.6L I4', 'Manual', 'Diésel', 'FWD', 'IMG1239'),
    ('C1240', 'Camioneta', 'Chevrolet', 'Silverado', 2019, 75000, 35000.75, 'Golpe en parachoques', 'Azul', '5.3L V8', 'Automática', 'Gasolina', 'RWD', 'IMG1240'),
    ('C1241', 'Hatchback', 'Mazda', '3', 2020, 40000, 21000.60, 'Ninguno', 'Rojo', '2.0L I4', 'Automática', 'Gasolina', 'FWD', 'IMG1241'),
    ('C1242', 'Coupé', 'Audi', 'TT', 2018, 55000, 38000.40, 'Sin daños', 'Negro', '2.5L I5', 'Manual', 'Gasolina', 'AWD', 'IMG1242'),
    ('C1243', 'SUV', 'Ford', 'Escape', 2021, 25000, 28000.00, 'Ninguno', 'Negro', '2.5L I4', 'Automática', 'Gasolina', 'AWD', 'IMG1243'),
    ('C1244', 'Sedán', 'Toyota', 'Camry', 2020, 30000, 22000.00, 'Sin daños', 'Blanco', '2.5L I4', 'Automática', 'Gasolina', 'FWD', 'IMG1244'),
    ('C1245', 'Camioneta', 'Nissan', 'Titan', 2018, 60000, 35000.00, 'Rasguño en la puerta', 'Rojo', '5.6L V8', 'Automática', 'Gasolina', 'RWD', 'IMG1245'),
    ('C1246', 'Hatchback', 'Volkswagen', 'Golf', 2019, 20000, 18000.00, 'Ninguno', 'Azul', '1.4L I4', 'Manual', 'Gasolina', 'FWD', 'IMG1246'),
    ('C1247', 'Coupé', 'BMW', 'M4', 2022, 5000, 70000.00, 'Sin daños', 'Gris', '3.0L I6', 'Automática', 'Gasolina', 'AWD', 'IMG1247');
</code>

#### Car Images table

<code>
INSERT INTO imgs_cars (Id_img_car, Image) 
VALUES
    ('IMG1238', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_1.jpg'),
    ('IMG1239', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_2.jpg'),
    ('IMG1240', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_3.jpg'),
    ('IMG1241', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_4.jpg'),
    ('IMG1242', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_5.jpg'),
    ('IMG1243', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_6.jpg'),
    ('IMG1244', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_7.jpg'),
    ('IMG1245', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_8.jpg'),
    ('IMG1246', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_9.jpg'),
    ('IMG1247', 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\img_car_aunction\\img_10.jpg');
</code>

#### Bids table

<code>
INSERT INTO bids (
    Id_bid, Id_car, Name, Location, Price, Date_bid, Saved
) 
VALUES 
    ('S1238', 'C1238', 'Kia Sportage 2.0L I4 2022 Verde', 'Granada', 24000, '2024-03-15', false),
    ('S1239', 'C1239', 'Hyundai Elantra 1.6L I4 2021 Plateado', 'Bilbao', 13000, '2024-12-05', false),
    ('S1240', 'C1240', 'Chevrolet Silverado 5.3L V8 2019 Azul', 'Valencia', 30000, '2024-08-12', false),
    ('S1241', 'C1241', 'Mazda 3 2.0L I4 2020 Rojo', 'Alicante', 20000, '2024-11-30', false),
    ('S1242', 'C1242', 'Audi TT 2.5L I5 2018 Negro', 'Barcelona', 35000, '2025-02-18', true),
    ('S1243', 'C1243', 'Ford Escape 2.5L I4 2021 Negro', 'Madrid', 25000, '2024-10-20', false),
    ('S1244', 'C1244', 'Toyota Camry 2.5L I4 2020 Blanco', 'Sevilla', 17000, '2024-12-15', false),
    ('S1245', 'C1245', 'Nissan Titan 5.6L V8 2018 Rojo', 'Murcia', 33000, '2024-09-05', false),
    ('S1246', 'C1246', 'Volkswagen Golf 1.4L I4 2019 Azul', 'Málaga', 19000, '2024-11-11', false),
    ('S1247', 'C1247', 'BMW M4 3.0L I6 2022 Gris', 'Barcelona', 65000, '2025-01-10', true);
</code>

</details>

## Author ✒️

- **Mansour**

## Licencia 📄

No license

## Thanks 🎁

- Thanks to my teacher [Tiburcio](https://github.com/tcrurav) for this experience
- Thanks to all my classmate
- Thanks to [Villanuevand](https://github.com/Villanuevand) for the template of this readme

---

⌨️ with ❤️ by Mansour
