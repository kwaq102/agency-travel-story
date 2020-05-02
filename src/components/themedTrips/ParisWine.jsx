import React from 'react';
import '../../styles/program.scss';
import ParisWineGallery from './ParisWineGallery';

const ParisWine = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Salon wina w Paryżu</h1>
                    {/* <h4>Kto jest zmęczony Londynem, jest zmęczony życiem: w Londynie jest bowiem wszystko, co życie może zaoferować<span>Samuel Johnson</span></h4> */}
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <ParisWineGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd z miejsca zbiórki według rozkładu jazdy. Przejazd w kierunku Francji. Zakwaterowanie w hotelu w okolicy Paryża, nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie, przejazd do Paryża - zwiedzanie miasta z przewodnikiem, m.in.: Grób Napoleona, Pantheon, Luwr i Muzeum Impresjonistów d’Orsay. Obiadokolacja. Przejazd na degustację win. Salon Wina jest wydarzeniem, które odbywa się w Paryżu w określonym czasie i podczas którego producenci niemal wszystkich win wystawiają na salonie (na olbrzymiej powierzchni) swoje trunki z możliwością ich degustacji. Będziemy próbować win pochodzących z regionów Francji, zarówno te najbardziej popularne, jak i mniej znane. Podczas degustacji istnieje możliwość zakupów.  Późnym wieczorem powrót do hotelu. Nocleg. </p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie, przejazd na dalsze zwiedzanie Paryża. Tego dnia udamy się na niezwykle urokliwe Wzgórze Montmartre, na którym wznosi się śnieżnobiała Bazyliką Sacre Coeur, zobaczymy Plac Pigalle, Moulin Rouge (z zewnątrz), czas wolny na zakupy. Rejs statkiem po Sekwanie. Obiadokolacja. Ponowny przejazd na degustację win. Powrót do hotelu.  Nocleg.</p>
                        </div>
                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie, wykwaterowanie. Przejazd do Paryża. Paryż historyczny: Wyspa La Cite z Katedrą Notre Dame, Dzielnica Łacińska z Sorboną, Muzeum Perfum z możliwością zakupów, Plac Vendome, Opera Garniera, Plac Concorde z Polami Elizejskimi i Łukiem Triumfalnym, Wieża Eiffla. Wyjazd do Polski. </p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p>Przyjazd do kraju w godzinach popołudniowych/ nocnych, w zależności od miejsca zbiórki na trasie powrotnej.</p>
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

export default ParisWine;