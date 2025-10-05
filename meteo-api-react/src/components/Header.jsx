import React from 'react'

const Header = ({ name, coord }) => {
    return (
        <>
            <nav className="navbar bg-body-my">
                <div className="container-md">
                    <p className="title-header"><i className="fa-solid fa-location-dot"></i>Meteo {name}</p>
                    <span>{coord}</span>
                </div>
            </nav>
        </>
    )
}

export default Header
