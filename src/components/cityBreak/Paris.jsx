import React from 'react';
import '../../styles/program.scss';
import ParisGallery from './ParisGallery';

const Paris = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Dostojny Londyn</h1>
                    <h4>Paryż to ruchome święto.<span>Ernest Hemingway</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <ParisGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd z miejsca zbiórki według rozkładu jazdy. Przejazd w kierunku Francji. Zakwaterowanie w hotelu w okolicy Paryża, nocleg. </p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie, przejazd do Paryża - zwiedzanie miasta z przewodnikiem, m.in.: Kompleks Inwalidów i Grób Napoleona, największe muzeum świata Luwr i Muzeum Impresjonistów d’Orsay,  rejs statkiem po Sekwanie, podczas którego zobaczymy największe atrakcje Paryża. Obiadokolacja. Powrót do hotelu, nocleg. </p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Tego dnia udamy się do Wersalu- majestatycznego pałacu królewskiego, będącego symbolem francuskiej monarchii absolutnej. Następnie przejazd do Paryża na dalsze zwiedzenie: Wzgórze Montmartre z Bazyliką Sacre Coeur, Plac Pigalle, Moulin Rouge (z zewnątrz), czas wolny na zakupy. Następnie przejazd na Pola Elizejskie i wejście na Łuk Triumfalny.Obiadokolacja. Powrót do hotelu, nocleg.</p>
                        </div>
                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie, wykwaterowanie. Przejazd do Paryża. Tego dnia będziemy zwiedzać: Wyspę Cite z Katedrą Notre Dame, spacer po urokliwej Dzielnicy Łacińskiej z Sorboną i Pantheonem. Zobaczymy przepiękny renesansowy Ratusz, przejazd do Muzeum Perfum z możliwością zakupów, spacer na Plac Vendome,  zobaczymy również przepiękny gmach Opery Garniera i największy paryski plac- Plac Concorde. Na koniec wejście bądź wjazd na Wieżę Eiffla. Po całodziennym zwiedzaniu wyjazd do Polski.</p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p>Przyjazd do kraju w godzinach popołudniowych/ nocnych, w zależności od miejsca zbiórki na trasie powrotnej. </p>
                        </div>
                        <div>
                            <p className="info">*Program jest ramowy i kolejność zwiedzania może ulec zmianie. Możliwe są przejazdy komunikacją publiczną.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Paris;