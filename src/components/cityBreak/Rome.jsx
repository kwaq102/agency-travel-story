import React from 'react';
import '../../styles/program.scss';
import RomeGallery from './RomeGallery';

const Rome = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Antyczny Rzym</h1>
                    <h4>I tak minął Nero, jak mija wicher, pożar, wojna lub mór, a bazylika Piotra panuje odtąd z wyżyn watykańskich miastu i światu. Wedle zaś dawnej bramy Kapeńskiej wznosi się dzisiaj maleńka kapliczka z zatartym nieco napisem Quo vadis, Domine?<span>Henryk Sienkiewicz</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <RomeGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Zbiórka na lotnisku, odprawa, wylot. Lądowanie na lotnisku w Rzymie. Transfer do hotelu, obiadokolacja, nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie, wyjazd na zwiedzanie Rzymu autokarem. W programie: Watykan - wnętrze bazyliki św. Piotra i plac św. Piotra. Wizyta w miejscu spoczynku Jana Pawła II. Czas wolny na obiad i zakupy. Następnie spacer po Rzymie barokowym, podczas którego zobaczymy m.in.: Piazza Navona, Panteon– antyczną świątynią wszystkich bogów, mieszczącą grób Rafaela, Fontannę di Trevi, Piazza del Popolo – symetrycznie zabudowany olbrzymi plac, z którego widać w perspektywie całą Via del Corso aż po pomnik Wiktora Emanuela II. Zobaczymy również Piazza Spaga ze słynnymi Schodami Hiszpańskimi. Powrót do hotelu, obiadokolacja, nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie, przyjazd na dalsze zwiedzanie Rzymu. Tego dnia będziemy zwiedzać Rzym antyczny - fora cesarskie z kolumną Trajana, Koloseum, Piazza Venezzia z monumentalnym Pomnikiem Wiktora Emanuela II, zwanym Vittoriano. Następnie zwiedzanie bazylik: San Giovanni in Laterano, Santa Maria Maggiore i San Pietro in Vincolo, gdzie podziwiać można słynny posąg Mojżesza dłuta Michała Anioła. Czas wolny. Powrót do hotelu, obiadokolacja, nocleg.</p>
                        </div>
                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie, wykwaterowanie, przejazd autokarem na lotnisko. Wylot do Polski.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Rome;