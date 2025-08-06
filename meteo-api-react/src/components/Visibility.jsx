import React from 'react';

const HumidityCard = ({ visibility }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="card">
                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center" >
                    <img src="imgs/Icons8-visibilita-40.jpg" className="icon" alt="visibilità" />
                    <h5 className="card-title">Visibilità</h5>
                    <p className="card-text">{visibility / 1000} km </p>
                </div>
            </div>
        </div>
    );
};

export default HumidityCard;
