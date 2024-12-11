import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import {FaHome, FaTshirt, FaShoppingCart, FaUserAlt, FaAdjust, FaBars} from 'react-icons/fa';
import { SlNotebook } from "react-icons/sl";



const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header>
            {/* Title */}
            <h1><FaAdjust />Fashion Fusion</h1>

            {/* Hamburger menu */}
            <FaBars className='hamburger' onClick={toggleMenu}></FaBars>

            {/* Navigation links */}
            {/* if true, apply class, otherwise, no class applied */}
            <nav className={isMenuOpen ? 'hamburger-active' : ''}> {/* display normally if false */}
                <ul>
                    <li>
                        <Link to='/' onClick={closeMenu}><FaHome /> Home </Link>
                        {/* <a href='/'><FaHome />Home</a> */}
                    </li>
                    <li>
                        <Link to='/collections' onClick={closeMenu}><SlNotebook /> Collections </Link>
                        {/* <a href='/collections'><SlNotebook />Collections</a> */}
                    </li>
                    <li>
                        <Link to='/customize' onClick={closeMenu}><FaTshirt /> Customize Your Own T-Shirt </Link>
                        {/* <a href='/customize'><FaTshirt />Customize Your Own T-Shirt</a> */}
                    </li>
                    <li>
                        <Link to='/cart' onClick={closeMenu}><FaShoppingCart /> Cart </Link>
                        {/* <a href='/cart'><FaShoppingCart />Cart</a> */}
                    </li>
                    <li>
                        <Link to='/profile' onClick={closeMenu}><FaUserAlt /> Profile </Link>
                        {/* <a href='/profile'><FaUserAlt />Profile</a> */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation   