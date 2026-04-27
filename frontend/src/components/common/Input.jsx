import React from 'react';

export const Input = ({
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    required = false,
    disabled = false,
    error,
    className = '',
    ...props
}) => {
    return (
        <div className="mb-3">
            {label && (
                <label className="form-label fw-semibold">
                    {label}
                    {required && <span className="text-danger ms-1">*</span>}
                </label>
            )}
            <input
                type={type}
                className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                {...props}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};