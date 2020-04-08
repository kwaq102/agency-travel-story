import React from 'react';
import '../styles/Offer.scss';

import trip from '../img/trip.jpg';
import camp from '../img/camp.jpg';
import pilgrimage from '../img/pielgrzymka.jpg';



const Offer = () => {
    return (
        <>
            <section className="offer" id="offer">
                <h1>Nasz oferta</h1>
                <div>
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


                </div>

            </section>
        </>
    );
}

export default Offer;