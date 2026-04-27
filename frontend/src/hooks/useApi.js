import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

export const useApi = (apiFunction) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const execute = useCallback(async (...params) => {
        try {
            setLoading(true);
            setError(null);
            const response = await apiFunction(...params);
            setData(response.data);
            return response.data;
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [apiFunction]);

    return { execute, loading, error, data };
};