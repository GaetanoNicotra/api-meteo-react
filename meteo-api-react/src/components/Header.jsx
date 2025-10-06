import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ name, coord }) => {
    return (
        <>
            <Link to='/' className='text-decoration-none'>
                <nav className="navbar bg-body-my">
                    <div className="container-md">
                        <p className="title-header"><i className="fa-solid fa-location-dot"></i>Meteo {name}</p>
                        <span>{coord}</span>
                    </div>
                </nav>
            </Link>
        </>
    )
}

export default Header
