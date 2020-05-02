import React, { Component } from 'react';
import Navigation from './Navigation';
import '../styles/Header.scss'
import logo from '../img/logo_white.png';

import travelHeaderImg from '../img/travel-header.jpg';
import travelHeaderImg2 from '../img/venice.jpg';
import travelHeaderImg3 from '../img/notre-dame.jpg';

const listSlider = [travelHeaderImg, travelHeaderImg2, travelHeaderImg3];

class Header extends Component {

    state = {
        index: 0,
        img: listSlider[0],
    }

    handleChangeSlider() {
        const listImgs = [...listSlider]
        let index = this.state.index;
        let img = listImgs[index];
        index++
        if (index === listImgs.length) {
            index = 0
        }

        this.setState({
            index,
            img,
        })
    }

    componentDidMount() {
        setInterval(this.handleChangeSlider.bind(this), 3000);
    }

    render() {
        return (
            <div>
                <header id="header">
                    <div className="bg-photo">
                        <img src={this.state.img} alt="akcesoria podróżnika" />
                    </div>
                    <div className="header-logo">
                        <div className="header-contact">
                            <p>Zadzwoń +48 997 997 997</p>
                            <p>Napisz aaaa@102.pl</p>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <Navigation />
                    <div className="header-text">
                        <h1 data-text="Biuro Turystyczno-Pielgrzymkowe"></h1>
                        <h2 data-text="Travel Story"></h2>
                        <h3 data-text="Wejdź do niesamowitego świata podróży"></h3>
                    </div>
                </header>
            </div >
        )
    }
}


export default Header;

