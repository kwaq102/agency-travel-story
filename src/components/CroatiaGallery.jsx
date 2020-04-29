import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import dubrovnicRestaurant from '../img/croatia/dubrovnicRestaurant.jpg';
import dubrovnicRestaurant1 from '../img/croatia/dubrovnicRestaurant_min.jpg';
import dubrovnikCity from '../img/croatia/dubrovnikCity.jpg';
import dubrovnikCity1 from '../img/croatia/dubrovnikCity_min.jpg';
import dubrovnikRoofs from '../img/croatia/dubrovnikRoofs.jpg';
import dubrovnikRoofs1 from '../img/croatia/dubrovnikRoofs_min.jpg';
import plitviceLakes from '../img/croatia/plitviceLakes.jpg';
import plitviceLakes1 from '../img/croatia/plitviceLakes_min.jpg';
import split from '../img/croatia/split.jpg';
import split1 from '../img/croatia/split_min.jpg';
import trogirCity from '../img/croatia/trogirCity.jpg';
import trogirCity1 from '../img/croatia/trogirCity_min.jpg';
import vespa from '../img/croatia/vespa.jpg';
import vespa1 from '../img/croatia/vespa_min.jpg';
import zadar from '../img/croatia/zadar.jpg';
import zadar1 from '../img/croatia/zadar_min.jpg';

const images = [
    {
        original: dubrovnicRestaurant,
        thumbnail: dubrovnicRestaurant1,
    },
    {
        original: dubrovnikCity,
        thumbnail: dubrovnikCity1,
    },
    {
        original: dubrovnikRoofs,
        thumbnail: dubrovnikRoofs1,
    },
    {
        original: plitviceLakes,
        thumbnail: plitviceLakes1,
    },
    {
        original: split,
        thumbnail: split1,
    },
    {
        original: trogirCity,
        thumbnail: trogirCity1,
    },
    {
        original: vespa,
        thumbnail: vespa1,
    },
    {
        original: zadar,
        thumbnail: zadar1,
    },
];

class CroatiaGallery extends Component {
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

export default CroatiaGallery;


