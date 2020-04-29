import React from 'react';
import '../../styles/program.scss';
import BarcelonaGallery from './BarcelonaGallery';

const Barcelona = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Bajeczna Barcelona</h1>
                    {/* <h2>Na Szlaku Piastowskim</h2> */}
                    <h4>To miasto ma czarodziejską moc (…). Zanim się człowiek obejrzy, wejdzie mu pod skórę i skradnie duszę.
                       <span>Carlos Ruiz Zafón</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <BarcelonaGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Odprawa na lotnisku, przelot do Barcelony, transfer do hotelu na wybrzeżu Costa Brava, zakwaterowanie, kolacja, nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie, przejazd do Barcelony. W stolicy Katalonii zobaczymy najważniejsze dzieła Antoniego Gaudiego: Park Güell, bazylika Sagrada Família, fasady kamienic Casa Mila i Casa Batlo. Zobaczymy także Dzielnicę Gotycką z Katedrą Św. Eulalii, spacer słynną la Ramblą, przejazd na wzgórze Montjuïc oraz stadion FC Barcelony Camp Nou (płatny ok. 25€). Powrót na kolację, nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie, dzień wolny lub rejs statkiem do urokliwego miasteczka na wybrzeżu Costa Brava - Tossa de Mar (płatne ok. 25€). Powrót do hotelu, kolacja, nocleg.</p>
                        </div>
                        <div className="fourth-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie, wycieczka do Opactwa Matki Bożej w Montserrat, które jest głównym Sanktuarium Maryjnym w Katalonii. W klasztorze położonym na malowniczym masywie górskim Montserrat znajduje się figurka Czarnej Madonny - La Morenety, która jest magnesem przyciągającym wszystkich wiernych. Powrót na kolację. </p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie, wykwaterowanie, transfer na lotnisko, wylot do Polski.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Barcelona;