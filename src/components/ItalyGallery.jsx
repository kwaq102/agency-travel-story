import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import assisi from '../img/italy/assisi.jpg';
import assisi1 from '../img/italy/assisi_min.jpg';
import assisiStreet from '../img/italy/assisiStreet.jpg';
import assisiStreet1 from '../img/italy/assisiStreet_min.jpg';
import capri from '../img/italy/capri.jpg';
import capri1 from '../img/italy/capri_min.jpg';
import cathedral from '../img/italy/cathedral.jpg';
import cathedral1 from '../img/italy/cathedral_min.jpg';
import florence from '../img/italy/florence.jpg';
import florence1 from '../img/italy/florence_min.jpg';
import florenceBridge from '../img/italy/florenceBridge.jpg';
import florenceBridge1 from '../img/italy/florenceBridge_min.jpg';
import italy from '../img/italy/italy.jpg';
import italy1 from '../img/italy/italy_min.jpg';
import neapol from '../img/italy/neapol.jpg';
import neapol1 from '../img/italy/neapol_min.jpg';
import rome from '../img/italy/rome.jpg';
import rome1 from '../img/italy/rome_min.jpg';
import sanMarino from '../img/italy/sanMarino.jpg';
import sanMarino1 from '../img/italy/sanMarino_min.jpg';
import venice from '../img/italy/venice.jpg';
import venice1 from '../img/italy/venice_min.jpg';


const images = [
    {
        original: assisi,
        thumbnail: assisi1
    },
    {
        original: assisiStreet,
        thumbnail: assisiStreet1
    },
    {
        original: capri,
        thumbnail: capri1
    },
    {
        original: cathedral,
        thumbnail: cathedral1
    },
    {
        original: florence,
        thumbnail: florence1
    },
    {
        original: florenceBridge,
        thumbnail: florenceBridge1
    },
    {
        original: italy,
        thumbnail: italy1
    },
    {
        original: neapol,
        thumbnail: neapol1
    },
    {
        original: rome,
        thumbnail: rome1
    },
    {
        original: sanMarino,
        thumbnail: sanMarino1
    }, {
        original: venice,
        thumbnail: venice1
    },
]


class FranceGallery extends Component {
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

export default FranceGallery;