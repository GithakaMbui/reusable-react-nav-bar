import React, {useState, useRef, useEffect} from 'react'

import {FaBars, FaFacebook, FaTwitter, FaBehance, FaGithub } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo2.svg'

const Navbar = () => {
    return <nav>
    <div className="nav-center">
        <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle">
                <FaBars />
            </button>
        </div>
        <div className="links-container show-container">
            <ul className="links">
            <li>
               <a href=""> home </a> 
            </li>
            <li>
               <a href=""> about </a> 
            </li>
            <li>
               <a href=""> services </a> 
            </li>
            <li>
               <a href=""> projects </a> 
            </li>
            <li>
               <a href=""> contact </a> 
            </li>

            </ul>
        </div>
        <ul className="social-icons">
            <li>
                <a href="https://twitter.com/Mbuidev"> <FaTwitter/> </a>
            </li>
            <li>
                <a href="https://twitter.com/Mbuidev"> <FaFacebook/> </a>
            </li>
            <li>
                <a href="https://twitter.com/Mbuidev"> <FaBehance/> </a>
            </li>
            <li>
                <a href="https://twitter.com/Mbuidev"> <FaGithub/> </a>
            </li>
        </ul>

    </div>
    </nav>
}

export default Navbar