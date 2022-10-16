import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-heading'>
                <h1>Meals<span>&nbsp;App</span></h1>
            </div>
            <div className='navbar-links'>
                <ul>
                    <Link to='/homepage'><li>Meals</li></Link>
                    <Link to='/categories'><li>Categories</li></Link>
                    <Link to='/random'><li>Meals Instructions</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar