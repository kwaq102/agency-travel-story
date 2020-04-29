import React from 'react';
import '../styles/program.scss';
import SeaGallery from './SeaGallery';

const Sea = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>BAŁTYK</h1>
                    <h2>Może nasze morze?</h2>
                    <h4>Opis wymyślę
                       <span>Anna Gajewska Tekla</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <SeaGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Zbiórka w godzinach wczesno-porannych.  Wyjazd w kierunku Gdańska. Przyjazd na Westerplatte. Spacer z przewodnikiem Szlakiem Turystycznym "Westerplatte" podczas którego poznamy historię obrony Westerplatte, zobaczymy teren i obiekty byłej Wojskowej Składnicy Tranzytowej. Następnie przejazd do Głównego Miasta. Spacer Drogą Królewską.  Zobaczymy takie zabytki jak: Zielona Brama, Królewskie Kamieniczki, Dwór Artusa, Fontanna Neptuna, Ratusz Głównego Miasta, Dom Uphagena, Złota Brama, Wieża Więzienna, Katowania, Brama Wyżynna.  Zwiedzanie Bazylika Mariackiej i spacer niezwykle urokliwą ulicą Mariacką. Zobaczymy również słynnego Żurawia - zabytkowy dźwig portowy. Spacer Długim Pobrzeżem. Czas wolny.  Przejazd do Sopotu. Spacer reprezentacyjną aleją Bohaterów Monte Cassino. Wejście na najdłuższe w Europie drewniane molo.   Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Po śniadaniu przejazd do Centrum Nauki Experyment w Gdyni. Centrum jest niecodzienną pracownią doświadczalną dla małych i dużych odkrywców – amatorów, w którym w sposób interaktywny mogą na własną rękę przeprowadzić eksperymenty, poznając prawa zachodzące w przyrodzie. Następnie udamy się na spacer po Skwerze Kościuszki, gdzie zobaczymy m.in. polski niszczyciel ORP Błyskawica oraz najsłynniejszy polski żaglowiec- Dar Pomorza.  Na skwerze znajduje się również Akwarium Morskie oraz pomniki: Maszty oraz Josepha Conrada- słynnego angielskiego pisarza, polskiego pochodzenia.  Tego dnia odwiedzimy Muzeum Emigracji - pierwsze w kraju muzeum poświęcone historii polskiej emigracji, powstałe w historycznym gmachu Dworca Morskiego, skąd przez dziesięciolecia wypływały polskie transatlantyki.  Po wizycie w muzeum przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd na zwiedzanie Muzeum Wsi Słowińskiej w Klukach. Obejrzymy tam zrekonstruowaną wieś, którą zamieszkiwali kiedyś Słowińcy  (zachodniopomorscy Kaszubi). W muzeum prezentowana jest tradycja i kultura typowa dla przyjeziornych wsi rybackich. Znajdują się tam zarówno obiekty oryginalne starej osady, jak  i zrekonstruowane.  Po zwiedzaniu przejazd do Łeby. Wejście do Słowińskiego Parku Narodowego, w którym podziwiać będziemy ruchome wydmy, będące unikatowym zjawiskiem przyrodniczym parku. Po wizycie w parku, wyjazd w drogę powrotną do domu. Po drodze przerwa na obiad lub obiadokolację.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sea;