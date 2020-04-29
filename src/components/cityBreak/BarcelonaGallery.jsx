import React, { Component } from 'react';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import guellPark from '../../img/barcelona/guellPark.jpg';
import guellPark1 from '../../img/barcelona/guellPark_min.jpg';
import fountain from '../../img/barcelona/fountain.jpg';
import fountain1 from '../../img/barcelona/fountain_min.jpg';
import campNou from '../../img/barcelona/campNou.jpg';
import campNou1 from '../../img/barcelona/campNou_min.jpg';
import casaMila from '../../img/barcelona/casaMila.jpg';
import casaMila1 from '../../img/barcelona/casaMila_min.jpg';
import barcelonaHouse from '../../img/barcelona/barcelonaHouse.jpg';
import barcelonaHouse1 from '../../img/barcelona/barcelonaHouse_min.jpg';
import barcelonaGate from '../../img/barcelona/barcelonaGate.jpg';
import barcelonaGate1 from '../../img/barcelona/barcelonaGate_min.jpg';

const images = [
    {
        original: guellPark,
        thumbnail: guellPark1,
    },
    {
        original: fountain,
        thumbnail: fountain1,
    },
    {
        original: campNou,
        thumbnail: campNou1,
    },
    {
        original: barcelonaHouse,
        thumbnail: barcelonaHouse1,
    },
    {
        original: casaMila,
        thumbnail: casaMila1,
    },
    {
        original: barcelonaGate,
        thumbnail: barcelonaGate1,
    },
];

class SpainGallery extends Component {
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

export default SpainGallery;


