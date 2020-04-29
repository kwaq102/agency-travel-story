import React, { Component } from 'react';
import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';
import ImageGallery from 'react-image-gallery';


import aragon from '../img/footstepsMary/aragon.jpg';
import aragon1 from '../img/footstepsMary/aragon_min.jpg';
import avignon from '../img/footstepsMary/avignon.jpg';
import avignon1 from '../img/footstepsMary/avignon_min.jpg';
import city from '../img/footstepsMary/city.jpg';
import city1 from '../img/footstepsMary/city_min.jpg';
import laSalette from '../img/footstepsMary/laSalette.jpg';
import laSalette1 from '../img/footstepsMary/laSalette_min.jpg';
import lourdesChurch from '../img/footstepsMary/lourdesChurch.jpg';
import lourdesChurch1 from '../img/footstepsMary/lourdesChurch_min.jpg';
import salamanca from '../img/footstepsMary/salamanca.jpg';
import salamanca1 from '../img/footstepsMary/salamanca_min.jpg';

const images = [
    {
        original: aragon,
        thumbnail: aragon1,
    },
    {
        original: avignon,
        thumbnail: avignon1,
    },
    {
        original: city,
        thumbnail: city1,
    },
    {
        original: laSalette,
        thumbnail: laSalette1,
    },
    {
        original: lourdesChurch,
        thumbnail: lourdesChurch1,
    },
    {
        original: salamanca,
        thumbnail: salamanca1,
    },
]

class FootstepsMaryGallery extends Component {
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

export default FootstepsMaryGallery;