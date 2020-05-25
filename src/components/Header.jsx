import React, { Component } from 'react';
import Navigation from './Navigation';
import '../styles/Header.scss'
import logo from '../img/logo_white.png';
import Fade from 'react-reveal/Fade';

import travelHeaderImg from '../img/travel-header.jpg';
import travelHeaderImg2 from '../img/venice.jpg';
import travelHeaderImg3 from '../img/notre-dame.jpg';

const Header = () => {

    return (
        <div>
            <header id="header">
                <div className="bg-photo">
                    <img src={travelHeaderImg} alt="akcesoria podróżnika" />
                    <img src={travelHeaderImg2} alt="wenecja" />
                    <img src={travelHeaderImg3} alt="katedra notre dame" />
                </div>
                <div className="header-logo">
                    <div className="header-contact">
                        <p>Zadzwoń +48 661 182 851</p>
                        <p>Napisz travelstory.style@gmail.com</p>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <Navigation />
                <Fade left cascade>
                    <div className="header-text">
                        <h1>Biuro Turystyczno-Pielgrzymkowe</h1>
                        <h2>Travel Story</h2>
                        <h3>Wejdź do niesamowitego świata podróży</h3>
                    </div>
                </Fade>
            </header>
        </div >
    )
}


export default Header;

