import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlusG, faInstagram,faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
        <div className ="text">
        <p>Free Shipping for all Order of $99</p>
        </div>
        <div className="icons">
            <a href = "#"> <FontAwesomeIcon icon={ faFacebook} /></a>
            <a href = "#"> <FontAwesomeIcon icon={faTwitter} /></a>
            <a href = "#"> <FontAwesomeIcon icon={faInstagram} /></a>
            <a href = "#"> <FontAwesomeIcon icon={faGooglePlusG} /></a>
         
         </div>
         </div>
    );
};

export default Header;