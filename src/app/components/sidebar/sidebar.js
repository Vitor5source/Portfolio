'use client'
import React, { useState, useRef } from 'react';
import './sidebar.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    return (
        <nav id="sidebar" ref={navRef}>
            <ul>
                <li>
                    
                    <button id="toggle-btn" onClick={showNavbar}>
                        <i className="bi bi-list icon-300"></i> 
                    </button>
                </li>
                <li className="active">
                    <a href='../../'>
                    <i className="bi bi-house-door h5"></i>
                    <span>Home</span>
                    </a>
                </li>
                <li className='active'>
                    <a href='../../about'>
                    <i className="bi bi-person-circle"></i>
                    <span>About</span>
                    </a>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar
