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
                        <li><a href="">Galeria</a></li>
                        <li><a href="">Nasz zespół</a></li>
                        <li><a href="">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;