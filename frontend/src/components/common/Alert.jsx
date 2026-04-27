import React, { useState } from 'react';

export const Alert = ({
    type = 'info',
    message,
    dismissible = true,
    onClose,
    className = '',
}) => {
    const [visible, setVisible] = useState(true);

    const types = {
        success: 'alert-success',
        error: 'alert-danger',
        warning: 'alert-warning',
        info: 'alert-info',
    };

    const handleClose = () => {
        setVisible(false);
        if (onClose) onClose();
    };

    if (!visible || !message) return null;

    return (
        <div className={`alert ${types[type]} ${dismissible ? 'alert-dismissible' : ''} ${className}`} role="alert">
            {message}
            {dismissible && (
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
            )}
        </div>
    );
};