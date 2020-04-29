import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import factory from '../img/lodz/factory.jpg';
import factory1 from '../img/lodz/factory_min.jpg';
import library from '../img/lodz/library.jpg';
import library1 from '../img/lodz/library_min.jpg';
import lodz from '../img/lodz/lodz.jpg';
import lodz1 from '../img/lodz/lodz_min.jpg';
import lodzCity from '../img/lodz/lodzCity.jpg';
import lodzCity1 from '../img/lodz/lodzCity_min.jpg';
import manufacture from '../img/lodz/manufacture.jpg';
import manufacture1 from '../img/lodz/manufacture_min.jpg';
import oldFactory from '../img/lodz/oldFactory.jpg';
import oldFactory1 from '../img/lodz/oldFactory_min.jpg';

const images = [
    {
        original: factory,
        thumbnail: factory1,
    },
    {
        original: library,
        thumbnail: library1,
    },
    {
        original: lodz,
        thumbnail: lodz1,
    },
    {
        original: lodzCity,
        thumbnail: lodzCity1,
    },
    {
        original: manufacture,
        thumbnail: manufacture1,
    },
    {
        original: oldFactory,
        thumbnail: oldFactory1,
    },
]


class LodzGallery extends Component {
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

export default LodzGallery;