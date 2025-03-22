const express = require('express');
const { addTodo, deleteTodo, getAllTodos } = require('../services/todoServices.js');

const router = express.Router();

// Fetch all To-Dos
router.get('/fetchAll', async (req, res) => {
    try {
        const response = await getAllTodos();
        if (response.success) {
            return res.status(200).json({ success: true, data: response.data });
        } else {
            throw new Error('Error fetching todos');
        }
    } catch (err) {
        console.error('Error fetching todos:', err);
        return res.status(500).json({ success: false, message: 'Error fetching To-Do list' });
    }
});

// Add a new To-Do
router.post('/addTodo', async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) throw new Error('Title and description are required');

        const response = await addTodo({ title, description });
        return res.status(201).json({ success: true, data: response.data });
    } catch (err) {
        console.error('Error adding todo:', err);
        return res.status(400).json({ success: false, message: err.message || 'Failed to add To-Do' });
    }
});

// Delete a To-Do
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deleteTodo(id);
        return res.status(200).json({ success: true, data: response.data });
    } catch (err) {
        console.error('Error deleting todo:', err);
        return res.status(400).json({ success: false, message: err.message || 'Failed to delete To-Do' });
    }
});

module.exports = router;
