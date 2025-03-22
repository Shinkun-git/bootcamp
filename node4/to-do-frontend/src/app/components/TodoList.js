'use client';
import { useEffect, useReducer } from 'react';
import { fetchTodos, addTodo, deleteTodo } from '@/../services/api.js';

const initialState = { todos: [] };

function reducer(state, action) {
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.payload };
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'DELETE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
}

export default function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function loadTodos() {
            const data = await fetchTodos();
            console.log("data in todolist ",data);
            dispatch({ type: 'SET_TODOS', payload: data });
        }
        loadTodos();
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const newTodo = await addTodo(title, description);
        
        if (newTodo) {
            dispatch({ type: 'ADD_TODO', payload: newTodo });
        }
        e.target.reset();
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        dispatch({ type: 'DELETE_TODO', payload: id });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-semibold text-center mb-4">To-Do List</h1>
            
            {/* Add To-Do Form */}
            <form onSubmit={handleAdd} className="flex flex-col gap-3">
                <input 
                    name="title" 
                    placeholder="Title" 
                    required 
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input 
                    name="description" 
                    placeholder="Description" 
                    required 
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add
                </button>
            </form>

            {/* To-Do List */}
            <ul className="mt-6 space-y-2">
                {state.todos.length > 0 ? state.todos.map(todo => (
                    <li key={todo.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
                        <div>
                            <span className="font-medium">{todo.title}</span> - <span className="text-gray-600">{todo.description}</span>
                        </div>
                        <button 
                            onClick={() => handleDelete(todo.id)} 
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </li>
                )) : (
                    <li className="text-gray-500 text-center">No To-Dos yet! Add some.</li>
                )}
            </ul>
        </div>
    );
}
