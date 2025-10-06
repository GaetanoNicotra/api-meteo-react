import React from 'react';

const HumidityCard = ({ visibility }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <div className="card">
                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center" >
                    <p className='fs-1'>👁️</p>
                    <h5 className="card-title">Visibilità</h5>
                    <p className="card-text">{visibility / 1000} km </p>
                </div>
            </div>
        </div>
    );
};

export default HumidityCard;
