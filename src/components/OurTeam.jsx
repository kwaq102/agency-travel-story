import React from 'react';
import '../styles/OurTeam.scss';

import anna from '../img/annaG.jpg';
import maja from '../img/maja.jpg';
import marta from '../img/marta.jpg';
import spirek from '../img/spirek.jpg';
import monika from '../img/monika.jpg';
import ola from '../img/ola.jpg';



const OurTeam = () => {
    return (
        <>
            <section className="our-team">

                <h1>Poznaj nasz zespół</h1>
                <h3>Kiedy załapiesz bakcyla podróżowania, nie ma na to żadnego lekarstwa. Już wiem, że będę szczęśliwie chory do końca życia. <span> Michael Palins</span></h3>

                <div>
                    <div className="anna">
                        <div>
                            <div><img src={anna} alt="" /></div>
                            <h4>Anna Gajewska</h4>
                        </div>
                        <p>Moje serce jest podzielone pomiędzy Francję, Hiszpanię i Portugalię i tam spędzam połowę swojego życia. To moje ukochane kierunki i zawsze jestem niezmiernie szczęśliwa, gdy mogę Państwa tam zabrać i opowiadać  o wspaniałościach, które napotykamy podczas naszej podróży. Uwielbiam również słoneczną Italię i bardzo prawdopodobne, że również tam się zobaczymy. Moja specjalizacja to wyjazdy pielgrzymkowe. W biurze natomiast jestem odpowiedzialna  za kontakty z Państwem. Układam programy, dokonuję rezerwacji i dokładam wszelkim starań, aby nasza wspólna podróż była pełna wrażeń. </p>
                    </div>

                    <div className="maja-marta">
                        <div className="centre">

                            <div>
                                <div><img src={maja} alt="" /></div>
                                <div><img src={marta} alt="" /></div>
                            </div>
                            <h4>Maja i Marta - Lisban Story</h4>
                        </div>
                        <p>To One opowiedzą nam o Portugalii i zadbają o nasz udany pobyt. Pod ich dowództwem wsiądziemy na pokład portugalskiej karaweli i opłyniemy świat śladami Ferdynanda Magellana, Bartolomea Diasa, Vasco da Gamy. Poznamy historię wielkich odkryć geograficznych, przeniesiemy się do czasów Manuela I Szczęśliwego za którego panowania Portugalia przeżywała swój złoty wiek. Wspólnie odwiedzimy Dzielnicę Betlejemską, magiczne zaułki Alfamy oraz udamy się na fantastyczny lunch. Maja i Marta znają najlepsze adresy w Lizbonie, gdzie zjemy wyśmienitego bacalhau, caldeirada lub po prostu grillowane sardynki, których zapach w porze obiadu roznosi się po całej Lizbonie. Będzie również czas na deser „brzuch zakonnicy”, „skrzydła anioła”, „bekon z nieba” lub słynne „ciasteczka betlejemskie”. Lizbona w towarzystwie dziewczyn to wspaniale spędzony czas i niezapomniane przeżycia. </p>
                    </div>

                    <div className="spirek right">
                        <div>
                            <div><img src={spirek} alt="" /></div>
                            <h4>spirek</h4>
                        </div>
                        <p>Mój anioł stróż we Francji. Czuwa nad każdym moim krokiem tam postawionym. Super kolega, ostoja spokoju, świetny doradca, a przede wszystkim wspaniały przewodnik po Francji. W niezwykle ciekawy sposób przeprowadzi nas przez dzieje tego kraju, opowie o pikantnych szczegółach z życia francuskich królów, romansach i aferach dworskich, wojnach. Poprowadzi nas przez sale największego muzeum na świecie - on o Luwrze wie wszystko. Artystyczna dusza, nie lubi „podłych Anglików”, miłośnik dobrej kuchni i propagator sztuki jedzenia. Kiedyś usłyszałam że jestem barbarzyńcą bo źle kroję ser.</p>
                    </div>

                    <div className="monika">
                        <div>
                            <div><img src={monika} alt="" /></div>
                            <h4>Monika Skrzypek</h4>
                        </div>
                        <p>Mój doradca personalny, zawodowy i analityk. Pilot wycieczek z prawdziwego zdarzenia z podejściem do ludzi, życzliwością i uśmiechem. Zazdroszczę jej cierpliwości, błyskotliwego dowcipu i ciepłego głosu, którego chce się słuchać bez końca (nieoceniona cecha pilota wycieczek). Monia zajmie się Wami w Hiszpanii, we Francji, na Sycylii, na nartach. Uwielbia dzieci i z wielką pasją prowadzi wycieczki szkolne. Podróżowanie w Jej towarzystwie to wielka przyjemność i poczucie bezpieczeństwa. Ponadto nadzoruje sprawy biurowe, pilnuje rezerwacji, tworzy dla Państwa programy.</p>
                    </div>

                    <div className="ola right">
                        <div>
                            <div><img src={ola} alt="" /></div>
                            <h4>Ola</h4>
                        </div>
                        <p>Znakomita pilotka, specjalistka od Grecji oraz opiekunka od spraw urzędowych, prawnych i administracyjnych. Ogromne wsparcie, dobra rada, anielska cierpliwość. O czarującym glosie już wspominałam, ale w przypadku Oli nie da się tego pominąć. Swoim ciepłym i życzliwym tonem opowie Wam o Grecji, w której jest zakochana.  Uwielbia dzieci w związku z tym zajmuje się organizacją wycieczek szkolnych i jest z tego powodu bardzo Happy.</p>
                    </div>

                </div>


            </section>
        </>
    );
}

export default OurTeam;