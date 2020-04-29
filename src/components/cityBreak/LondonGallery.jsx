import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import bigBen from '../../img/london/bigBen.jpg';
import bigBen1 from '../../img/london/bigBen_min.jpg';
import buckinghamPalace from '../../img/london/buckinghamPalace.jpg';
import buckinghamPalace1 from '../../img/london/buckinghamPalace_min.jpg';
import london from '../../img/london/london.jpg';
import london1 from '../../img/london/london_min.jpg';
import phoneBooth from '../../img/london/phoneBooth.jpg';
import phoneBooth1 from '../../img/london/phoneBooth_min.jpg';
import towerBridge from '../../img/london/towerBridge.jpg';
import towerBridge1 from '../../img/london/towerBridge_min.jpg';


const images = [
    {
        original: bigBen,
        thumbnail: bigBen1,
    },
    {
        original: buckinghamPalace,
        thumbnail: buckinghamPalace1,
    },
    {
        original: london,
        thumbnail: london1,
    },
    {
        original: phoneBooth,
        thumbnail: phoneBooth1,
    },
    {
        original: towerBridge,
        thumbnail: towerBridge1,
    },
];

class LondonGallery extends Component {
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

export default LondonGallery;


