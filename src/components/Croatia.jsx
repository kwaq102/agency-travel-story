import React from 'react';
import '../styles/program.scss';
import CroatiaGallery from './CroatiaGallery';

const Croatia = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Chorwacja</h1>
                    <h2>Chorwacja</h2>
                    <h4>Zadar ma najpiękniejsze zachody słońca na świecie. Piękniejsze od tych oklaskiwanych każdego wieczora w Key West na Florydzie
                       <span>Wojciech Młynarski</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <CroatiaGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd z miejsca zbiórki o ustalonej godzinie. Przejazd w kierunku Czech. Zakwaterowanie w hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Wiednia. Objazd miasta reprezentacyjną aleją miasta Ringstrasse, otaczającą historyczne centrum, przy której ulokowane są najpiękniejsze budowle w mieście m.in. Parlament, Ratusz, Opera Narodowa, Burgtheater itd.  Zobaczymy również rezydencję cesarską – Hofburg oraz Belveder. Następnie spacer po Starym Mieście, gdzie zobaczymy m.in. strzelistą wieża katedry św. Szczepana, Kolhmarkt – „targ węglowy”, będący siedzibą najbardziej ostentacyjnych, luksusowych domów mody. Czas wolny na krótki odpoczynek i kawę. Przejazd na nocleg w Słowieni. Zakwaterowanie w hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Wykwaterowanie. Spacer po mieście Maribor. Maribor i jego starówka przyciąga ciekawymi zabytkami, kulturą oraz gościnnością mieszkańców. Na uwagę zasługują zwłaszcza: piękne rynki miejskie z zabytkowymi, tradycyjnymi budynkami, dzielnica Lent, gdzie rośnie najstarsza winorośl na świecie. Maribor słynie z winiarskich tradycji, z doskonałych białych win. Każdej jesieni organizowany jest tu Old Vine Festival. Opcjonalnie wizyta w jednej z okolicznych winnic. Czas wolny. Przejazd do Chorwacji. Obiadokolacja. Nocleg</p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV-VIII</h5>
                            <p>Pobyt w hotelu w okolicach Zadaru. Wybranego dnia zwiedzanie miasta z przewodnikiem. Zadar jest jednym z najpiękniejszych miast Chorwacji i wg Alfreda Hitchcocka słynie z najpiękniejszych na świecie zachodów słońca. Zobaczymy m.in.: zabytkową Bramę Lądową z ciągiem kamiennych murów obronnych, Plac Pięciu Studni, kościół św. Donata najbardziej znany w Zadarze i jeden z najpiękniejszych zabytków Chorwacji, dawne rzymskie forum, kościół NMP z wysoką dzwonnicą, katedrę św. Anastazji, Brama Morska, spacer w kierunku morskich organów, na których fale Adriatyku wygrywają niezwykłe melodie.</p>
                        </div>

                        <div className="ninth-day">
                            <h5>Dzień IX</h5>
                            <p>Śniadanie, wykwaterowanie. Wyjazd w kierunku Czech. Zakwaterowanie w hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="tenth-day">
                            <h5>Dzień X</h5>
                            <p>Śniadanie. Przejazd do Pragi.  Spacer po mieście podczas którego zobaczymy: klasztor na Strahovie, Hradczany z Zamkiem Królewskim i katedrą św. Wita, św. Wacława i św. Wojciecha, słynną Loretą (kompleks barokowych budynków sakralnych); Mala Strana - romantyczna dzielnica położona na lewym brzegu Wełtawy, u stóp praskiego zamku. Następnie udamy się na Stare Miasto na prawym brzegu Wełtawy, zobaczymy najbardziej reprezentacyjny plac miasta- Rynek Staromiejski na którym zlokalizowane są: ratusz, słynny zegar Orloj, pomnik Jana Husa, Uniwersytet Karola z XIV wieku. Zobaczymy również Plac Wacława. W godzinach popołudniowych wyjazd w kierunku Polski.</p>
                        </div>
                        <div className="eleventh-day">
                            <h5>Dzień XI</h5>
                            <p>Przyjazd na miejsce zbiórki w godzinach porannych dnia kolejnego.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Croatia;