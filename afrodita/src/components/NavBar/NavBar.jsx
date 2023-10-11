import React from 'react';
import { useState } from 'react';
import { FaBars, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Category from '../Category/Category';
import Logo from '../../assets/logo.png';
import '../NavBar/NavBar.css';

function NavBar() {
    /**
     * Objeto con las categorías de la lenceria, con id y nombre
     */
    const categories = [
        {
            id: 1,
            name: 'Conjuntos'
        },
        {
            id: 2,
            name: 'Bodys'
        },
        {
            id: 3,
            name: 'Corset'
        },
        {
            id: 4,
            name: 'Bikinis'
        },
        {
            id: 5,
            name: 'Pijamas'
        }
    ]

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    }

    return (
        <>
            <div className='navBar'>
                <div className='navMenu'>
                    <FaBars className='navIcon' onClick={toggleDropdown} />
                </div>
                <div className='navLogo'>
                    <img src={Logo} alt='Descripción de la imagen' />
                </div>
                <div className='navRight'>
                    <div className='navSearch'>
                        <FaSearch className='navIcon' /> 
                    </div>
                    <div className='navCart'>
                        <FaShoppingCart className='navIcon' />
                    </div>
                </div>
            </div>
            {isDropdownOpen && <Category category={categories} />}
        </>
    )
}

export default NavBar;