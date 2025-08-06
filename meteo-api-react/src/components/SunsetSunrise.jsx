import React from 'react'

const SunsetSunrise = ({ sunset }) => {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 media-q-sunSet">
                <div className="card mb-4" >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center" >
                        <div className="row w-100">
                            <div className="col">
                                <p className="card-text my-d-block">{new Date(sunset.sunset * 1000).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}</p>
                                <img src="imgs/icons8-tramonto-50.png" className="icon tramonto" alt="tramonto" />
                                <h5 className="card-title">Tramonto</h5>
                            </div>
                            <div className="col">
                                <p className="card-text">{new Date(sunset.sunrise * 1000).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}</p>
                                <img src="imgs/icons8-alba-50.png" className="icon" alt="alba" />
                                <h5 className="card-title">Alba</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SunsetSunrise
