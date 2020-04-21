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

import { Route, Switch, Link } from 'react-router-dom';

const CityBreak = () => {
    return (
        <>
            <section className="city-break" id="city-break">
                <Fade right cascade><h1>City Break</h1></Fade>
                <div>
                    <Fade bottom><div className="london">
                        <div className="cities-photo">
                            <img src={london} alt="" />
                        </div>
                        <h2>Dostojny Londyn</h2>
                        <h3>Będzie cytat</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id culpa suscipit magni<span>...</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade top><div className="barcelona">
                        <div className="cities-photo">
                            <img src={barcelona} alt="" />
                        </div>
                        <h2>Bajeczna Barcelona</h2>
                        <h3>Będzie cytat</h3>
                        <p>barca barca barca barca barca barca barca barca barca barca barca barca barca barca barca barca barca<span>barca </span></p>

                        <button>
                            <a href="">Czytaj więcej</a>                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade bottom><div className="paris">
                        <div className="cities-photo">
                            <img src={paris} alt="" />
                        </div>
                        {/* <h2>Zakochany Paryż</h2> */}
                        <h2>Zakochany kundel :D</h2>
                        <h3>Będzie cytat</h3>
                        <p>Paryż to ruchome święto<span>Ernest Hemingway</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>
                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade><div className="prague">
                        <div className="cities-photo">
                            <img src={prague} alt="" />
                        </div>
                        {/* <h2>Zakochany Paryż</h2> */}
                        <h2>Lunatyczna Praga</h2>
                        <h3>Będzie cytat</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ut consequuntur. Eum, voluptate iure aliquam perspiciatis necessitatibus cumque nulla perferendis accusamus aperiam, maiores voluptatem molestias explicabo culpa sint in assumenda.<span>Kamil Gajewski</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>
                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade><div className="rome">
                        <div className="cities-photo">
                            <img src={rome} alt="" />
                        </div>
                        {/* <h2>Zakochany Paryż</h2> */}
                        <h2>Antyczny Rzym</h2>
                        <h3>Będzie cytat</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ut consequuntur. Eum, voluptate iure aliquam perspiciatis necessitatibus cumque nulla perferendis accusamus aperiam.<span>Kamil Gajewski</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>
                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade><div className="vienna">
                        <div className="cities-photo">
                            <img src={vienna} alt="" />
                        </div>
                        <h2>Muzyczny Wiedeń</h2>
                        <h3>Będzie cytat</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, <span>Kamil Gajewski</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>
                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade left><div className="madrid">
                        <div className="cities-photo">
                            <img src={madrid} alt="" />
                        </div>
                        <h2>Elegancki Madryt</h2>
                        <h3>jakiś tam cytat</h3>
                        <p> Z Madrytu do nieba, a w niebie dziurka, by móc go oglądać<span>powiedzenie powstałe w czasach króla Karola III </span></p>

                        <button>
                            <a href="">Czytaj więcej</a>
                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>

                    <Fade right><div className="berlin">
                        <div className="cities-photo">
                            <img src={berlin} alt="" />
                        </div>
                        <h2>Kosmopolityczny Berlin</h2>
                        <h3>jakiś tam cytat</h3>
                        <p>Berlin berlin.......................... <span>ktoś mądry</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>
                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div></Fade>
                </div>

            </section>
        </>
    );
}

export default CityBreak;