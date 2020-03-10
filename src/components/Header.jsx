import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.scss'
import logo from '../img/logo_white.png';

import travelHeaderImg from '../img/travel-header.jpg';

const Header = () => {
    return (
        <div>
            <header>
                <div className="bg-photo">
                    <img src={travelHeaderImg} alt="akcesoria podróżnika" />
                </div>
                <div className="header-logo">
                    <div className="header-contact">
                        <p>Zadzwoń +48 111 111 111</p>
                        <p>Napisz aaaa@102.pl</p>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <Navigation />
                <div className="header-text">
                    <h1>Biuro podróży Travel Story</h1>
                    <h3>Wejdź do niesamowitego świata podróży</h3>
                </div>
            </header>
        </div>
    );
}

export default Header;
