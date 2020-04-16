import React from 'react';
import '../styles/Offer.scss';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

import trip from '../img/trip.jpg';
import camp from '../img/camp.jpg';
import pilgrimage from '../img/pielgrzymka.jpg';

const Offer = () => {
    return (
        <>
            <section className="offer" id="offer">
                <Pulse><h1>Nasz oferta</h1></Pulse>

                <Fade bottom cascade> <div>
                    <div className="trip">
                        <img src={trip} alt="" />
                        <h5>Wycieczki</h5>
                        <p></p>
                        <button>Dowiedz się więcej</button>
                    </div>
                    <div className="camp">
                        <img src={camp} alt="" />
                        <h5>Obozy młodzieżowe</h5>
                        <p></p>
                        <button>Dowiedz się więcej</button>
                    </div>
                    <div className="pilgrimages">
                        <img src={pilgrimage} alt="" />
                        <h5>Pielgrzymki</h5>
                        <p></p>
                        <button>Dowiedz się więcej</button>
                    </div>
                </div></Fade>

            </section>
        </>
    );
}

export default Offer;