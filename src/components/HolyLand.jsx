import React from 'react';
import '../styles/program.scss';

import HolyLandGallery from './HolyLandGallery';

const HolyLand = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Ziemia Święta</h1>
                    <h2>Szlakiem biblijnym</h2>
                    <h4>Ach, miejsce ziemi, miejsce ziemi świętej – jakimże miejscem jesteś we mnie! Dlatego właśnie nie mogę po tobie stąpać, muszę klęknąć…
                       <span>Karol Wojtyła</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <HolyLandGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Zbiórka na lotnisku w hali odlotów, odprawa bagażowo – biletowa, wylot do Tel Awiwu. Po wyjściu z lotniska przejazd do Betlejem na zakwaterowanie, kolację oraz nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie, wykwaterowanie i wyjazd w kierunku Morza Śródziemnego do Cezarei Nadmorskiej, gdzie zobaczymy ruiny starożytnych akweduktów. Przejazd do Hajfy, położonej u stóp Góry Karmel - nawiedzenie Kościoła Stella Maris wraz z Grotą proroka Eliasza. Przejazd do Nazaretu, gdzie Archanioł Gabriel oznajmił Maryi radosną wieść, że została wybrana przez Boga na matkę Jego Syna. Nawiedzenie Bazyliki Zwiastowania z domem rodzinnym NMP i św. Józefa. Przejazd do Kany Galilejskiej,  w której nawiedzimy Sanktuarium Pierwszego Cudu Pana Jezusa. Możliwość odnowienia przyrzeczeń małżeńskich. Przejazd na obiadokolację i nocleg do hotelu w Nazarecie/Tyberiadzie.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Przejazd w kierunku Góry Tabor. Na jej szczycie, znajduje się Bazylika Przemienienia Pańskiego. Następnie udamy się nad Jezioro Galilejskie, w otoczeniu którego znajduje się Góra 8 Błogosławieństw, która urzeka pięknem przyrody i spokojem. Przejazd do Tabghi, gdzie nawiedzimy Kościół Rozmnożenia chleba i ryb,  upamiętniający cudowne rozmnożenie pożywienia przez Pana Jezusa i nakarmienie 5 tysięcy mężczyzn nie licząc kobiet i dzieci. Przejście do Kościoła Prymatu, miejsca gdzie Pan Jezus nadał prymat św. Piotrowi słowami „paś baranki moje, paś owce moje…”. Dziś znajduje się tu niewielki Kościół wybudowany w XX wieku z czarnego bazaltu, w którym zobaczyć można kamienny stół, przy którym Zmartwychwstały spożył śniadanie wraz z Apostołami. Przejazd do lokalnej restauracji na lunch – rybę św. Piotra (opcjonalnie 20$). Następnie przejazd do Kafarnaum - miasta wymienianego w Ewangeliach najczęściej po Jerozolimie. Dziś w Kafarnaum zobaczyć można pozostałości po domu św. Piotra, osiedlach mieszkalnych oraz pozostałości po tzw. Białej Synagodze, wybudowanej na fundamentach tej, w której nauczał Jezus. Rejs łodzią po Jeziorze Galilejskim, z perspektywy, którego zobaczyć można obszar działalności Pana Jezusa. Powrót do hotelu do hotelu w Betlejem, zakwaterowanie, kolacja i nocleg. </p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Przejazd na Pole Pasterzy, miejsca gdzie Anioł Pasterzom obwieszczał nowinę o Narodzeniu Jezusa. Przejazd do sklepu z dewocjonaliami, z możliwością zakupu pamiątek. Sklep prowadzony jest od lat przez palestyńskich Chrześcijan. Nawiedzenie Bazyliki Narodzenia Pańskiego – Grota Narodzenia.  Wizyta w Kościele Św. Katarzyny. Przejście do Groty Mlecznej – miejsce, gdzie najświętsza Maryja Panna karmiąc Jezusa uroniła kroplę mleka i grota stała się cała biała. Popołudniu dzień w Ain Karem. Wizyta w Kościele Nawiedzenia św. Elżbiety. Przejście do miejsca narodzin Jana Chrzciciela. Powrót do hotelu w Betlejem. Kolacja i nocleg.</p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p>Śniadanie. Przejazd na Górę Oliwną. Wizyta w Betfage – początek tradycyjnej procesji Niedzieli Palmowej. Kościół Pater Noster, gdzie znajdują się majolikowe tablice, upamiętniające modlitwę, której nauczył nas Pan Jezus – Ojcze Nasz.  Przejście na punkt widokowy na Górze Oliwnej. Zejście do kościoła Dominus Flevit miejsca, gdzie Pan zapłakał nad Jerozolimą. Wizyta w Ogrodzie Oliwnym wspomnimy modlitwę Chrystusa   w Getsemani – w Ogrójcu. Następnie udamy się na Górę Syjon, by nawiedzić kościół Zaśnięcia NMP. Nawiedzimy też Wieczernik, gdzie Pan Jezus wraz z Apostołami spożył Ostatnią Wieczerzę, podczas której ustanowił Sakrament Eucharystii i Kapłaństwa. Wejście do synagogi, w której znajduje się symboliczny Grób Króla Dawida. Powrót do hotelu w Betlejem. Kolacja i nocleg.</p>
                        </div>

                        <div className="sixth-day">
                            <h5>Dzień VI</h5>
                            <p>Śniadanie. Wyjazd w kierunku Pustyni Judzkiej do Betanii, nawiedzenie Sanktuarium Domu Przyjaciół Pana Jezusa Marii, Marty i Łazarza. Przejazd do Jerycha, nazywanego miastem palm daktylowych, pod Górę Kuszenia oraz wspomnienie Zacheusza – poborcy podatkowego przy tzw. Sykomorze Zacheusza. Przejazd nad rzekę Jordan do miejsca, gdzie Chrześcijanie z całego świata odnawiają przyrzeczenia chrzcielne. Przejazd nad Morze Martwe i czas wolny na relaksującą kąpiel. Powrót do hotelu w Betlejem na obiadokolację i nocleg.</p>
                        </div>

                        <div className="seventh-day">
                            <h5>Dzień VII</h5>
                            <p>Śniadanie. Wejście do Starego Miasta w Jerozolimie. Przejście do Kościoła św. Anny, miejsca domu rodziców Matki Boskiej – Joachima oraz Anny. Obok wspomnienie cudu Pana Jezusa uzdrowienia chorego przy Sadzawce Betesda, dalej przez Stare Miasto do miejsca ówczesnej warowni Marka Antoniusza, gdzie znajdują się dwie pierwsze stacje Drogi Krzyżowej. Rozpoczęcie nabożeństwa Drogi Krzyżowej, przejście Via Dolorosa do Bazyliki Męki Pańskiej. Wejście na Golgotę. Zakończenie Drogi Krzyżowej przy Grobie Pańskim. Zwiedzanie Bazyliki. Czas wolny na zakupy na targu jerozolimskim. Spacer przez dzielnicę żydowską i ormiańską pod Ścianę Płaczu. Powrót do hotelu w Betlejem. Kolacja i nocleg. </p>
                        </div>

                        <div className="eighth-day">
                            <h5>Dzień VIII</h5>
                            <p>Śniadanie, wykwaterowanie z hotelu. Transfer na lotnisko w Tel Awiwie. Wylot do Polski.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default HolyLand;