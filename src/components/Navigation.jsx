import React, { Component } from 'react';
import Burger from './Burger';

import { Link } from 'react-scroll';
import '../styles/Navigation.scss'



class Navigation extends Component {
    state = {
        showBurger: false,
    }

    handleClickBurger = () => {
        this.setState({
            showBurger: !this.state.showBurger
        })
    }
    render() {
        return (
            <div>
                <Burger
                    showBurger={this.state.showBurger}
                    handleClickBurger={this.handleClickBurger}
                />
                <nav className={this.state.showBurger ? "header-navigation show" : "header-navigation"}>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="header"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="aboutUs"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={400}
                            >O nas</Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="offer"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Oferta</Link>
                        </li>
                        <li className="travel-list">
                            <a>Podróże</a>
                            <ul>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="tours"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={600}
                                    >Wycieczki</Link>
                                </li>

                                <li>
                                    <Link
                                        activeClass="active"
                                        to="pilgrimage"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={700}
                                    >Pielgrzymki</Link></li>

                                <li>
                                    <Link
                                        activeClass="active"
                                        to="themedTrips"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={700}
                                    >Wycieczki tematyczne</Link></li>


                                <li>
                                    <Link
                                        activeClass="active"
                                        to="city-break"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={600}
                                    >City break</Link>
                                </li>

                                <li>
                                    <Link
                                        activeClass="active"
                                        to="camp"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={700}
                                    >Obozy młodzieżowe</Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="whyUs"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Zalety</Link></li>

                        <li>
                            <Link
                                activeClass="active"
                                to="ourTeam"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={800}
                            >Nasz zespół</Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={800}
                            >Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;