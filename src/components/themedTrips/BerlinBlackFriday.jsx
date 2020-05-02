import React from 'react';
import '../../styles/program.scss';
import BerlinBlackFridayGallery from './BerlinBlackFridayGallery';

const BerlinBlackFriday = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Black Friday w Berlinie</h1>
                    {/* <h4>Kto jest zmęczony Londynem, jest zmęczony życiem: w Londynie jest bowiem wszystko, co życie może zaoferować<span>Samuel Johnson</span></h4> */}
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <BerlinBlackFridayGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>WZbiórka i wyjazd w kierunku Berlina. Przyjazd w godzinach porannych. Zwiedzanie stolicy Niemiec spacer z przewodnikiem: zachodnia część Berlina – słynna dzielnica Ku’damm i kościół Pamięci Cesarza Wilhelma. Następnie zobaczymy Potsdamerplatz i Sony Center, dzielnicę rządową przy której mieszczą się: Reichstag, Urząd Kanclerski, biura posłów i urzędników parlamentarnych oraz dodatkowe sale konferencyjne. Zobaczymy Bramę Brandenburską, słynną aleję Unter den Linden. Następnie udając się w kierunku Alexanderplatz zobaczymy Wyspę Muzeów, na której znajduje się Muzeum Pergamońskie, katedrę Berliner Dom, Nikolaiviertel - dzielnica św. Mikołaja z kościołem pod tym wezwaniem, Marienkirche - kościół Mariacki ,wieża TV.
                            <br />
                            Czas wolny na Alexanderplatz, gdzie znajdują się centra handlowe,  liczne sklepy, lokale gastronomiczne. Po zakupach zbiórka i powrót do Polski.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default BerlinBlackFriday;