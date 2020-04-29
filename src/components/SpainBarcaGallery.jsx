import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import avignon from '../img/spainBarca/avignon.jpg';
import avignon1 from '../img/spainBarca/avignon_min.jpg';
import cadaques from '../img/spainBarca/cadaques.jpg';
import cadaques1 from '../img/spainBarca/cadaques_min.jpg';
import como from '../img/spainBarca/como.jpg';
import como1 from '../img/spainBarca/como_min.jpg';
import costaBrava from '../img/spainBarca/costaBrava.jpg';
import costaBrava1 from '../img/spainBarca/costaBrava_min.jpg';
import girona from '../img/spainBarca/girona.jpg';
import girona1 from '../img/spainBarca/girona_min.jpg';
import mountain from '../img/spainBarca/mountain.jpg';
import mountain1 from '../img/spainBarca/mountain_min.jpg';
import sagradaFamilia from '../img/spainBarca/sagradaFamilia.jpg';
import sagradaFamilia1 from '../img/spainBarca/sagradaFamilia_min.jpg';
import spainMountain from '../img/spainBarca/spainMountain.jpg';
import spainMountain1 from '../img/spainBarca/spainMountain_min.jpg';

const images = [
    {
        original: avignon,
        thumbnail: avignon1,
        thumbnailTitle: "Avignon",
        description: "Avignon"
    },
    {
        original: cadaques,
        thumbnail: cadaques1,
    },
    {
        original: como,
        thumbnail: como1,
    },
    {
        original: costaBrava,
        thumbnail: costaBrava1,
    },
    {
        original: girona,
        thumbnail: girona1,
    },
    {
        original: mountain,
        thumbnail: mountain1,
    },
    {
        original: sagradaFamilia,
        thumbnail: sagradaFamilia1,
    },
    {
        original: spainMountain,
        thumbnail: spainMountain1,
    },
]

class SpainBarcaGallery extends Component {
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

export default SpainBarcaGallery;