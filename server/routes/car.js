import express from 'express';
import {
    getCars,
    createCar
} from '../controllers/cars.js';

const router = express.Router();

router.get('/', getCars);

router.post('/:_id', createCar);

export default router;

