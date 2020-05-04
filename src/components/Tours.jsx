import React from 'react';
import '../styles/Tours.scss';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import spain from '../img/spain.jpg';
import barcelona from '../img/barcelona.jpg';
import azulejos from '../img/azulejos.jpg';
import france from '../img/france-eiffla.jpg';
import italy from '../img/rome.jpg';
import croatia from '../img/croatia-dubrovnik.jpg';

import Spain from './Spain';
import SpainBarca from './SpainBarca';
import Portugal from './Portugal';
import France from './France';
import Croatia from './Croatia';
import Italy from './Italy';



const Tours = () => {
    return (
        <Router>
            <Route path="/spain" component={Spain} />
            <Route path="/spain-barcelona" component={SpainBarca} />
            <Route path="/portugal" component={Portugal} />
            <Route path="/france" component={France} />
            <Route path="/croatia" component={Croatia} />
            <Route path="/italy" component={Italy} />


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
                    </div></Fade>

                    <Fade top><div className="portugal">
                        <div className="tour-photo">
                            <img src={azulejos} alt="" />
                        </div>
                        <h2>Portugalia</h2>
                        <h3>Azulejos sardynki i wielkie odkrycia</h3>
                        <p>…Nie znam kwiatów o podobnej różnorodności kolorów jak Lizbona w słońcu… <span>Fernando Pesoa</span> </p>
                        <button><Link to="/portugal" >czytaj więcej</Link></button>
                    </div></Fade>

                    <Fade><div className="france">
                        <div className="tour-photo">
                            <img src={france} alt="" />
                        </div>
                        <h2>Francja</h2>
                        <h3>Francuskie Impresje</h3>
                        <p>Każdy człowiek ma dwie ojczyzny: swoją własną oraz Francję. <span>Henri de Bornier </span></p>
                        <button>
                            <Link to="/france">czytaj więcej</Link>
                        </button>

                    </div></Fade>

                    <Fade><div className="italy">
                        <div className="tour-photo">
                            <img src={italy} alt="" />
                        </div>
                        <h2>Włochy</h2>
                        <h3>Słoneczna Italia</h3>
                        <p>Włochy to kraj pełen licznych pokus pociągających do zboczenia z drogi prostej i uczciwej.<span>Zygmunt III Waza</span></p>
                        <button>
                            <Link to="/italy">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                    <Fade><div className="croatia">
                        <div className="tour-photo">
                            <img src={croatia} alt="" />
                        </div>
                        <h2>Chorwacja</h2>
                        <h3>Chorwacja</h3>
                        <p>Zadar ma najpiękniejsze zachody słońca na świecie. Piękniejsze od tych oklaskiwanych każdego wieczora w Key West na Florydzie<span>Alfred Hitchcock</span></p>
                        <button>
                            <Link to="/croatia">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                </div>


            </section>
        </Router>
    );
}

export default Tours;