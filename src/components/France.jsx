import React from 'react';
import '../styles/program.scss';
import FranceGallery from './SpainGallery';

const France = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Francja</h1>
                    <h2>Francja</h2>
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
                            <p>Nocny wyjazd w kierunku Francji. Przyjazd na nocleg w okolice Strasburga.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Przejazd na zwiedzanie Strasburga, którego zabytkowe centrum Strasburga zostało w całości wpisane na Listę Światowego Dziedzictwa UNESCO. Strasburg to również miasto w którym przeszłość spotyka się z nowoczesnością, polityka z historią a alzacka mentalność z europejskim kosmopolityzmem. Spacer po Grand Ile,której głównym zabytkiem jest katedra Notre-Dame, następnie do urokliwej  Petite France- dzielnicy Strasburga, w której znajdują się hotele i knajpki, w których skosztować można typowo alzackiego flammeküeche. Po zwiedzaniu przejazd w okolice Awinionu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Awinionu. Miasto papieży, położone na brzegu Rodanu, perła  Prowansji, gdzie na każdym kroku czuć zapach lawendy i ziół. Spacer po miasteczku, podczas którego zobaczymy: słynny most awinioński – Most św. Benezeta, Pałac Papieski, katedrę Notre Dame de Domes, a całe średniowieczne miasteczko zamknięte jest w świetnie zachowanych murach obronnych- les Remparts. Następnie przejazd do hotelu na wybrzeżu Costa Brava. Zakwaterowanie. Odpoczynek. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do stolicy Katalonii – Barcelony. Zobaczymy największe dzieło Gaudiego: kościół Sagrada Familia. Przejazd na wzgórze Montjuic, Plac Hiszpański, Plac Kataloński. Spacer po Las Ramblas – główny deptak ze słynną halą targową La Boqueria, Dzielnica Gotycka, katedra św. Eulalii. Czas wolny. Po południu przejazd do hotelu. Zakwaterowanie, kolacja, nocleg.</p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p> Przejazd do stolicy paelli- Walencji. Spacer po najstarszej dzielnicy miasta: katedra, Plaza de la Reina, Mercado Central budynek Giełdy Jedwabiu, wpisany na listę UNESCO. Wizyta w Ciudad de las Artesy las Ciencias – Miasteczku Sztuki i Nauki. Kompleks futurystycznych obiektów autorstwa Santiago Calatravy jest symbolem Walencji. Po zwiedzaniu wyjazd do hotelu w okolicach Granady. Zakwaterowanie, obiadokolacja, nocleg.</p>
                        </div>

                        <div className="sixth-day">
                            <h5>Dzień VI</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Granady. Zwiedzanie przepięknej Alhambry- najpiękniejszego pałacu Orientu i symbolu muzułmańskiego raju. Zespół zamkowo-pałacowy wpisany jest na listę światowego dziedzictwa UNESCO. Następnie przejazd do Kordoby, miasta o orientalnym charakterze, z historycznym centrum wpisanym na listę UNESCO. Zwiedzanie meczetu Mezquita, jednego z najwspanialszych na świecie przykładów arabskiej architektury. Przejazd do hotelu. Zakwaterowanie, kolacja, nocleg.</p>
                        </div>

                        <div className="seventh-day">
                            <h5>Dzień VII</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Sewilli, stolicy Andaluzji. Zwiedzanie: stara dzielnica żydowska Santa Cruz, pełna malowniczych zaułków, Katedra Najświętszej Marii Panny – będąca jedną z największych budowali sakralnych świata i jedną z najpiękniejszych świątyń w stylu gotyckim. Zobaczymy również Alkazar- pałac królewski w stylu mudéjar, Plac Hiszpański i Plac Ameryki. Przejazd do hotelu. Zakwaterowanie, kolacja, nocleg.</p>
                        </div>

                        <div className="eighth-day">
                            <h5>Dzień VIII</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Madrytu- stolicy i największego miasta Hiszpanii, Panoramiczne zwiedzanie: Plaza Mayor, Plac Hiszpański z pomnikiem Cervantesa, pałac królewski, plac Orientu. Przejazd do hotelu. Zakwaterowanie, kolacja, nocleg.</p>
                        </div>

                        <div className="ninth-day">
                            <h5>Dzień IX</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Burgos. Zwiedzanie okazałej, gotyckiej, katedry, nazywanej „dziełem aniołów”. Ze uwagi na wspaniałą architekturę oraz zebrane dzieła sztuki została wpisana na listę UNESCO. Następnie przejazd do San Sebastian –baskijskiego miasteczka położonego nad Morzem Kantabryjskim. Czas wolny na odpoczynek nad zatoką La Concha (czyli muszla) oraz degustację lokalnych tapas, które uchodzą za najwspanialsze w Hiszpanii. Przejazd do hotelu. Zakwaterowanie. Obiadokolacja, nocleg.</p>
                        </div>

                        <div className="tenth-day">
                            <h5>Dzień X</h5>
                            <p>Śniadanie. Wykwaterowanie. Przejazd do Bordeaux. To miasto portowe w południowo-zachodniej Francji, położone w zakolu rzeki Garonny, jest stolicą francuskiej Akwitanii. Tu powstała najszersza w Europie esplanada (Esplanada des Quinconces) - szeroka ulica z aleją spacerową oraz tarasy Ludwika XVIII z których rozpościera się przepiękna panorama rzeki. Zobaczymy również przepiękny gmach Teatru Wielkiego (Grand Théâtre), barokowy kościół Marii Panny, romańsko-gotycką katedrę św. Andrzeja oraz pozostałości dawnych murów obronnych. W 2007 roku zabytkowe centrum Bordeaux zostało wpisane na Listę Światowego Dziedzictwa UNESCO. Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="eleventh-day">
                            <h5>Dzień XI</h5>
                            <p>Śniadanie. Wykwaterowanie. Ciągły przejazd do Polski.</p>
                        </div>
                        <div className="twelfth-day">
                            <h5>Dzień XII</h5>
                            <p>Przyjazd do Polski. Godziny uzależnione od miejsca wyjazdu.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default France;