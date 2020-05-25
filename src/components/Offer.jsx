import React, { Component } from 'react';
import '../styles/Offer.scss';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

import trip from '../img/trip.jpg';
import camp from '../img/camp.jpg';
import pilgrimage from '../img/pielgrzymka.jpg';
class Offer extends Component {
    state = {
        showTripText: false,
        showPilgrimagesText: false,
        showCampText: false,
        showCityText: false,
        showthemedTripText: false,
    }

    handleClickTrip = () => {
        this.setState({
            showTripText: !this.state.showTripText,
        })
    }
    handleClickPilgrimage = () => {
        this.setState({
            showPilgrimagesText: !this.state.showPilgrimagesText,
        })
    }
    handleClickCamp = () => {
        this.setState({
            showCampText: !this.state.showCampText,
        })
    }

    render() {
        return (
            <>
                <section className="offer" id="offer">
                    <Pulse><h1>Nasz oferta</h1></Pulse>

                    <Fade bottom cascade> <div>

                        <div className="trip">
                            <p className={this.state.showTripText ? "show" : null}>W naszej ofercie prezentujemy Państwu szeroką gamę wycieczek zaczynając od krótkich lotniczych i autokarowych City Breaków do europejskich metropolii, poprzez długie wycieczki objazdowe, na których trasie znajduje się wiele pięknych miejsc i atrakcji, po wyjazdy tematyczne. Nasze oferty skierowane są do klienta grupowego i są to proponowane warianty. Jednak prawie wszystkie oferty są elastyczne i podlegają modyfikacjom na życzenie Klienta. Nasze programy są szyte na miarę i z wielką chęcią stworzymy dla Państwa wymarzony program na wycieczkę.</p>
                            <img src={trip} alt="" />
                            <h5>Wycieczki</h5>
                            <button onClick={this.handleClickTrip}>{this.state.showTripText ? 'UKRYJ' : 'DOWIEDZ SIĘ WIĘCEJ'}</button>
                        </div>
                        <div className="pilgrimages">
                            <p className={this.state.showPilgrimagesText ? "show" : null}>W Europie znajduje się niezliczona ilość przepięknych kościołów, kaplic, kapliczek, sanktuariów, będących pamiątką po niezwykłych wydarzeniach takich jak objawienia Maryjne, objawienia aniołów, działalność świętych. W naszej ofercie nie może zabraknąć miejsc kultu religijnego. Naszym celem jest spotkanie z naszymi patronami i orędownikami, modlitwa na ich grobach, prośba o ich wstawiennictwo. Chcemy wracać do wydarzeń, które miały miejsce, poczuć je w naszych sercach, dotknąć tych miejsc i oczywiście podziwiać dzieła architektury stworzone dla pokoleń.</p>
                            <img src={pilgrimage} alt="" />
                            <h5>Pielgrzymki</h5>
                            <button onClick={this.handleClickPilgrimage}>{this.state.showPilgrimagesText ? 'UKRYJ' : 'DOWIEDZ SIĘ WIĘCEJ'}</button></div>
                        <div className="camp">
                            <p className={this.state.showCampText ? "show" : null}>Wszyscy doskonale znamy powiedzenie, że podróże kształcą. Wycieczki są świetnym uzupełnieniem szkolnej edukacji (a może odwrotnie?), dlatego przygotowaliśmy również ofertę dla naszych najmłodszych Klientów. Proponujemy różne wycieczki z elementami edukacyjno-poznawczymi. Jednak doskonale zdajemy sobie sprawę, że odpoczynek należy się każdemu, dlatego mamy przygotowane również oferty na obozy młodzieżowe, na których uczestnicy oprócz zwiedzania mają dużo czasu na zabawę i odpoczynek. Programy są elastyczne, podlegają modyfikacjom na życzenie Klienta. Oferty świetnie nadają się również dla dorosłych.</p>
                            <img src={camp} alt="" />
                            <h5>Obozy młodzieżowe</h5>
                            <button onClick={this.handleClickCamp}>{this.state.showCampText ? 'UKRYJ' : 'DOWIEDZ SIĘ WIĘCEJ'}</button></div>

                    </div></Fade>

                </section>
            </>
        );
    }
}

export default Offer;