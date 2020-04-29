import React from 'react';
import '../../styles/program.scss';
import LondonGallery from './LondonGallery';

const Vienna = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Dostojny Londyn</h1>
                    <h4>Kto jest zmęczony Londynem, jest zmęczony życiem: w Londynie jest bowiem wszystko, co życie może zaoferować<span>Samuel Johnson</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <LondonGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Zbiórka na lotnisku. Przelot do Londynu. Przejazd na zwiedzanie miasta. Spacer przy Parliament Square ze słynnym Big Benem, Whitehall, Trafalgar Square. Czas wolny na zwiedzanie National Gallery, spacer najsłynniejszą ulicą handlową Londynu – Oxford Street. Obiadokolacja. Przejazd do hotelu. Nocleg</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Przejazd do centrum miasta. Rejs po Tamizie, podczas którego zobaczymy wiele zabytków miasta, m.in. potężną fortecę Tower of London, najsłynniejszy most Wielkiej Brytanii Tower Bridge, Monument- pomnik upamiętniający wybuch wielkiego pożaru w 1666 roku. Zwiedzanie Westminster Abbey – miejsca koronacji i pogrzebów królów Anglii, Spacer do Buckingham Palace, będącego oficjalną rezydencją królowej. Przejazd do Muzeum Figur Woskowych Madame Tussauds. Wizyta na West Endzie, gdzie znajduje się niezliczona liczba pubów, restauracji, sklepów i teatrów. Obiadokolacja. Czas wolny. Dla chętnych wejście do jednego z londyńskich pubów, która stanowi doskonałą okazję do spróbowania tradycyjnego angielskiego piwa oraz przysmaków. Powrót do hotelu późnym wieczorem. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Po śniadaniu wizyta w Katedrze św. Pawła, będącej symbolem odrodzenia Londynu po wielkim pożarze, następnie przejazd na zwiedzanie British Museum-  jednego z największych muzeów starożytnych na świecie. Przejście do Covent Garden, czas wolny, obiadokolacja w restauracji. Powrót do hotelu. Nocleg. </p>
                        </div>
                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Wykwaterowanie. Transfer na lotnisko, wylot do Polski.</p>
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

export default Vienna;