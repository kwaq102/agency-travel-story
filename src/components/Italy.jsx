import React from 'react';
import '../styles/program.scss';
import ItalyGallery from './ItalyGallery';

const Italy = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Włochy</h1>
                    <h2>Słoneczna Italia</h2>
                    <h4>Włochy to kraj pełen licznych pokus pociągających do zboczenia z drogi prostej i uczciwej.
                       <span>Zygmunt III Waza</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <ItalyGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd z miejsca zbiórki, przejazd w kierunku Włoch. Przyjazd w okolice Bergamo/Mediolanu nocleg. </p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Wykwaterowanie. Zwiedzanie Mediolanu z przewodnikiem: Plac Katedralny oraz słynną katedrę – Duomo, będącą jednym z największych i najpiękniejszych kościołów na świecie, galerie Vittorio Emanuele II, gmach najsłynniejszej na świecie opery la Scala. Zobaczymy również Zamek Sforzów, wielki miejski - Park Sempione oraz łuk triumfalny Arco della Pace. Czas wolny. Przejazd w kierunku Toskanii. Zakwaterowanie w hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Przejazd na zwiedzanie Florencji. Odwiedzimy katedrę Santa Maria del Fiore, zobaczymy Baptysterium z drzwiami wykonanymi z brązu. Spacer na Piazza della Signora przy którym znajduje się Palazzo Vecchio. Zobaczymy gmach Galerii Uffizi oraz przejdziemy na słynny Ponte Vecchio. Czas wolny. Przejazd do LUKKI, gdzie spacerując nastrojowymi uliczkami zobaczymy katedrę di San Martino oraz kościół San Michele in Foro. Powrót do hotelu. Obiadokolacja. Nocleg. </p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Przejazd do Pizy. Przejście na  Plac Cudów, na którym zobaczymy jedne z najsłynniejszych zabytków Włoch: Krzywą Wieżę, katedrę Santa Maria Assunta i Baptysterium. Następnie przejazd do Sieny. Spacer na Piazza del Campo będący wizytówką Sieny. Znajdują się przy nim takie zabytki jak: Palazzo Pubblico wraz z dzwonnicą Torre del Mangia. Po przeciwległej stronie znajduje się fontanna Fonte Gaia. Nawiedzimy katedrę Santa Maria Assunta oraz bazylikę San Domenico, w której znajdują się relikwie św. Katarzyny będącej patronką Sieny. Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Rzymu. Zwiedzanie Bazyliki św. Piotra w Watykanie. Następnie spacer po Rzymie barokowym, gdzie zobaczymy przepiękne zabytki, place, fontanny: Piazza Navona, Panteon, Fontanna di Trevi, Plac Hiszpański wraz ze Schodami Hiszpańskimi. Czas wolny na kawę, lody i kawałek pizzy. Następnie przejazd na zwiedzanie bazyliki Santa Maria Maggiore. Powrót do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="sixth-day">
                            <h5>Dzień VI</h5>
                            <p>Śniadanie, wykwaterowanie. Przejazd na dalsze zwiedzanie Rzymu: Lateran, gdzie zobaczymy bazylikę św. Jana oraz Święte Schody. Spacer w kierunku Rzymu antycznego. Zobaczymy Koloseum, Łuk Tytusa, przejdziemy słynną via dei Fori Imperiali skąd podziwiać będziemy fora cesarskie, wejdziemy na Kapitol, dojdziemy do Placu Weneckiego, gdzie znajduje się olbrzymi Pomnik Ojczyzny. Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="seventh-day">
                            <h5>Dzień VII</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Neapolu. Zwiedzanie miasta z przewodnikiem. Zobaczymy katedrę św. Januarego, spacer nastrojowymi uliczkami Neapolu, gdzie obejrzymy słynne szopki neapolitańskie. Zobaczymy również Castel dell’Ovo, zwany też Zamkiem Jajecznym, zbudowany w VI w. na niewielkiej wysepce, Castel Nuovo, Palazzo Reale di Napoli- dawną rezydencję władców hiszpańskich, Plac Plebiscytu, na którym w 1860 roku odbyło się głosowanie dotyczące połączenia poszczególnych królestw we Włoszech, co zakończyło się utworzeniem Zjednoczonego Królestwa Włoch. Przeprawa promowa na Capri- jedną z najbardziej elitarnych wysp Italii, będącą klejnotem Zatoki Neapolitańskiej. Capri szczyci się bajecznym krajobrazem tj. śródziemnomorska szata roślinna, strome klify, białe kamienice, urokliwe uliczki, tętniące życiem porty i turkusowe wody zatoki, ponadto niezrównana kuchnia (to właśnie z Capri pochodzi rozsławiona na całym świecie sałatka caprese). Po dniu pełnym wrażeń przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="eighth-day">
                            <h5>Dzień VIII</h5>
                            <p>Śniadanie, wykwaterowanie, przejazd do Asyżu. Spacer po malowniczym średniowiecznym miasteczku, bazylika św. Franciszka, Plac Ratuszowy- dawne forum, na którym znajdowała się świątynia Minerwy, po której do dziś zachowała się fasada. Czas wolny. Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="ninth-day">
                            <h5>Dzień IX</h5>
                            <p>Po śniadaniu przejazd do San Marino - najstarszej republiki świata.  Jest to jedno z najmniejszych państw świata, położone wysoko na wzgórzu Monte Titano i słynie z przepięknej starówki i ogromnego zamku. Czas na zakupy, podczas których będzie można skorzystać z dobrych okazji, bowiem San Marino słynie z okazjonalnych cen. Następnie przejazd do Ravenny. Najważniejszym zabytkiem miasta jest Bazylika San Vitale z bezcennymi mozaikami pochodzącymi z V i VI wieku. Spacer po mieście. Następnie przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="tenth-day">
                            <h5>Dzień X</h5>
                            <p>Śniadanie, wykwaterowanie. Przejazd na zwiedzanie Werony. Spacer z przewodnikiem. Zobaczymy m.in.: Piazza Bra ze słynnym amfiteatrem, Piazza d’Erbe- przepiękny plac, na którym znajdują się stoiska z owocami i warzywami oraz pomnik Dantego, zobaczymy również słynny balkon Julii. Następnie przejazd do Wenecji. Przeprawa łodzią na Plac św. Marka, gdzie zobaczymy Bazylikę św. Marka, dzwonnicę, Pałac Dożów, Spacer uroczymi uliczkami, którymi dojdziemy do Mostu Rialto spinającego brzegi Canale Grande. Czas wolny. Powrót do autokaru, przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="eleventh-day">
                            <h5>Dzień XI</h5>
                            <p>Śniadanie, wykwaterowanie, wyjazd w kierunku Polski. Przyjazd dnia kolejnego w godzinach uzależnionych od miejsca zbiórki.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Italy;