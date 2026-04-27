import React from 'react';

export const Header = ({ title = 'Todo App', subtitle = 'Manage your tasks efficiently' }) => {
    return (
        <header className="text-center mb-5">
            <h1 className="display-3 fw-bold bg-gradient text-primary">
                📝 {title}
            </h1>
            <p className="lead text-muted">{subtitle}</p>
            <hr className="w-25 mx-auto" />
        </header>
    );
};