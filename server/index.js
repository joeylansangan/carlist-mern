import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import morgan from 'morgan';
// import multer from 'multer';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from "url";

import carRoutes from './routes/car.js';
import Car from './models/Car.js';
import { cars } from './data/index.js';

// configs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

// File Storage setup
// const storage = multer.diskStorage({
//     destination: function( req, file, cb) {
//         cb(null, "public/assets");
//     },
//     filename: function (req, file, cb){
//         cb(null, file.originalname);
//     },
// });
// const upload = multer({ storage });

// Routes
// app.use('/', function(req,res){
//     res.send('Hello World')
// });
app.use('/cars', carRoutes);

// MONGOOSE/Server Setup
const PORT = process.env.PORT || 4001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`App listeninig at PORT: ${PORT}`));
    
    // Car.insertMany(cars);
})
.catch((error) => console.log(`${error}: did not connect`));
