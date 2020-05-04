import React from 'react';
import '../styles/program.scss';
import FranceGallery from './FranceGallery';

const France = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Francja</h1>
                    <h2>Francuskie Impresje</h2>
                    <h4>Każdy człowiek ma dwie ojczyzny: swoją własną oraz Francję.e de Vegi.
                       <span>Henri de Bornier</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <FranceGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd z miejsca zbiórki i przejazd w kierunku Niemiec i Francji. Przyjazd do Strasburga. Zakwaterowanie i nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Zwiedzanie Strasburga którego, zabytkowe centrum zostało w całości wpisane na Listę Światowego Dziedzictwa UNESCO. Strasburg to również miasto w którym przeszłość spotyka się z nowoczesnością, polityka z historią a alzacka mentalność z europejskim kosmopolityzmem. Spacer po Grand Ile, której głównym zabytkiem jest katedra Notre-Dame, następnie do urokliwej Petite France- dzielnicy Strasburga, w której znajdują się hotele i knajpki. Przejazd do Nancy – miasta będącego historyczną stolicą Lotaryngii. Najważniejszym miejscem jest place Stanislas, z pomnikiem Stanisława Leszczyńskiego, który zamienił Nancy w klejnot XVIII-wiecznej urbanistyki. Zobaczymy również Łuk Triumfalny oraz  katedrę Notre-Dame de Bon Secours, w której znajduje się nagrobek króla. Następnie przejazd do Metz. To rzymskie miasto jest obecnie stolicą Lotaryngii. Spacer wśród kanałów. Obiadokolacja. Przejazd do hotelu. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Po śniadaniu wyjazd na zwiedzanie Szampanii. Przyjazd do Reims, w którym zwiedzimy gotycką Katedrę Notre-Dame, która uchodzi za najbardziej harmonijną we Francji, zwaną również Katedrą Aniołów. Świątynia była miejscem koronacji królów Francji. Następnie przejazd do Épernay, będącego głównym ośrodkiem produkcji szampana. Udamy się do jednej z piwnic na degustację. Następnie przejazd w kierunku Paryża. Spacer po malowniczym wzgórzu Montmartre, gdzie zobaczymy śnieżnobiałą bazylikę Sacré-Cœur, Moulin Rouge, Plac Pigalle. Przejazd na obiadokolację a następnie na nocleg.</p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Przejazd na dalsze zwiedzanie Paryża. Zwiedzanie Luwru- największego muzeum na świecie, które prezentuje sztukę od czasów starożytnych po XIX wiek, zobaczymy słynną Mona Lisę, Wenus z Milo, Kodeks Hamurabiego i inne cenne dzieła sztuki. Następnie zwiedzanie miasta: Katedra Notre-Dame (z takiej odległości z jakiej, to będzie możliwe), spacer po Dzielnicy Łacińskiej, gdzie zobaczymy Panteon, Sorbonę, dawne termy rzymskie, kościół św. Seweryna. Czas wolny na zakupy, lunch lub kawę. Przejazd pod wieżę Eiffla, wejście lub wjazd windą. Dla chętnych rejs po Sekwanie. Przejazd na obiadokolację. Nocleg.</p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p>Śniadanie i wyjazd do Wersalu. Zwiedzenie pałacu królewskiego, będącego symbolem francuskiej monarchii absolutnej. Zwiedzanie Galerii Zwierciadlanej, Kaplicy Królewskiej, Salonu Wenus, Sypialni Królowej. Następnie powrót do Paryża, gdzie zobaczymy jeszcze: Plac Concorde, Pola Elizejskie, Łuk Triumfalny, przepiękny gmach opery Garniera, Plan Vendome, przy którym mieszkał Fryderyk Chopin, kościół Marii Magdaleny. Obiadokolacja. Powrót do hotelu. Nocleg.</p>
                        </div>

                        <div className="sixth-day">
                            <h5>Dzień VI</h5>
                            <p>Śniadanie. Przejazd Mont Sant Michel. Zwiedzanie klasztoru położonego na granicy Normandii i Bretanii na wyspie zwanej Mont-Tombe (Grobowcem na Wzgórzu). Ze skromnej VIII-wiecznej kaplicy wyrosło ogromne benedyktyńskie opactwo wzbudzające respekt ze względu na rozmiary oraz działanie natury. Architektura sanktuarium oraz zatoka z dużymi pływami morskimi sprawiają, iż jest to jedno z najchętniej odwiedzanych miejsc we Francji.  Po zwiedzaniu przejazd na obiadokolację i nocleg.</p>
                        </div>

                        <div className="seventh-day">
                            <h5>Dzień VII</h5>
                            <p>Śniadanie. Przejazd do La Rochelle, którego dumą jest stary port otoczony okazałymi budowlami i największym portem jachtowym na wybrzeżu atlantyckim Francji, nad którym górują dwie wieże. Spacer po mieście, następnie przejazd do miejscowości Cognac, gdzie odwiedzimy jedną z destylarni, gdzie dowiemy się jak powstaje trunek. Degustacja koniaku. Przejazd na obiadokolację, następnie do hotelu na nocleg.</p>
                        </div>

                        <div className="eighth-day">
                            <h5>Dzień VIII</h5>
                            <p>Po śniadaniu wyjazd do Bordeaux, wzniesionego w zakolu rzeki Garonny. Spacer po reprezentacyjnym XVIII-wiecznym centrum oraz wzdłuż nadbrzeża, gdzie wznoszą się klasycystyczne fasady. Zobaczymy gmach Grand Théâtre, reprezentacyjny Place de la Bourse, Esplanade des Quinconces z fontannami i pomnikami, z których najważniejszy jest Monument aux Girondins, upamiętniający żyrondystów posłanych na gilotynę w czasie Rewolucji Francuskiej. Przejazd w okolice Tuluzy. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="ninth-day">
                            <h5>Dzień IX</h5>
                            <p>Po śniadaniu przejazd na zwiedzanie średniowiecznego miasta obronnego Carcasonne, które wpisane jest na listę UNESCO. Zobaczymy mury obronne, Bazylikę St-Nazaire i Château-zamek, będący twierdzą w twierdzy. Przejazd do Awinionu. Spacer po prowansalskim miasteczku, podczas którego zobaczymy mury obronne miasta, Pałac Papieski, Katedrę Notre-Dame-des-Domes i słynny most awinioński – Most św. Benezeta. Przejazd na kolację, następnie do hotelu na nocleg.</p>
                        </div>

                        <div className="tenth-day">
                            <h5>Dzień X</h5>
                            <p>Przejazd do Cannes. Spacer Aleją Gwiazd, którą dojdziemy do Pałacu Festiwalowego, gdzie co roku w maju odbywa się gala, podczas której przyznawane są Złote Palmy. Czas wolny na plaży. Dla chętnych rejs na jedną z wyspę św. Małgorzaty, gdzie więziony był tajemniczy człowiek w żelaznej masce, lub na wyspę  św. Honorata, będącej urokliwym zacisznym miejscem, gdzie unosi się intensywny zapach pinii oraz słynącej z znakomitego wina produkowanego przez Cystersów zamieszkujących wyspę. Obiadokolacja. Przejazd do hotelu. Nocleg.</p>
                        </div>
                        <div className="eleventh-day">
                            <h5>Dzień XI</h5>
                            <p>Po śniadaniu przejazd przez kanion rzeki Verdon, gdzie podziwiać będziemy przepiękne, malownicze położone wioski oraz toczącą swoje wody rzekę. Przejazd do Grasse, będącego  ośrodkiem kwiatowego przemysłu perfumeryjnego. Zwiedzanie Muzeum Perfum, możliwość zakupów. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="twelfth-day">
                            <h5>Dzień XII</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Nicei: Promenada Anglików, barokowa katedra  Ste-Réparate, wąskie uliczki Starego Miasta, na którym znajduje się największy targ w regionie. Przejazd do Księstwa Monako. Zwiedzanie Starego Miasta Monako: piękny gmach oceanarium położony na skarpie nad morzem, Katedra św. Mikołaja, spacer do Pałacu Książęcego (z zewnątrz). Zobaczymy czarującą panoramę na Stary Port. Przejazd do Monte Carlo, podejście pod słynne kasyno. Po zwiedzaniu przejazd w kierunku Włoch na obiadokolację i nocleg. </p>
                        </div>

                        <div className="thirteenth-day">
                            <h5>Dzień XIII</h5>
                            <p>Śniadanie, przejazd w kierunku Polski. Godziny przyjazdu uzależnione są od miejsca zbiórki.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default France;