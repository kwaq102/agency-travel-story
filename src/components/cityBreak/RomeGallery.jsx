import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';


import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import apostle from '../../img/rome/apostle.jpg';
import apostle1 from '../../img/rome/apostle_min.jpg';
import artPainting from '../../img/rome/artPainting.jpg';
import artPainting1 from '../../img/rome/artPainting_min.jpg';
import colosseum from '../../img/rome/colosseum.jpg';
import colosseum1 from '../../img/rome/colosseum_min.jpg';
import mass from '../../img/rome/mass.jpg';
import mass1 from '../../img/rome/mass_min.jpg';
import stAngleCastle from '../../img/rome/stAngleCastle.jpg';
import stAngleCastle1 from '../../img/rome/stAngleCastle_min.jpg';
import tiber from '../../img/rome/tiber.jpg';
import tiber1 from '../../img/rome/tiber_min.jpg';


const images = [
    {
        original: apostle,
        thumbnail: apostle1,
    },
    {
        original: artPainting,
        thumbnail: artPainting1,
    },
    {
        original: colosseum,
        thumbnail: colosseum1,
    },
    {
        original: mass,
        thumbnail: mass1,
    },
    {
        original: stAngleCastle,
        thumbnail: stAngleCastle1,
    },
    {
        original: tiber,
        thumbnail: tiber1,
    },
];

class RomeGallery extends Component {
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

export default RomeGallery;


