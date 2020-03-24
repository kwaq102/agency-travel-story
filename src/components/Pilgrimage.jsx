import React from 'react';
import '../styles/Pilgrimage.scss';

import italy from '../img/pielgrzymka-glowna.jpg';
import holyLand from '../img/holy-land.jpg';
import mary from '../img/mary.jpg';

import { Route, Switch, Link } from 'react-router-dom';

const Pilgrimage = () => {
    return (
        <>
            <section className="section-pilgrimage">
                <h1>Pielgrzymki</h1>
                <div>
                    <div className="pilgrimage-italy">
                        <div className="pilgrimage-photo">
                            <img src={italy} alt="" />
                        </div>
                        <h2>Włochy</h2>
                        <h3>Śladami cudów eucharystycznych</h3>
                        <p>Ponad Eucharystię żaden inny sakrament nie jest bardziej zbawienny; on usuwa grzechy, pomnaża cnoty, duszę nasyca obfitością duchowych darów.<span>św. Tomasz z Akwinu</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>                            {/* <Link to="/spain">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div>

                    <div className="holy-land">
                        <div className="pilgrimage-photo">
                            <img src={holyLand} alt="" />
                        </div>
                        <h2>Ziemia Święta</h2>
                        <h3>Szlakiem biblijnym</h3>
                        <p>Ach, miejsce ziemi, miejsce ziemi świętej – jakimże miejscem jesteś we mnie! Dlatego właśnie nie mogę po tobie stąpać, muszę klęknąć…<span>Karol Wojtyła</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>
                            {/* <Link to="/">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div>

                    <div className="footsteps-mary">
                        <div className="pilgrimage-photo">
                            <img src={mary} alt="" />
                        </div>
                        <h2>Gietrzwałd Niepokalanów św. Gaj</h2>
                        <h3>Śladami sanktuariów Maryjnych</h3>
                        <p>Maryja sama szuka takich, którzy by do Niej pobożnie i z uszanowaniem przystępowali: tych bowiem miłuje, tych karmi i zasila, tych za dzieci przyjmuje.<span>Św. Bonawentura</span></p>

                        <button>
                            <a href="">Czytaj więcej</a>
                            {/* <Link to="/">czytaj więcej</Link> */}
                        </button>

                        {/* <Route path="/spain" component={Spain} /> */}
                    </div>

                </div>

            </section>
        </>
    );
}

export default Pilgrimage;