import React from 'react'

const Wind = ({ wind }) => {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                <div className="card ">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center" >
                        <img src="imgs/icons8-vento-50.png" className="icon" alt="vento" />
                        <h5 className="card-title">Vento</h5>
                        <p className="card-text">{(wind.speed * 3.6).toFixed(1)} km/h da {wind.deg}°</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wind
