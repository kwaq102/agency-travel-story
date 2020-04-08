import React from 'react';
import logo from '../img/logo2.png'

import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div id="footer">
                <div className="footer-left">
                    <div><img src={logo} alt="" /></div>
                </div>

                <div className="footer-centre">
                    <nav className="footer-nav">
                        <ul className="footer-list-right">
                            <li><a href="">Home</a></li>
                            <li><a href="">O nas</a></li>
                            <li><a href="">Oferta</a></li>
                            <li><a href="">Zalety</a></li>
                            <li><a href="">Wycieczki</a></li>
                        </ul>

                        <ul className="footer-list-left">
                            <li><a href="">City Break</a></li>
                            <li><a href="">Obozy młodzieżowe</a></li>
                            <li><a href="">Pielgrzymki</a></li>
                            <li><a href="">Nasz zespół</a></li>
                            <li><a href="">Kontakt</a></li>
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
            </div>

            <div class="copyright">
                <p>Projekt i wykonanie strony Kamil Gajewski <span>webgajewski@gmail.com</span></p>
                <p>&copy; 2020 Wszystkie prawa zastrzeżone</p>
            </div>

        </footer >
    );
}

export default Footer;