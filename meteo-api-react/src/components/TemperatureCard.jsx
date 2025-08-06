import React from 'react'

const TemperatureCard = ({ temp }) => {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                        <img src="imgs/icons8-termometro-50.png" className="icon" alt="temperatura" />
                        <h5 className="card-title">Temperatura</h5>
                        <p className="card-text">{temp.temp.toFixed(1)}° <b>percepita</b> {temp.feels_like.toFixed(1)}°</p>
                        <p className="card-text">
                            <img src="imgs/icons8-termometro-giù-50.png" className="icon-3" alt="temp-min" /> <b>min</b> {temp.temp_min.toFixed(1)}° | <b>max</b> {temp.temp_max.toFixed(1)}°  <img className="icon-3" src="imgs/icons8-thermometer-up-50.png" alt="temp-min" />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TemperatureCard
