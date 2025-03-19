import express from 'express';
const router = express.Router();

import studentController from './controllers/studentController.js';

router.use('/students', studentController);

export default router;