import React from 'react';
import { Link } from 'react-router-dom';

const NoFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 text-white">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-warning">Oops!</span> Pagina non trovata.</p>
                <p className="lead">
                    La pagina che stai cercando non esiste o è stata rimossa.
                </p>
                <Link to="/" className="btn btn-primary">
                    Torna alla Home
                </Link>
            </div>
        </div>
    );
};

export default NoFound;
