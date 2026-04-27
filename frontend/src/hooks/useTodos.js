import { useState, useEffect, useCallback } from 'react';
import { todoApi } from '../api/todoApi';
import toast from 'react-hot-toast';

export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });

    // Load all todos
    const loadTodos = useCallback(async () => {
        try {
            setLoading(true);
            const response = await todoApi.getAllTodos();
            setTodos(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Load stats
    const loadStats = useCallback(async () => {
        try {
            const response = await todoApi.getStats();
            setStats(response.data);
        } catch (err) {
            console.error('Failed to load stats:', err);
        }
    }, []);

    // Add todo
    const addTodo = useCallback(async (todoData) => {
        try {
            const response = await todoApi.createTodo(todoData);
            setTodos(prev => [response.data, ...prev]);
            await loadStats();
            toast.success('Todo added successfully!');
            return response.data;
        } catch (err) {
            toast.error('Failed to add todo');
            throw err;
        }
    }, [loadStats]);

    // Update todo
    const updateTodo = useCallback(async (id, todoData) => {
        try {
            const response = await todoApi.updateTodo(id, todoData);
            setTodos(prev => prev.map(todo => todo.id === id ? response.data : todo));
            toast.success('Todo updated successfully!');
            return response.data;
        } catch (err) {
            toast.error('Failed to update todo');
            throw err;
        }
    }, []);

    // Delete todo
    const deleteTodo = useCallback(async (id) => {
        try {
            await todoApi.deleteTodo(id);
            setTodos(prev => prev.filter(todo => todo.id !== id));
            await loadStats();
            toast.success('Todo deleted successfully!');
        } catch (err) {
            toast.error('Failed to delete todo');
            throw err;
        }
    }, [loadStats]);

    // Toggle complete
    const toggleComplete = useCallback(async (id) => {
        try {
            const response = await todoApi.toggleComplete(id);
            setTodos(prev => prev.map(todo => todo.id === id ? response.data : todo));
            await loadStats();
        } catch (err) {
            toast.error('Failed to update status');
            throw err;
        }
    }, [loadStats]);

    // Initial load
    useEffect(() => {
        loadTodos();
        loadStats();
    }, [loadTodos, loadStats]);

    return {
        todos,
        loading,
        error,
        stats,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        refreshTodos: loadTodos,
    };
};