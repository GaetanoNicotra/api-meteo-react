import React from 'react'


const Footer = ({ lat, long, name }) => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
                        <ul className="list-unstyled d-flex gap-4 mb-0 align-items-center">
                            <li className="d-flex align-items-center gap-2">Twitte</li>
                            <li className="d-flex align-items-center gap-2">Facebook</li>
                            <li className="d-flex align-items-center gap-2">Instagram</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <ul className="list-unstyled d-flex gap-4 mb-0">
                            <li>Contattaci</li>
                            <li>Info</li>
                            <li>Su di noi</li>
                        </ul>
                    </div>
                </div>
                <hr className="border-secondary my-4" />
                <div className="text-center text-secondary small">
                    <div>LiveMeteo © 2025 - 2025</div>
                    <div>Tutti i diritti sono riservati</div>
                    <p className='mt-3'>{name}: Latitudine: {lat.toFixed(1)}° | Longitudine: {long.toFixed(1)}°</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
