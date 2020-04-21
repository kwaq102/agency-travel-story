import React from 'react';
import '../styles/Tours.scss';
import Fade from 'react-reveal/Fade';

import spain from '../img/spain.jpg';
import barcelona from '../img/barcelona.jpg';
import azulejos from '../img/azulejos.jpg';
import france from '../img/france-eiffla.jpg';
import italy from '../img/rome.jpg';
import croatia from '../img/croatia-dubrovnik.jpg';

import Spain from './Spain'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Tours = () => {
    return (
        <Router>
            <Route path="/spain" component={Spain} />
            <section className="tours" id="tours">
                <Fade left cascade><h1>Wycieczki</h1></Fade>
                <div>
                    <Fade top><div className="spain">
                        <div className="tour-photo">
                            <img src={spain} alt="" />
                        </div>
                        <h2>Hiszpania</h2>
                        <h3>Siesta, fiesta i maniana</h3>
                        <p> I ta muzyka czarnosrebrna, srebrnozłota nagle wybucha i wypełnia noc po brzegi, I bez flamenco nie zrozumiesz Don Kichota, Garci De Lorci i Lope de Vegi. <span>Wojciech Młynarski</span></p>
                        <button>

                            <Link to="/spain">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                    <Fade bottom><div className="spain-barcelona">
                        <div className="tour-photo">
                            <img src={barcelona} alt="" />
                        </div>
                        <h2>Hiszpania</h2>
                        <h3>Costa Brava i Rumba de Barcelona</h3>
                        <p>Jedno serce, jedna ona, katalońska Barcelona. Jedno serce, jedno bicie, Barcelona ponad życie <span>przyśpiewka kibiców FC Barcelony</span>  </p>
                        <button><Link to="/spain-barcelona" >czytaj więcej</Link></button>
                        {/* <Route path="/spain-barcelona" component={Spain} /> */}
                    </div></Fade>

                    <Fade top><div className="portugal">
                        <div className="tour-photo">
                            <img src={azulejos} alt="" />
                        </div>
                        <h2>Portugalia</h2>
                        <h3>Azulejos sardynki i wielkie odkrycia</h3>
                        <p>…Nie znam kwiatów o podobnej różnorodności kolorów jak Lizbona w słońcu… <span>Fernando Pesoa</span> </p>
                        <button><Link to="/portugal" >czytaj więcej</Link></button>
                        {/* <Route path="/portugal" component={Portugal} /> */}
                    </div></Fade>

                    <Fade><div className="france">
                        <div className="tour-photo">
                            <img src={france} alt="" />
                        </div>
                        <h2>Francja</h2>
                        <h3>Francja</h3>
                        <p> Każdy człowiek ma dwie ojczyzny: swoją własną oraz Francję. <span>Henri de Bornier </span></p>

                        <button>
                            <Link to="/spain">czytaj więcej</Link>
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade><div className="italy">
                        <div className="tour-photo">
                            <img src={italy} alt="" />
                        </div>
                        <h2>Włochy</h2>
                        <h3>Włochy</h3>
                        <p>Włochy to kraj pełen licznych pokus pociągających do zboczenia z drogi prostej i uczciwej.<span>Zygmunt III Waza</span></p>

                        <button>
                            <Link to="/spain">czytaj więcej</Link>
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade><div className="croatia">
                        <div className="tour-photo">
                            <img src={croatia} alt="" />
                        </div>
                        <h2>Chorwacja</h2>
                        <h3>Chorwacja</h3>
                        <p>tu muszę znaleźć bo ciężko, nie ma nic <span>Anna Gajewska aka Tekla</span></p>

                        <button>
                            <Link to="/spain">czytaj więcej</Link>
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                </div>


            </section>
        </Router>
    );
}

export default Tours;