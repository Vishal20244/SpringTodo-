import React from 'react';

export const Card = ({
    children,
    title,
    className = '',
    bodyClassName = '',
    headerClassName = '',
    footer,
    shadow = false,
    border = true,
}) => {
    const shadowClass = shadow ? 'shadow-sm' : '';
    const borderClass = border ? '' : 'border-0';

    return (
        <div className={`card ${borderClass} ${shadowClass} ${className}`}>
            {title && (
                <div className={`card-header bg-white ${headerClassName}`}>
                    <h5 className="card-title mb-0">{title}</h5>
                </div>
            )}
            <div className={`card-body ${bodyClassName}`}>{children}</div>
            {footer && <div className="card-footer bg-white">{footer}</div>}
        </div>
    );
};