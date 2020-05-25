import React from 'react';
import '../styles/Camp.scss';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import gniezno from '../img/gniezno.jpg';
import lodz from '../img/lodz.jpg';
import baltic from '../img/baltic.jpg';

import Lodz from './Lodz';
import Sea from './Sea';
import Piastowie from './Piastowie';


const Tours = () => {
    return (
        <Router>
            <Route path="/lodz" component={Lodz} />
            <Route path="/sea" component={Sea} />
            <Route path="/piastowie" component={Piastowie} />

            <section className="camp" id="camp">

                <Fade left cascade><h1>Obozy młodzieżowe</h1></Fade>
                <Fade left cascade><div>
                    <div className="piastowie">
                        <div className="camp-photo">
                            <img src={gniezno} alt="" />
                        </div>
                        <h2>Na Szlaku Piastowskim</h2>
                        <h3>Na Szlaku Piastowskim</h3>
                        <p>Jedno tylko nie ulega żadnej wątpliwości. To mianowicie, że państwo polskie jest znacznie starsze, niż mniemają ci, co historię jego chcą rachować dopiero od chwili chrztu.<span>Paweł Jasienica - Polska Piastów</span></p>

                        <button>
                            <Link to="/piastowie">czytaj więcej</Link>
                        </button>
                    </div>

                    <div className="lodz">
                        <div className="camp-photo">
                            <img src={lodz} alt="" />
                        </div>
                        <h2>ŁÓDŹ</h2>
                        <h3>HOLLYŁÓDŹ CZY FASHION ŁÓDŹ</h3>
                        <p>Kiedy tylko bywam w Łodzi, nie mogę nie być na Piotrkowskiej. Tam się wszystko dzieje, tam się wszystkich spotyka<span>Michał Urbaniak</span></p>

                        <button>
                            <Link to="/lodz">czytaj więcej</Link>
                        </button>

                    </div>

                    <div className="sea">
                        <div className="camp-photo">
                            <img src={baltic} alt="" />
                        </div>
                        <h2>Bałtyk</h2>
                        <h3>MOŻE NASZE MORZE? CZ. I</h3>
                        <p>Bałtyk niesie nasze zboże od Kaszubskich w dal wybrzeży,
                            <br />
                        Na dnie jego zagrzebany złotożółty bursztyn leży.<span>Artur Oppman</span></p>
                        <button>
                            <Link to="/sea">czytaj więcej</Link>
                        </button>
                    </div>
                </div></Fade>
            </section>
        </Router>
    );
}

export default Tours;