import React, { Component } from 'react';
import '../styles/Navigation.scss'

class Navigation extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">O nas</a></li>
                        <li><a href="">Oferta</a></li>
                        <li><a href="">Zalety</a></li>

                        <li className="travel-list">
                            <a href="">Podróże</a>
                            <ul>
                                <li><a href="">Wycieczki</a></li>
                                <li><a href="">City Break</a></li>
                                <li><a href="">Obozy młodzieżowe</a></li>
                                <li><a href="">Pielgrzymki</a></li>
                            </ul>
                        </li>


                        <li><a href="">Nasz zespół</a></li>
                        <li><a href="">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;