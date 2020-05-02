import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import carousel from '../../img/fair/carousel.jpg';
import carousel1 from '../../img/fair/carousel_min.jpg';
import christmasMarket from '../../img/fair/christmasMarket.jpg';
import christmasMarket1 from '../../img/fair/christmasMarket_min.jpg';
import evening from '../../img/fair/evening.jpg';
import evening1 from '../../img/fair/evening_min.jpg';
import market from '../../img/fair/market.jpg';
import market1 from '../../img/fair/market_min.jpg';
import nuremberg from '../../img/fair/nuremberg.jpg';
import nuremberg1 from '../../img/fair/nuremberg_min.jpg';
import nutcracker from '../../img/fair/nutcracker.jpg';
import nutcracker1 from '../../img/fair/nutcracker_min.jpg';

const images = [
    {
        original: carousel,
        thumbnail: carousel1,
    },
    {
        original: christmasMarket,
        thumbnail: christmasMarket1,
    },
    {
        original: evening,
        thumbnail: evening1,
    },
    {
        original: market,
        thumbnail: market1,
    },
    {
        original: nuremberg,
        thumbnail: nuremberg1,
    },
    {
        original: nutcracker,
        thumbnail: nutcracker1,
    },
];

class FairGallery extends Component {
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

export default FairGallery;


