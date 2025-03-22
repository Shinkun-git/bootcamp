const express = require('express');
const axios = require('axios');

const router = express.Router();

// Render the home page with todos
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/api/v1/todos/fetchAll'); // Adjust API URL if needed
        console.log("axios response ------------>",response.data);
        const todos = response.data.data || []; // Ensure todos is always an array
        res.render('index', { todos }); // Renders EJS view
    } catch (err) {
        console.error('Error fetching todos:', err);
        res.render('index', { todos: [] }); // Render page with empty todos on error
    }
});

module.exports = router;
