import React from 'react';
import '../styles/program.scss';
import LodzGallery from './LodzGallery';

const Lodz = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Łódź</h1>
                    <h2>HOLLYŁÓDŹ CZY FASHION ŁÓDŹ</h2>
                    <h4>Kiedy tylko bywam w Łodzi, nie mogę nie być na Piotrkowskiej. Tam się wszystko dzieje, tam się wszystkich spotyka.
                       <span>Michał Urbaniak</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <LodzGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd w godzinach wczesno-porannych. Przyjazd do Łodzi i zwiedzanie miasta z przewodnikiem: Manufaktura, słynna ulica Piotrkowska, Księży Młyn- miasto w mieście wzorowane na angielskich osadach przemysłowych. Znajdowały się tam budynki fabryczne m.in. ogromna przędzalnia, magazyny, famuły, szkoła, remiza straży ogniowej, dwa szpitale, gazownia, klub fabryczny, sklepy, rezydencje właścicieli, a także bocznica kolejowa. Zespół urbanistyczny Księży Młyn to największy zabytkowy kompleks fabryczny Łodzi, powstały w drugiej połowie XIX wieku. Tego dnia zobaczymy również Muzeum Miasta Łodzi w pałacu Izraela Poznańskiego – łódzki Luwr oraz inne kamienice i pałace łódzkich fabrykantów. Przejazd do hotelu. Obiadokolacja. Nocleg. </p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Tego dnia odwiedzimy Wytwórnię Filmów Oświatowych, gdzie wejdziemy w rolę filmowców, reżyserów, scenarzystów i aktorów, i zrealizujemy własny film.  Następnie udamy się na zwiedzanie Muzeum Włókiennictwa oraz udział w warsztatach muzealnych. Ostatnim punktem programu tego dnia będzie wizyta w Centrum naukowym EC1.  Centrum powstało w budynku pierwszej elektrowni miejskiej. W styczniu 2018 roku zostało otwarte interaktywne Centrum Nauki i Techniki - największa pod względem powierzchni tego typu placówka w kraju. Na prawie 8,5 tys. mkw. powierzchni wystawienniczej w EC1- Zachód stanęły trzy ścieżki edukacyjne. Pierwsza z nich dotyczy przetwarzania energii, druga rozwoju wiedzy i cywilizacji, a trzecia pozwala zgłębić tajemnice mikro- i makroświata.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie, wykwaterowanie.  Przejazd do Muzeum Fabryki  w łódzkiej Manufakturze. Warsztaty muzealne. Po warsztatach obiad. Czas wolny na zakupy. Wyjazd w kierunku miejsca zbiórki. </p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default Lodz;