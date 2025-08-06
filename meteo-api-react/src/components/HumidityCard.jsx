import React from 'react';

const HumidityCard = ({ humid }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-6 mb-4">
            <div className="card">
                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center" >
                    <img src='imgs/icons8-igrometro-50.png' className=" icon" alt="" />
                    <h5 className="card-title">Umidità</h5>
                    <p className="card-text">{humid} %</p>
                </div>
            </div>
        </div>
    );
};

export default HumidityCard;
