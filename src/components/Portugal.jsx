import React from 'react';
import '../styles/program.scss';

import PortugalGallery from './PortugalGallery';

const Portugal = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Portugalia</h1>
                    <h2>Azulejos, sardynki i wielkie odkrycia</h2>
                    <h4> …Nie znam kwiatów o podobnej różnorodności kolorów jak Lizbona w słońcu…
                       <span>Fernando Pesoa</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <PortugalGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wylot z Polski. Przylot do Lizbony. Przejazd do hotelu w okolicach Figueira da Foz. Zakwaterowanie w hotelu. Nocleg. </p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>Śniadanie. Czas wolny na odpoczynek, plażę. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Wycieczka do Lizbony. Całodzienne zwiedzanie Lizbony z przewodnikiem.  W programie: Dolne Miasto (Baixa) gdzie zobaczymy: Plac Restauradores, Plac Rossio, Rua Augusta, Praça de Comérico i wejdziemy na Bairro Alto. Przejście spacerem na Alfamę. Zobaczymy lizbońską katedrę oraz kościół św. Antoniego. Przejazd autokarem do dzielnicy Belem. Następnie zwiedzanie XVI-wiecznej dzielnicy Belém, gdzie zobaczymy Klasztor Hierominitów i przylegający do niego kościół Najświętszej Marii Panny, wieżę Belem i Pomnik Odkrywców. Dodatkowa atrakcja w Belém: pyszne ciasteczka z Belem, jedyne takie w Portugalii.  Następnie przejazd do Sintry. Spacer z przewodnikiem po niezwykłym kolorowym miasteczku słynącym z niesamowitych pałaców: Quinta da Regaleira to ekstrawagancka gotycka posiadłość z XIX wieku, Pałac Pena, Zamek Maurów to częściowo zrekonstruowana forteca datowana na IX wiek, wybudowana przez Maurów z północnej Afryki w celu ochrony żyznych terenów Sintry a przede wszystkim Palacio da Pena to niezwykle kolorowy i misternie zdobiony pałac, stanowiący główną atrakcję każdej wycieczki do Sintry. Powrót do hotelu. Obiadokolacja. Nocleg. </p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie. Dzień wolny.</p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p>Śniadanie. Przejazd na zwiedzanie Coimbry i Fatimy.
                            W Coimbrze bardzo łatwo zakochać - w jej architekturze, kulturze, historii. Ulubione miasto studentów, gdzie kultywuje się dawne tradycje życia studenckiego. To miasto narodzin sześciu królów Portugalii, a także siedziba najstarszego w kraju uniwersytetu. Coimbra była również pierwszą stolicą Portugalii, a do dnia dzisiejszego miasto to wzbudza w Portugalczykach szacunek i sentyment. Następnie udamy się do Fatimy. Nawiedzenie sanktuarium fatimskiego i miejsc związanych z objawieniem Matki Boskiej trojgu pastuszkom. Powrót do hotelu. Obiadokolacja. Nocleg. </p>
                        </div>

                        <div className="sixth-day">
                            <h5>Dzień VI</h5>
                            <p>Śniadanie. Przejazd do Porto. Jest to drugie miasto co do wielkości po Lizbonie. Zobaczymy: Katedrę w Porto, renesansowy kościół Santa Klara, mury Ferdynanda,  zabytkowy dworzec Sao Bento, dzielnicę Riberia, która oddaje ducha Portugali, ratusz dominujący na północnym końcu Avienda dos Aliados, degustacja win. Powrót do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="seventh-day">
                            <h5>Dzień VII</h5>
                            <p>Śniadanie. Wykwaterowanie. transfer na lotnisko. Wylot do Polski.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default Portugal;