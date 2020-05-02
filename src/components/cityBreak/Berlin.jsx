import React from 'react';
import '../../styles/program.scss';
import BerlinGallery from './BerlinGallery';

const Berlin = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Kosmopolityczny Berlin</h1>
                    <h4>Berlin to przede wszystkim zmienność. To miasto cierpi na wieczną niestałość, zmienia się nieustannie i to określa jego tożsamość. Nie ma miasta, które tyle razy wnosiło się na szczyty potęgi, by potem upaść na samo dno. Stolica żadnego kraju nie budziła takiej nienawiści, strachu i miłości.<span>Rory Maclean</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <BerlinGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Zbiórka i wyjazd w kierunku Berlina. Przyjazd w godzinach porannych. Zwiedzanie stolicy Niemiec spacer z przewodnikiem: zachodnia część Berlina – słynna dzielnica Ku’damm i kościół Pamięci Cesarza Wilhelma. Następnie zobaczymy Potsdamerplatz i Sony Center, dzielnicę rządową przy której mieszczą się: Reichstag, Urząd Kanclerski, biura posłów i urzędników parlamentarnych oraz dodatkowe sale konferencyjne. Zobaczymy Bramę Brandenburską, słynną aleję Unter den Linden, słynne przejście graniczne Checkpoint Charlie. Następnie udając się w kierunku Alexanderplatz zobaczymy Wyspę Muzeów, na której znajdują się:  Muzeum Pergamońskie, Muzeum Bodego, Nowe Muzeum, Stare Muzeum oraz Stara Galeria Narodowa. Czas wolny na zwiedzanie wybranego muzeum (wcześniej należy zgłosić  którego, w celu rezerwacji). Zobaczymy również katedrę Berliner Dom, Nikolaiviertel - dzielnica św. Mikołaja z kościołem pod tym wezwaniem, Marienkirche - kościół Mariacki ,słynna wieżę TV. Czas wolny. Zbiórka w godzinach wieczornych i przejazd w kierunku Polski. Przyjazd w godzinach nocnych lub porannych dnia kolejnego (w zależności od miejsca zbiórki).</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Berlin;