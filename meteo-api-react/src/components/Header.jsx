import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link to='/' className='text-decoration-none'>
                <nav className="navbar bg-body-my">
                    <div className="container-md">
                        <p className="title-header">🌦️ LiveMeteo</p>
                    </div>
                </nav>
            </Link >
        </>
    )
}

export default Header
