import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

export const TodoForm = ({ onSubmit, loading = false }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        
        onSubmit({ title, description, completed: false });
        setTitle('');
        setDescription('');
    };

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h4 className="card-title mb-3">➕ Add New Todo</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <Input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What needs to be done?"
                            required
                            autoFocus
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            rows="2"
                            placeholder="Description (optional)"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <Button type="submit" loading={loading} className="w-100">
                        Add Todo
                    </Button>
                </form>
            </div>
        </div>
    );
};