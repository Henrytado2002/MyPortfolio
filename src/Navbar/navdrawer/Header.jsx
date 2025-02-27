import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../Main/index.css';
import './Header.css';
import { useDispatch } from 'react-redux';
import DarkToggle from '../DarkToggle';

function Header() {
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleOutsideClick = (e) => { //if user clicks outside the navdrawer, it closes
            const checkbox = document.getElementById("menu-btn");
            if (menuRef.current && !menuRef.current.contains(e.target) && checkbox) {
                console.log("Outside click detected");
                checkbox.checked = false;
            }
        };
    
        const handleScroll = () => {//if user scrolls on Y-axis, navdrawer closes
            const menuCheckbox = document.getElementById("menu-btn");
            if (window.scrollY > 0 && menuCheckbox.checked) {
                console.log("Scroll detected");
                menuCheckbox.checked = false;
            }
        };
    
        document.addEventListener('click', handleOutsideClick);
        window.addEventListener('scroll', handleScroll, { passive: true });
        
    
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header" ref={menuRef}>
            {/* Menu Toggle */}
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>

            {/* Menu */}
            <ul className="menu">
                <DarkToggle/>
                <li><button onClick={() => navigate('/')}>Home  </button></li>
                <li><button onClick={() => navigate('/about')}>About </button></li>
                <li><button onClick={() => navigate('/work')}>Work </button></li>
                <li className='about-list-item' ><button onClick={() => { navigate('/contacts') }} >Contacts</button></li>
            </ul>

            
        </header>
    );
}

export default Header;