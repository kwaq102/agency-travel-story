import React from 'react';
import '../styles/CityBreak.scss';
import Fade from 'react-reveal/Fade';

import london from '../img/london.jpg';
import barcelona from '../img/cathedral-barcelona.jpg';
import paris from '../img/paris-molin-rouge.jpg';
import prague from '../img/prague.jpg';
import rome from '../img/rome-city.jpg';
import vienna from '../img/vienna.jpg';
import madrid from '../img/madrid.jpg';
import berlin from '../img/berlin.jpg';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Barcelona from './cityBreak/Barcelona';
import Prague from './cityBreak/Prague';
import Rome from './cityBreak/Rome';
import Vienna from './cityBreak/Vienna';
import London from './cityBreak/London';
import Madrid from './cityBreak/Madrid';
import Paris from './cityBreak/Paris';
import Berlin from './cityBreak/Berlin';


const CityBreak = () => {
    return (
        <Router>
            <Route path="/barcelona" component={Barcelona} />
            <Route path="/prague" component={Prague} />
            <Route path="/rome" component={Rome} />
            <Route path="/vienna" component={Vienna} />
            <Route path="/london" component={London} />
            <Route path="/madrid" component={Madrid} />
            <Route path="/paris" component={Paris} />
            <Route path="/berlin" component={Berlin} />

            <section className="city-break" id="city-break">
                <Fade right cascade><h1>City Break</h1></Fade>
                <div>
                    <Fade bottom><div className="london">
                        <div className="cities-photo">
                            <img src={london} alt="" />
                        </div>
                        <h2>Dostojny Londyn</h2>
                        <p>Kto jest zmęczony Londynem, jest zmęczony życiem: w Londynie jest bowiem wszystko, co życie może zaoferować<span>Samuel Johnson</span></p>
                        <button>
                            <Link to="/london">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                    <Fade top><div className="barcelona">
                        <div className="cities-photo">
                            <img src={barcelona} alt="" />
                        </div>
                        <h2>Bajeczna Barcelona</h2>
                        {/* <h3>Będzie cytat</h3> */}
                        <p>To miasto ma czarodziejską moc (…). Zanim się człowiek obejrzy, wejdzie mu pod skórę i skradnie duszę.<span>Carlos Ruiz Zafón</span></p>

                        <button>
                            <Link to="/barcelona">czytaj więcej</Link>
                        </button>

                    </div></Fade>

                    <Fade bottom><div className="paris">
                        <div className="cities-photo">
                            <img src={paris} alt="" />
                        </div>
                        <h2>Zakochany Paryż</h2>
                        <p>Paryż to ruchome święto.<span>Ernest Hemingway</span></p>
                        <button>
                            <Link to="/paris">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                    <Fade><div className="prague">
                        <div className="cities-photo">
                            <img src={prague} alt="" />
                        </div>
                        <h2>Lunatyczna Praga</h2>
                        <p>Praga nie puszcza nikogo z tych, których pochwyciła<span>Angelo Maria Ripellino</span></p>

                        <button>
                            <Link to="/prague">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                    <Fade><div className="rome">
                        <div className="cities-photo">
                            <img src={rome} alt="" />
                        </div>
                        <h2>Antyczny Rzym</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ut consequuntur. Eum, voluptate iure aliquam perspiciatis necessitatibus cumque nulla perferendis accusamus aperiam.<span>Kamil Gajewski</span></p>

                        <button>
                            <Link to="/rome">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                    <Fade><div className="vienna">
                        <div className="cities-photo">
                            <img src={vienna} alt="" />
                        </div>
                        <h2>Muzyczny Wiedeń</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, <span>Kamil Gajewski</span></p>

                        <button>
                            <Link to="/vienna">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                    <Fade left><div className="madrid">
                        <div className="cities-photo">
                            <img src={madrid} alt="" />
                        </div>
                        <h2>Elegancki Madryt</h2>
                        {/* <h3>jakiś tam cytat</h3> */}
                        <p>Z Madrytu do nieba, a w niebie dziurka, by móc go oglądać.<span>powiedzenie powstałe w czasach króla Karola III</span></p>
                        <button>
                            <Link to="/madrid">czytaj więcej</Link>
                        </button>
                    </div></Fade>

                    <Fade right><div className="berlin">
                        <div className="cities-photo">
                            <img src={berlin} alt="" />
                        </div>
                        <h2>Kosmopolityczny Berlin</h2>
                        <p>Berlin to przede wszystkim zmienność. To miasto cierpi na wieczną niestałość, zmienia się nieustannie i to określa jego tożsamość. Nie ma miasta, które tyle razy wnosiło się na szczyty potęgi, by potem upaść na samo dno. Stolica żadnego kraju nie budziła takiej nienawiści, strachu i miłości.<span>Rory Maclean</span></p>

                        <button>
                            <Link to="/berlin">czytaj więcej</Link>
                        </button>
                    </div></Fade>
                </div>

            </section>
        </Router>
    );
}

export default CityBreak;