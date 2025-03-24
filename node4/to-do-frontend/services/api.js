const API_BASE_URL = 'http://localhost:5000/api/v1/todos'; // Adjust if needed

export const fetchTodos = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/fetchAll`);
        const data = await response.json();
        console.log("Fetch All Response:", data); // Debugging

        if (data?.success && Array.isArray(data.data)) {
            return data.data.map(todo => ({
                id: todo.id || crypto.randomUUID(), // Ensure ID exists
                title: todo.title,
                description: todo.description
            }));
        }
        return []; 
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
};

export const addTodo = async (title, description) => {
    try {
        const response = await fetch(`${API_BASE_URL}/addTodo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description }),
        });

        const data = await response.json();
        console.log("Add Todo Response:", data);

        return data.data; // Return only the todo object
    } catch (error) {
        console.error('Error adding todo:', error);
        return null;
    }
};

// Delete a todo
export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/delete/${id}`, { method: 'DELETE' });
        const data = await response.json();
        console.log("Delete Todo Response:", data);
        return data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        return { success: false, message: 'Failed to delete To-Do' };
    }
};
