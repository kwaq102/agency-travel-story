import React from 'react';
import '../styles/program.scss';

import FootstepsMaryGallery from './FootstepsMaryGallery';


const FootstepsMary = () => {
    return (
        <>
            <section className="trip-program">
                <div className="title">
                    <h1>Francja Hiszpania Portugalia</h1>
                    <h2>Śladami sanktuariów Maryjnych</h2>
                    <h4>Maryja sama szuka takich, którzy by do Niej pobożnie i z uszanowaniem przystępowali: tych bowiem miłuje, tych karmi i zasila, tych za dzieci przyjmuje.
                       <span>Św. Bonawentura</span></h4>
                    <div className="hide" onClick={() => window.history.back()}><span>X</span></div>
                </div>
                <div className="content">
                    <FootstepsMaryGallery />
                    <h4>Program:</h4>
                    <div className="description">
                        <div className="first-day">
                            <h5>Dzień I</h5>
                            <p>Wyjazd z miejsca zbiórki. Przejazd w kierunku Niemiec i Francji. Przyjazd w okolice Strasburga. Obiadokolacja i nocleg.</p>
                        </div>
                        <div className="second-day">
                            <h5>Dzień II</h5>
                            <p>niadanie. Przejazd na zwiedzanie Strasburga, którego zabytkowe centrum zostało w całości wpisane na Listę Światowego Dziedzictwa UNESCO. Strasburg to również miasto w którym przeszłość spotyka się z nowoczesnością, polityka z historią a alzacka mentalność z europejskim kosmopolityzmem. Spacer po Grand Ile, której głównym zabytkiem jest katedra Notre-Dame, następnie do urokliwej dzielnicy Petite France w której znajdują się hotele i knajpki, w których skosztować można typowo alzackiego flammeküeche. Po zwiedzaniu przejazd w okolice La Salette. Obiadokolacja. Nocleg.</p>
                        </div>
                        <div className="third-day">
                            <h5>Dzień III</h5>
                            <p>Śniadanie. Przejazd do La Salette- sanktuarium Matki Boskiej Płaczącej związanego z objawieniem się Maryi dwójce pastuszków. Czas na modlitwę. Przejazd do Awinionu- miasta papieży, położonego na brzegu Rodanu, będącego perłą  Prowansji, gdzie na każdym kroku czuć zapach lawendy i ziół. Spacer po miasteczku, podczas którego zobaczymy: słynny most awinioński – Most św. Benezeta, Pałac Papieski, katedrę Notre Dame de Domes, a całe średniowieczne miasteczko zamknięte jest w świetnie zachowanych murach obronnych- les Remparts. Przejazd na kolację i nocleg.</p>
                        </div>

                        <div className="fourth-day">
                            <h5>Dzień IV</h5>
                            <p>Śniadanie, wykwaterowanie. Przejazd do Lourdes. Zakwaterowanie w hotelu. Obiadokolacja. Dla chętnych udział w procesji maryjnej. Nocleg.</p>
                        </div>
                        <div className="fifth-day">
                            <h5>Dzień V</h5>
                            <p>Zwiedzanie miasteczka śladami św. Bernadety. Zobaczymy młyn Boly, w którym się urodziła, Ciemnicę i inne miejsca związane z jej życiem. Modlitwa w grocie, gdzie mała pastuszka doświadczyła spotkania z Matką Boską. Droga krzyżowa. Czas wolny na prywatną modlitwę. Obiadokolacja. Udział w procesji. Nocleg. </p>
                        </div>

                        <div className="sixth-day">
                            <h5>Dzień VI</h5>
                            <p>Po śniadaniu wyjazd w kierunku Saragossy. Nawiedzenie największej barokowej bazyliki w Hiszpanii- Matki Bożej na Pilarze. Tutaj Maryja objawiła się św. Jakubowi. Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>

                        <div className="seventh-day">
                            <h5>Dzień VII</h5>
                            <p>Śniadanie. Wyjazd na zwiedzanie Burgos, będącego dawną stolicą Starej Kastylii. Odwiedzimy tam jedną z najwspanialszych katedr gotyckich w całej Hiszpanii - katedry św. Jakuba. Spacer po miasteczku. Przejazd do Salamanki, o które nazywane jest „miastem w kolorze złota”. Zwiedzanie starej i nowej katedry. Nietypowe w niej jest to, że w rzeczywistości są to dwie katedry połączone w jedną. Spacer na Plaza Mayor podczas którego będziemy podziwiać średniowieczną architekturę. Przejazd do hotelu. Obiadokolacja. Nocleg.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default FootstepsMary;