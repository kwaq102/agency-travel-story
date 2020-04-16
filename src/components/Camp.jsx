import React from 'react';
import '../styles/Camp.scss';
import Fade from 'react-reveal/Fade';


import gniezno from '../img/gniezno.jpg';
import lodz from '../img/lodz.jpg';
import baltic from '../img/baltic.jpg';

// import { Route, Switch, Link } from 'react-router-dom';


const Tours = () => {
    return (
        <>
            <section className="camp" id="camp">

                <Fade left cascade><h1>Obozy młodzieżowe</h1></Fade>

                <div>
                    <div className="piastowie">
                        <div className="camp-photo">
                            <img src={gniezno} alt="" />
                        </div>
                        <h2>Na Szlaku Piastowskim </h2>
                        <h3>Na Szlaku Piastowskim </h3>
                        <p>opis... opis... opis... opis... opis... opis... opis... opis... opis... opis... opis... <span>Ktoś z ktosiowni</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div>

                    <div className="lodz">
                        <div className="camp-photo">
                            <img src={lodz} alt="" />
                        </div>
                        <h2>ŁÓDŹ</h2>
                        <h3>HOLLYŁÓDŹ CZY FASHION ŁÓDŹ</h3>
                        <p>Kiedy tylko bywam w Łodzi, nie mogę nie być na Piotrkowskiej. Tam się wszystko dzieje, tam się wszystkich spotyka<span>Michał Urbaniak</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div>

                    <div className="sea">
                        <div className="camp-photo">
                            <img src={baltic} alt="" />
                        </div>
                        <h2>Bałtyk</h2>
                        <h3>MOŻE NASZE MORZE? CZ. I</h3>
                        <p>Opisy wymyśłę<span>Anna Gajewska</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div>

                </div>

            </section>
        </>
    );
}

export default Tours;