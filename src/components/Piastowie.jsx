import React from 'react';
import '../styles/program.scss';
import PiastowieGallery from './PiastowieGallery';

const Piastowie = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Na Szlaku Piastowskim</h1>
                    <h2>Na Szlaku Piastowskim</h2>
                    <h4>opis..............................
                       <span> autor</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <PiastowieGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Zbiórka i wyjazd w godzinach wczesno-porannych. Przyjazd do Gniezna. Zwiedzanie gotyckiej archikatedry z XIV wieku, w której znajdują się relikwie ze szczątkami św. Wojciecha oraz słynne drzwi gnieźnieńskie , na których przedstawiono życie św. Wojciecha. Jest to najcenniejszy zabytek sztuki romańskiej w Polsce.  Zwiedzanie Muzeum Początków Państwa Polskiego. Następnie przejazd do Biskupina.  Zwiedzanie Muzeum Archeologicznego w Biskupinie. Jest to jeden z największych rezerwatów w Europie, obejmuje  około 38 ha z licznymi śladami dawnego osadnictwa, od epoki kamienia po wczesne średniowiecze. Po zwiedzaniu przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Przejazd do Poznania. Ostrów Tumski z Bazyliką Archikatedralną świętych Apostołów Piotra i Pawła, będącą jedną z najstarszych świątyń w Polsce. Katedra jest miejscem pochówku króla Przemysła II, według tradycji również Mieszka I i Bolesława Chrobrego (choć to jest kwestią sporną). Następnie udamy się na zwiedzanie poznańskiego Starego Rynku, którego sercem jest renesansowy ratusz. W południe na wieży ratusza pojawiają się słynne koziołki. Oprócz ratusza zobaczymy również domy patrycjuszy, pręgierz, Bamberkę – postać kobiety dźwigającej wiadra. Spacer do poznańskiej fary, która uchodzi za najpiękniejszy w kraju barokowy kościół. Zwiedzanie Muzeum Narodowego w Poznaniu- jest to jedna z najważniejszych tego typu placówek w kraju. Zwiedzanie połączone z lekcją muzealną (do ustalenia).  Czas wolny.  Przejazd do hotelu. Obiadokolacja. Nocleg. </p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie, wykwaterowanie. Przejazd do Mogilna, gdzie zobaczymy pięknie położone nad jeziorem XI-wieczne opactwo Benedyktynów. Następnie przejazd do Strzelna, gdzie znajduje się romańska rotunda św. Prokopa z XII wieku oraz romańska bazylika św. Trójcy z barokową fasadą oraz odkrytymi w 1946 roku kolumnami z piaskowca, liczącymi około 800 lat. Przejazd do Kruszwicy, gdzie nad jeziorem Gopło zobaczymy owiane legendą ruiny zamku.  Przejazd na obiad. Po obiedzie wyjazd w kierunku domu. Przyjazd w godzinach wieczornych/ późno-wieczornych. </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Piastowie;