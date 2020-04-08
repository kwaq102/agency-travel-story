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
            <section className="whyUs" id="whyUs">

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
                            <p>Świadczymy usługi na najwyższym poziomie. Współpracujemy z najlepszymi kontrahentami, hotelami, pilotami oraz przewodnikami. Wszystkie czynniki, mające wpływ na nasze usługi dobierane są z największą starannością i dbałością o każdy detal. Nad planem Państwa wyprawy, pracują doświadczeni profesjonaliści, którzy wkładają całe serce, aby Państwa podróż była udana. </p>
                        </div>
                        <div>
                            <div className="arrow">
                                <div><i class="fas fa-chevron-up"></i></div>
                                <h4>rozumiemy potrzeby klientów/a</h4>
                            </div>
                            <p>Zespół Travel Story tworzą ludzie zajmujący się turystyką od zawsze. Od wielu lat pracujemy z ludźmi, obsługujemy grupy i lata pracy pozwoliły nam dokładnie poznać i zrozumieć potrzeby naszych Klientów. Nasze programy układamy w taki sposób, aby z każdego dnia wycisnąć jak najwięcej, żeby pokazać Państwu wszystko co najważniejsze, ale żeby nie zabrakło również czasu na prywatne obserwacje, zjedzenie dobrego lunchu czy wypicie aromatycznej kawy w przytulnej kawiarence. Jesteśmy elastyczni i potrafimy słuchać. Jesteśmy otwarci na Państwa propozycje. Liczą się dla nas ludzie, a nie, zaliczone punkty. Sami jesteśmy podróżnikami i doskonale wiemy z czym to się je. </p>
                        </div>
                        <div>
                            <div className="arrow">
                                <div><i class="fas fa-chevron-up"></i></div>
                                <h4>doświadczona kadra</h4>
                            </div>
                            <p>Travel Story powstało z wielkiej pasji do podróży. Od zawsze podróżowaliśmy po najróżniejszych zakątach Europy i świata. Miejsca, w które Państwa zabieramy, odwiedziliśmy wielokrotnie i doskonale je znamy. Wiemy, co warto zobaczyć, gdzie zjeść, co kupić. Mamy wieloletnie doświadczenie w planowaniu i organizacji podróży, oraz w ich pilotowaniu. Zabieramy Państwa w miejsca, które kochamy, czasami traktujemy jak drugi dom, dzielimy się z Państwem naszą pasją. Mimo naszego doświadczenia, nigdy nie działamy schematycznie. I choćbyśmy jechali w dane miejsce setny raz, to każda podróż jest dla nas nowym wyzwaniem i wspaniałym przeżyciem. </p>
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