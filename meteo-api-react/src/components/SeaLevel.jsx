import React from 'react'

const SeaLevel = ({ sea }) => {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="card mb-4">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center" >
                        <img src="imgs/icons8-barometro-48.png" className="icon-2" alt="pressione" />
                        <h5 className="card-title">Pressione</h5>
                        <p className="card-text">{sea} mb</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeaLevel
