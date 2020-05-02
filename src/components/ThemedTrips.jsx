import React from 'react';
import '../styles/ThemedTrips.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import wine from '../img/wine420.jpg';
import blackFriday from '../img/blackFriday.jpg';
import fair from '../img/fair.jpg';


import ParisWine from './themedTrips/ParisWine';
import BerlinBlackFriday from './themedTrips/BerlinBlackFriday';
import Fair from './themedTrips/Fair';


const ThemedTrips = () => {

    return (
        <Router>
            <Route path="/parisWine" component={ParisWine} />
            <Route path="/berlinBlackFriday" component={BerlinBlackFriday} />
            <Route path="/fair" component={Fair} />

            <section className="themedTrips" id="themedTrips">
                <Fade left cascade><h1>Wycieczki tematyczne</h1></Fade>
                <div>
                    <div className="paris-wine">
                        <div className="themedTrips-photo">
                            <img src={wine} alt="" />
                        </div>
                        <h2>Salon wina w Paryżu</h2>
                        {/* <p>Kto jest zmęczony Londynem, jest zmęczony życiem: w Londynie jest bowiem wszystko, co życie może zaoferować<span>Samuel Johnson</span></p> */}
                        <button>
                            <Link to="/parisWine">czytaj więcej</Link>
                        </button>
                    </div>

                    <div className="berlin-black-friday">
                        <div className="themedTrips-photo">
                            <img src={blackFriday} alt="" />
                        </div>
                        <h2>Black Friday w Berlinie</h2>
                        <button>
                            <Link to="/berlinBlackFriday">czytaj więcej</Link>
                        </button>
                    </div>

                    <div className="fairs">
                        <div className="themedTrips-photo">
                            <img src={fair} alt="" />
                        </div>
                        <h2>Jarmarki Bożonarodzeniowe</h2>
                        <button>
                            <Link to="/fair">czytaj więcej</Link>
                        </button>
                    </div>


                </div>
            </section>
        </Router>
    )
}

export default ThemedTrips