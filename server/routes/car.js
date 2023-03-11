import express from 'express';
import {
    getCars,
    getCarById,
    createCar
} from '../controllers/cars.js';

const router = express.Router();

router.get('/', getCars);
router.get('/:id', getCarById);
router.post('/:_id', createCar);

export default router;

