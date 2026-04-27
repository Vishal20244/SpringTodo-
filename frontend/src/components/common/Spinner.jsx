import React from 'react';

export const Spinner = ({ size = 'md', color = 'primary', message = 'Loading...' }) => {
    const sizes = {
        sm: 'spinner-border-sm',
        md: '',
        lg: 'spinner-border-lg',
    };

    return (
        <div className="text-center py-5">
            <div className={`spinner-border text-${color} ${sizes[size]}`} role="status">
                <span className="visually-hidden">{message}</span>
            </div>
            {message && <p className="mt-2 text-muted">{message}</p>}
        </div>
    );
};