import React, { useState } from 'react';
import { Button } from '../common/Button';
import { FaEdit, FaTrash, FaCheck, FaTimes, FaSave } from 'react-icons/fa';

export const TodoItem = ({ todo, onUpdate, onDelete, onToggle }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedDescription, setEditedDescription] = useState(todo.description || '');

    const handleUpdate = () => {
        if (!editedTitle.trim()) return;
        onUpdate(todo.id, { ...todo, title: editedTitle, description: editedDescription });
        setIsEditing(false);
    };

    return (
        <div className={`card mb-3 shadow-sm ${todo.completed ? 'bg-light' : ''}`}>
            <div className="card-body">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            className="form-control mb-2"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            autoFocus
                        />
                        <textarea
                            className="form-control mb-2"
                            rows="2"
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                        />
                        <Button variant="success" size="sm" onClick={handleUpdate}>
                            <FaSave /> Save
                        </Button>
                        <Button variant="secondary" size="sm" onClick={() => setIsEditing(false)}>
                            <FaTimes /> Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                                <h5 className={todo.completed ? 'text-decoration-line-through text-muted' : ''}>
                                    {todo.title}
                                </h5>
                                {todo.description && (
                                    <p className={todo.completed ? 'text-muted' : ''}>{todo.description}</p>
                                )}
                                <small className="text-muted">
                                    {new Date(todo.createdAt).toLocaleDateString()}
                                </small>
                            </div>
                            <div className="d-flex gap-2 ms-3">
                                <Button
                                    variant={todo.completed ? 'warning' : 'success'}
                                    size="sm"
                                    onClick={() => onToggle(todo.id)}
                                    title={todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                                >
                                    <FaCheck />
                                </Button>
                                <Button variant="primary" size="sm" onClick={() => setIsEditing(true)}>
                                    <FaEdit />
                                </Button>
                                <Button variant="danger" size="sm" onClick={() => onDelete(todo.id)}>
                                    <FaTrash />
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};