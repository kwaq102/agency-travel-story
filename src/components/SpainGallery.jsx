import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/SpainGallery.scss';

import ImageGallery from 'react-image-gallery';

import sagrada from '../img/spain/sagrada.jpg';
import sagrada1 from '../img/spain/sagrada_min.jpg';
import paella from '../img/spain/paella.jpg';
import paella1 from '../img/spain/paella_min.jpg';
import spain from '../img/spain/spain.jpg';
import spain1 from '../img/spain/spain_min.jpg';
import valencia from '../img/spain/valencia.jpg';
import valencia1 from '../img/spain/valencia_min.jpg';
import windmills from '../img/spain/windmills.jpg';
import windmills1 from '../img/spain/windmills_min.jpg';




const images = [
    {
        original: sagrada,
        thumbnail: sagrada1,
    },
    {
        original: paella,
        thumbnail: paella1,
    },
    {
        original: spain,
        thumbnail: spain1,
    },
    {
        original: valencia,
        thumbnail: valencia1,
    },
    {
        original: windmills,
        thumbnail: windmills1,
    },
];

class SpainGallery extends Component {
    state = {
    }
    render() {
        return (
            <>
                <div className="spain-gallery">
                    <ImageGallery items={images}
                        showPlayButton={false}
                        thumbnailPosition='top' />
                </div>
            </>
        );
    }
}

export default SpainGallery;


