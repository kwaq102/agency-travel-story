import React from 'react';
import '../styles/WhyUs.scss';

import eiffla from '../img/eiffla.jpg';
import beach from '../img/church.jpg';

import place from '../img/place.png';
import adventure from '../img/adventure.png';
import unforgettable from '../img/unforgettable.png';


const WhyUs = () => {
    return (
        <>
            <section className="whyUs">

                <div>
                    <div className="whyUs-photos">
                        <img className="eiffla" src={eiffla} alt="wieża Eiffla" />
                        <img className="beach" src={beach} alt="Plaża" />
                    </div>

                    <div className="advantage">
                        <h1>Nasze zalety</h1>
                        <div>
                            <div className="arrow">
                                <div><i class="fas fa-chevron-up"></i></div>
                                <h4> najwyższa jakość usług</h4>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sunt, dolor ducimus facere, velit consequuntur aut nemo corporis repellat ipsa optio officia doloremque. Autem quasi magnam cupiditate ratione perspiciatis perferendis!</p>
                        </div>
                        <div>
                            <div className="arrow">
                                <div><i class="fas fa-chevron-up"></i></div>
                                <h4>rozumiemy potrzeby klientów/a</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto, voluptates inventore asperiores eveniet quasi quos sit voluptatum magni alias exercitationem eum atque modi est earum. Possimus deleniti quaerat omnis?</p>
                        </div>
                        <div>
                            <div className="arrow">
                                <div><i class="fas fa-chevron-up"></i></div>
                                <h4>doświadczona kadra</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ducimus magnam! Libero dicta enim similique inventore, veritatis ipsum veniam in consequatur, error odio quam. Ipsa fugiat expedita ab natus tempore!</p>
                        </div>
                    </div>

                </div>

                <div className="boxes">
                    <div>
                        <img className="whyUs-icon" src={place} alt=""></img>
                        <div>
                            <h4>niesamowite miejsca</h4>
                            <p>Lorem ipsum dolor sit amet consectetur </p>
                        </div>
                    </div>
                    <div>
                        <img className="whyUs-icon" src={adventure} alt=""></img>
                        <div>
                            <h4>wspaniałe przygody</h4>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div>
                        <img className="whyUs-icon" src={unforgettable} alt=""></img>
                        <div>
                            <h4>niezapomniane wrażenia</h4>
                            <p>Lorem ipsum dolor sit amet cons</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}

export default WhyUs;