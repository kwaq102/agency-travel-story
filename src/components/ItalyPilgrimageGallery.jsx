import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import assisi from '../img/italyPilgrimage/assisi.jpg';
import assisi1 from '../img/italyPilgrimage/assisi_min.jpg';
import basilicaOfLoreto from '../img/italyPilgrimage/basilicaOfLoreto.jpg';
import basilicaOfLoreto1 from '../img/italyPilgrimage/basilicaOfLoreto_min.jpg';
import colosseum from '../img/italyPilgrimage/colosseum.jpg';
import colosseum1 from '../img/italyPilgrimage/colosseum_min.jpg';
import mass from '../img/italyPilgrimage/mass.jpg';
import mass1 from '../img/italyPilgrimage/mass_min.jpg';
import rome from '../img/italyPilgrimage/rome.jpg';
import rome1 from '../img/italyPilgrimage/rome_min.jpg';
import siena from '../img/italyPilgrimage/siena.jpg';
import siena1 from '../img/italyPilgrimage/siena_min.jpg';

const images = [
    {
        original: assisi,
        thumbnail: assisi1,
        thumbnailTitle: "assisi",
        description: "assisi",
    },
    {
        original: basilicaOfLoreto,
        thumbnail: basilicaOfLoreto1,
        thumbnailTitle: "basilicaOfLoreto",
        description: "basilicaOfLoreto",
    },
    {
        original: colosseum,
        thumbnail: colosseum1,
        thumbnailTitle: "colosseum",
        description: "colosseum",
    },
    {
        original: mass,
        thumbnail: mass1,
        thumbnailTitle: "mass",
        description: "mass",
    },
    {
        original: rome,
        thumbnail: rome1,
        thumbnailTitle: "rome",
        description: "rome",
    },
    {
        original: siena,
        thumbnail: siena1,
        thumbnailTitle: "siena",
        description: "siena",
    },
]


class ItalyPilgrimageGallery extends Component {
    state = {
    }
    render() {
        return (
            <>
                <div className="gallery">
                    <ImageGallery items={images}
                        showPlayButton={false}
                        thumbnailPosition='top' />
                </div>
            </>
        );
    }
}

export default ItalyPilgrimageGallery;
