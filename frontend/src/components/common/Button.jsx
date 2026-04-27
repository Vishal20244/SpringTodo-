import React from 'react';

export const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    loading = false,
    disabled = false,
    onClick,
    type = 'button',
    className = '',
    ...props 
}) => {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        success: 'btn-success',
        danger: 'btn-danger',
        warning: 'btn-warning',
        info: 'btn-info',
    };

    const sizes = {
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg',
    };

    return (
        <button
            type={type}
            className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <span className="spinner-border spinner-border-sm me-2" />}
            {children}
        </button>
    );
};