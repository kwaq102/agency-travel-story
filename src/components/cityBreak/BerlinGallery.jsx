import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import berlinCathedral from '../../img/berlin/berlinCathedral.jpg';
import berlinCathedral1 from '../../img/berlin/berlinCathedral_min.jpg';
import berlinWall from '../../img/berlin/berlinWall.jpg';
import berlinWall1 from '../../img/berlin/berlinWall_min.jpg';
import bundestag from '../../img/berlin/bundestag.jpg';
import bundestag1 from '../../img/berlin/bundestag_min.jpg';
import columnSiegessaule from '../../img/berlin/columnSiegessaule.jpg';
import columnSiegessaule1 from '../../img/berlin/columnSiegessaule_min.jpg';
import gateBrandenburg from '../../img/berlin/gateBrandenburg.jpg';
import gateBrandenburg1 from '../../img/berlin/gateBrandenburg_min.jpg';


const images = [
    {
        original: berlinCathedral,
        thumbnail: berlinCathedral1,
    },
    {
        original: berlinWall,
        thumbnail: berlinWall1,
    },
    {
        original: bundestag,
        thumbnail: bundestag1,
    },
    {
        original: columnSiegessaule,
        thumbnail: columnSiegessaule1,
    },
    {
        original: gateBrandenburg,
        thumbnail: gateBrandenburg1,
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


