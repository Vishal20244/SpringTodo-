import axiosInstance from './axiosConfig';

const API_URL = '/todos';

export const todoApi = {
    // Get all todos
    getAllTodos: () => axiosInstance.get(API_URL),
    
    // Get todo by id
    getTodoById: (id) => axiosInstance.get(`${API_URL}/${id}`),
    
    // Create todo
    createTodo: (todoData) => axiosInstance.post(API_URL, todoData),
    
    // Update todo
    updateTodo: (id, todoData) => axiosInstance.put(`${API_URL}/${id}`, todoData),
    
    // Delete todo
    deleteTodo: (id) => axiosInstance.delete(`${API_URL}/${id}`),
    
    // Toggle complete status
    toggleComplete: (id) => axiosInstance.patch(`${API_URL}/${id}/toggle`),
    
    // Get statistics
    getStats: () => axiosInstance.get(`${API_URL}/stats`),
};