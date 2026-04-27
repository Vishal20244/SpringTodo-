import React from 'react';
import { TodoItem } from './TodoItem';
import { Spinner } from '../common/Spinner';

export const TodoList = ({ todos, loading, onUpdate, onDelete, onToggle }) => {
    if (loading) {
        return <Spinner message="Loading your tasks..." />;
    }

    if (todos.length === 0) {
        return (
            <div className="alert alert-info text-center">
                <h4 className="alert-heading">✨ No tasks yet!</h4>
                <p>Add your first task using the form above.</p>
            </div>
        );
    }

    return (
        <div>
            <h4 className="mb-3">📋 Your Tasks ({todos.length})</h4>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};