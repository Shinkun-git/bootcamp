import express from "express";
const router = express.Router();

import employeeController from './controllers/employeeController.js';
import loginController from './controllers/loginController.js';
import localRegisterController from './controllers/localRegisterController.js';
import localLoginController from './controllers/localLoginController.js';

router.use('/employees', employeeController);
router.use('/auth', loginController);
router.use('/signUp',localRegisterController);
router.use('/login',localLoginController);

export default router;