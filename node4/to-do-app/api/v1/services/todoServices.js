const pool = require('../../db/index.js');

const getAllTodos = async () => {
    console.log('getAllTodos function called'); // Debug log
    try {
        const result = await pool.query('SELECT * FROM todos');
        console.log('Query response:', result.rows); // Debug log
        return {
            success: true,
            data: result.rows,
        };
    } catch (err) {
        console.error('Error fetching todos:', err.message);
        return {
            success: false,
            error: err.message,
        };
    }
};
const addTodo = async (body) => {
    try {
        const { title, description } = body;
        if (!title || !description) throw new Error("Missing payload");
        const result = await pool.query('INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
        console.log('query response ', result);
        return {
            success: true,
            data: result.rows[0],
        };
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};

const updateTodo = async (id, newTitle, newDescription) => {
    try {
        if (!id) throw new Error('Missing ID of todo');
        const result = await pool.query(`
            UPDATE todos 
            SET title = $2, description = $3 
            WHERE id = $1 RETURNING *`, [id, newTitle, newDescription]);
        console.log(`Todo updated with id : ${id}`);
        if (result.rowCount) {
            return {
                success: true,
                data: result.rows[0],
            };
        } else throw new Error('Error while updating todo');
    } catch (err) {
        console.log('error in update todo query catch ', err);
        return {
            success: false,
            message: err.message || 'Updating todo exception',
        };
    }
};

const deleteTodo = async (id) => {
    try {
        if (!id) throw new Error('Missing ID of todo');
        const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
        console.log(`Todo deleted with id : ${id}`);
        if (result.rowCount) {
            return {
                success: true,
                data: result.rows[0],
                message: 'Todo deleted successfully',
            };
        } else throw new Error('Error while deleting Todo');
    } catch (err) {
        console.log('error in delete Todo query catch ', err);
        return {
            success: false,
            message: err.message || 'Deleting Todo exception',
        };
    }
};

module.exports = {
    getAllTodos,
    addTodo,
    updateTodo,
    deleteTodo,
};
