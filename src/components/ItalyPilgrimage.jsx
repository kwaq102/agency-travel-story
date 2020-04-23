import React from 'react';
import '../styles/program.scss';

import ItalyPilgrimageGallery from './ItalyPilgrimageGallery';

const ItalyPilgrimage = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Włochy</h1>
                    <h2>Śladami Cudów Eucharystycznych</h2>
                    <h4>Ponad Eucharystię żaden inny sakrament nie jest bardziej zbawienny; on usuwa grzechy, pomnaża cnoty, duszę nasyca obfitością duchowych darów.
                       <span>św. Tomasz z Akwinu</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <ItalyPilgrimageGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd z miejsca zbiórki w godzinach nocnych dnia poprzedniego. Przejazd do Włoch na nocleg w okolicach Padwy.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Przejazd do Padwy. Nawiedzenie bazyliki św. Antoniego. Modlitwa przy relikwiach. Następnie przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Przejazd do Sieny – miasta, w którym miały miejsce dwa cuda eucharystyczne. Zwiedzanie miejsc związanych z św. Katarzyną,  spacer po mieście.  Przejazd do Bolseny - miejsca cudu eucharystycznego który zapoczątkował święto Bożego Ciała. Następnie udamy się do niezwykłego miasteczka Orvieto położonego na szycie wulkanicznego wzgórza. Zwiedzimy tu jedną z najpiękniejszych katedr gotyckich we Włoszech, znajdującą się na placu Piazza del Duomo. KATEDRA w Orvieto kryje cenne relikwie: hostię i kapłański korporał. Przejazd do hotelu. Obiadokolacja. Nocleg. </p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie, przejazd do Watykanu: Bazylika Św. Piotra – modlitwa przy grobie Św. Jana Pawła II, Plac Św. Piotra, zwiedzanie Rzymu barokowego ze słynnymi placami i fontannami: Placem Navona, Fontanną di Trevi, Schodami Hiszpańskimi, oraz spacer do części antycznej: Forum Romanum i Koloseum. Przejazd do hotelu, zakwaterowanie, obiadokolacja i nocleg.</p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p>Po śniadaniu przejazd do Rzymu. Zwiedzanie Rzymu Antycznego. Wyjazd do Alatri - miasta w którym wg. kościoła wydarzył się jeden z 4 najważniejszych cudów eucharystycznych, wizyta w katedrze św. Pawła, Msza św. Następnie przejazd na Monte Cassino - cmentarz żołnierzy polskich oraz wizyta w klasztorze św. Benedykta. Przejazd do hotelu w okolicach Neapolu. Obiadokolacja i nocleg.</p>
                        </div>

                        <div className="sixth-day">
                            <h5>Dzień VI</h5>
                            <p>Przejazd do Pompei. Nawiedzanie bazyliki Matki Boskiej Różańcowej. Następnie zwiedzanie Neapolu. Spacer po mieście z przewodnikiem, nawiedzenie katedry św. Januarego, gdzie znajduje się ampułka z krwią świętego. W katedrze przynajmniej raz w roku obchodzi się cud św. Januarego, który polega na obserwacji krwi zamkniętej w szklanej ampułce, która w dniu męczeńskiej śmierci św. Januarego przechodzi z postaci skrzepniętej w postać płynną. Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="seventh-day">
                            <h5>Dzień VII</h5>
                            <p>Wczesne śniadanie. Przejazd do Lanciano - Msza św., zwiedzanie Sanktuarium Cudu Eucharystycznego. Następnie przejazd do Casci. Nawiedzenie sanktuarium św. Rity. Spacer uroczymi uliczkami miasta. Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="eighth-day">
                            <h5>Dzień VIII</h5>
                            <p>Śniadanie. Przejazd do miasta św. Franciszka – do Asyżu. Zwiedzanie Bazyliki św. Franciszka, modlitwa przy grobie świętego. Czas wolny na spacer średniowiecznymi uliczkami miasta.  Nawiedzenie Bazyliki Matki Bożej Anielskiej, która zbudowana została w celu ochrony Porcjunkuli. Przejazd do Loreto. Nawiedzimy Sanktuarium św. Domku, będącego nazaretańskim domem Maryi. Pomodlimy się również na Cmentarzu Polskim za żołnierzy,, którzy polegli podczas II Wojny Światowej w regionie Marche. Msza Święta. Przejazd do hotelu. Obiadokolacja. Nocleg. </p>
                        </div>

                        <div className="ninth-day">
                            <h5>Dzień IX</h5>
                            <p>Po śniadaniu wyjazd w kierunku północnych Włoch. Nocleg tranzytowy.</p>
                        </div>

                        <div className="tenth-day">
                            <h5>Dzień X</h5>
                            <p>Śniadanie. Kontynuacja podróży w kierunku Polski. Przyjazd do Polski w godzinach nocnych lub porannych dnia kolejnego (w zależności od miejsca zbiórki).</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ItalyPilgrimage;