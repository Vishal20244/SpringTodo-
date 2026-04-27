import axios from 'axios';
import toast from 'react-hot-toast';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: parseInt(process.env.REACT_APP_API_TIMEOUT, 10),
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        console.log(`📤 [${config.method?.toUpperCase()}] ${config.url}`);
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        console.log(`📥 [${response.status}] ${response.config.url}`);
        return response;
    },
    (error) => {
        if (error.response) {
            const { status, data } = error.response;
            switch (status) {
                case 400:
                    toast.error(data.message || 'Bad Request');
                    break;
                case 404:
                    toast.error('Resource not found');
                    break;
                case 500:
                    toast.error('Internal Server Error');
                    break;
                default:
                    toast.error(data.message || 'An error occurred');
            }
        } else if (error.request) {
            toast.error('Network error. Check your connection.');
        } else {
            toast.error(error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;