import React from 'react';
import { Header } from './Header';

export const Layout = ({ children, title, subtitle, className = '' }) => {
    return (
        <div className="container mt-4 mb-5">
            <div className="row justify-content-center">
                <div className={`col-md-8 col-lg-7 ${className}`}>
                    <Header title={title} subtitle={subtitle} />
                    {children}
                </div>
            </div>
        </div>
    );
};