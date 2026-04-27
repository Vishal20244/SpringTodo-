import React from 'react';

export const TodoStats = ({ stats }) => {
    const { total = 0, pending = 0, completed = 0 } = stats;

    return (
        <div className="row mb-4">
            <div className="col-md-4">
                <div className="card bg-primary text-white shadow">
                    <div className="card-body text-center">
                        <h2>{total}</h2>
                        <p className="mb-0">Total Tasks</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-warning text-white shadow">
                    <div className="card-body text-center">
                        <h2>{pending}</h2>
                        <p className="mb-0">Pending</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card bg-success text-white shadow">
                    <div className="card-body text-center">
                        <h2>{completed}</h2>
                        <p className="mb-0">Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};