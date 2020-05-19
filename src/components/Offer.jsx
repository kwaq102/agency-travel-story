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
                            <p className={this.state.showTripText ? "show" : null}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam fugiat commodi accusantium possimus nisi fuga quod quibusdam aspernatur! Laboriosam dolorem incidunt iusto nam corporis doloremque culpa veritatis accusamus reprehenderit?</p>
                            <img src={trip} alt="" />
                            <h5>Wycieczki</h5>
                            <button onClick={this.handleClickTrip}>{this.state.showTripText ? 'UKRYJ' : 'DOWIEDZ SIĘ WIĘCEJ'}</button>
                        </div>
                        <div className="pilgrimages">
                            <p className={this.state.showPilgrimagesText ? "show" : null}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam fugiat commodi accusantium possimus nisi fuga quod quibusdam aspernatur! Laboriosam dolorem incidunt iusto nam corporis doloremque culpa veritatis accusamus reprehenderit? isi fuga quod quibusdam aspernatur! Laboriosam dolorem incidunt iusto</p>
                            <img src={pilgrimage} alt="" />
                            <h5>Pielgrzymki</h5>
                            <button onClick={this.handleClickPilgrimage}>{this.state.showPilgrimagesText ? 'UKRYJ' : 'DOWIEDZ SIĘ WIĘCEJ'}</button></div>
                        <div className="camp">
                            <p className={this.state.showCampText ? "show" : null}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam fugiat commodi accusantium possimus nisi fuga quod quibusdam aspernatur! Laboriosam dolorem incidunt iusto nam corporis doloremque culpa veritatis accusamus reprehenderit? isi fuga quod quibusdam aspernatur! Laboriosam dolorem incidunt iusto</p>
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