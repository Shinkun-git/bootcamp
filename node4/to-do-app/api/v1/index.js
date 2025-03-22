const express = require('express');
const router = express.Router();

const todoController = require('./controllers/todoControllers.js');

router.use('/todos', todoController);

module.exports = router;
