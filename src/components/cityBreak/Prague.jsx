import React from 'react';
import '../../styles/program.scss';
import PragueGallery from './PragueGallery';

const Prague = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Lunatyczna Praga</h1>
                    <h4>Praga nie puszcza nikogo z tych, których pochwyciła<span>Angelo Maria Ripellino</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <PragueGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Zbiórka. Wyjazd w kierunku Czech. Przyjazd do Pragi. Spacer po mieście: Mała Starna- klimatyczna dzielnica u stóp Hradczan z urokliwymi kamieniczkami, uliczkami, barokowymi pałacami. Zobaczymy również klasztor na Strahowie, kompleks barokowych budynków sakralnych- Loretę. Odwiedzimy przepiękną bibliotekę na Strahovie. Wstąpimy również do Muzeum Miniatur, prezentujące niesamowitą kolekcję figurek. Niektóre z nich można oglądać tylko przez soczewki powiększające. Zobaczymy m.in. Wieżę Eiffla, która jest 100 tys. Razy mniejsza od oryginału. Przejazd do hotelu. Zakwaterowanie. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Spacer po głównym placu miejskim- Rynku Staromiejskim przy którym ulokowany jest Ratusz Staromiejski ze słynnym zegarem astronomicznym Orloj, pomnik Jana Husa. Wejście do Muzeum Figur Woskowych  oraz Muzeum Czekolady, gdzie zobaczymy ekspozycję historii czekolady, poznamy historię picia kakao oraz czekolady, sięgającą mitycznych Azteków, ku naszemu zadowoleniu utwierdzimy się w przekonaniu, że czekolada,  to całkiem zdrowa przekąska . Będzie oczywiście możliwość degustacji czekoladek, trufli i pralin czekoladowych. Kolejną atrakcją będzie pokaz przygotowania absyntu wraz z degustacją. Czechy są jednym z nielicznych krajów, w których absynt jest legalny i próbując tzw. „zielonej wróżki” poczujemy się jak prawdziwi artyści.
                            Wieczorny rejs po Wełtawie z kolacja i 1 piwem. Powrót do hotelu. Nocleg.
                            </p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Przejazd do Velkich Popowic, gdzie będziemy zwiedzać browar. Usłyszymy historię browaru, poznamy procesy ważenia piwa, zwiedzimy zabytkową warzelnię , spróbujemy świeżo uważonego piwa, obejrzymy pakownię oraz wystawę zabytkowych opakowań do piwa. Powrót do centrum. Zwiedzanie „królewskiej” dzielnicy na zachodnim brzegu Wełtawy- na Hradczany, gdzie zobaczymy m.in. Zamek Królewski, Złotą Uliczkę, Katedrę św. Czas wolny. Wieczorem lokalna kolacja w jednym z praskich lokali z piwem, winem i pokazem folklorystycznym. Powrót do hotelu. Nocleg.</p>
                        </div>
                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Przejazd kolejką na wzgórze Petrin. Nie ma piękniejszego widoku na Pragę, niż ten ze wzgórza na Petrinie. Jest dla Pragi tym czym Montmartre dla Paryża, Janikulum dla Rzymu czy Góra Gellerta dla Budapesztu. Dla chętnych wejście na mini wieżę Eiffla, bądź do Gabinetu Krzywych zwierciadeł (dodatkowo płatne). Ostatni rzut oka na Pragę. Wyjazd autokarem w kierunku Krakowa. Przyjazd w godzinach późnowieczornych.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Prague;