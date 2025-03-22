const express = require('express');
const v1 = require('./v1/index.js'); // Ensure this is correctly exported as a router

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON requests
router.use('/v1', v1); // Mount v1 routes under /api/v1

module.exports = router; // CommonJS export
