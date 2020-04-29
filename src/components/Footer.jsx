import React from 'react';
import logo from '../img/logo2.png'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';


import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <Fade right cascade><div id="footer">
                <div className="footer-left">
                    <div><img src={logo} alt="" /></div>
                </div>

                <div className="footer-centre">
                    <nav className="footer-nav">
                        <ul className="footer-list-right">
                            <li>
                                <Link
                                    activeClass="active"
                                    to="header"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={800}
                                >Home</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="aboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={800}
                                >O nas</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="offer"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={700}
                                >Oferta</Link>
                            </li>

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
                                    duration={500}
                                >Pielgrzymki</Link></li>

                        </ul>

                        <ul className="footer-list-left">
                            <li>
                                <Link
                                    activeClass="active"
                                    to="camp"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={600}
                                >Obozy młodzieżowe</Link>
                            </li>
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
                                    to="whyUs"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={700}
                                >Zalety</Link></li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="ourTeam"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Nasz zespół</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Kontakt</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-right">
                    <div className="contact">
                        <div className="address">
                            <span><i class="fas fa-map-marker-alt"></i></span><p> ul. Pszeniczna 27 <br />82-300 Elbląg</p>
                        </div>
                        <div className="phone">
                            <span><i class="fas fa-phone-alt"></i></span><p>997</p>
                            <p></p>
                        </div>
                        <div className="email">
                            <span><i class="fas fa-at"></i></span> <p>kkkk@gmail.com.pl</p>
                        </div>
                    </div>
                    <div className="socials">
                        <a className="fb" href=""><i class="fab fa-facebook-square"></i></a>
                        <a className="tw" href=""><i class="fab fa-twitter-square"></i></a>
                        <a className="insta" href=""><i class="fab fa-instagram-square"></i></a>
                        <a className="linkedin" href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div></Fade>

            <div class="copyright">
                <p>Projekt i wykonanie strony Kamil Gajewski <span>webgajewski@gmail.com</span></p>
                <p>&copy; 2020 Wszystkie prawa zastrzeżone</p>
            </div>

        </footer >
    );
}

export default Footer;