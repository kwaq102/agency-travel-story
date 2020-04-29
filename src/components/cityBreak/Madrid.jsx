import React from 'react';
import '../../styles/program.scss';
import MadridGallery from './MadridGallery';

const Madrid = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Elegancki Madryt</h1>
                    <h4>Z Madrytu do nieba, a w niebie dziurka, by móc go oglądać.<span>powiedzenie powstałe w czasach króla Karola III</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <MadridGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Zbiórka na lotnisku. Przelot do Madrytu. Transfer do hotelu. Spacer główną arterią miasta- Gran Via, podczas którego zobaczymy najbardziej okazałe zabytki oraz nowoczesne siedziby światowych korporacji. Powrót do hotelu, nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Po śniadaniu udamy się na zwiedzanie. Tego dnia zobaczymy: Plac Hiszpański z pomnikiem Cervantesa, zobaczymy dwa ważne madryckie place: Puerta del Sol, będący środkiem Hiszpanii i niezwykle uroczy Plaza Mayor. Następnie spacer po najstarszej części miasta –Madrycie Habsburgów. Przerwa na tapas w Mercado San Miguel -zabytkowej hali targowej, gdzie skosztować można przekąsek z różnych regionów Hiszpanii. Następnie dalsze zwiedzanie: kościół św. Izydora, bazylika św. Franciszka, Pałac Królewski – symbol hiszpańskiej monarchii wraz ze wspaniałymi XIX-wiecznymi ogrodami, katedra Almudena, Powrót do hotelu. Obiadokolacja i nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Zwiedzanie muzeum Prado, które kryje wspaniałą kolekcję dzieł Velázqueza, Goi i innych wybitnych artystów. Zobaczymy również dworzec kolejowy Atocha –o jego unikatowym charakterze świadczy architektura oraz znajdujący się w holu tropikalny ogród.  Przejazd na stadion Santiago Bernabéu. Czas wolny na zakupy. Powrót do hotelu, nocleg.</p>
                        </div>
                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Wykwaterowanie. Transfer na lotnisko. Przelot do Polski.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Madrid;