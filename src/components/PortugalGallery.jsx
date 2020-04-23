import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';
import ImageGallery from 'react-image-gallery';

import ironBridge from '../img/portugal/ironBridge.jpg';
import ironBridge1 from '../img/portugal/ironBridge_min.jpg';
import lisbon from '../img/portugal/lisbon.jpg';
import lisbon1 from '../img/portugal/lisbon_min.jpg';
import porto from '../img/portugal/porto.jpg';
import porto1 from '../img/portugal/porto_min.jpg';
import portugal from '../img/portugal/portugal.jpg';
import portugal1 from '../img/portugal/portugal_min.jpg';
import tower from '../img/portugal/tower.jpg';
import tower1 from '../img/portugal/tower_min.jpg';



const images = [
    {
        original: ironBridge,
        thumbnail: ironBridge1,
        thumbnailTitle: "Żelazy most",
        description: "Żelazy most",
    },
    {
        original: lisbon,
        thumbnail: lisbon1,
        thumbnailTitle: "Lizbona",
        description: "Lizbona",
    },
    {
        original: porto,
        thumbnail: porto1,
        thumbnailTitle: "Porto",
        description: "Porto",
    },
    {
        original: portugal,
        thumbnail: portugal1,
        thumbnailTitle: "Zamek Sintra",
        description: "Zamek Sintra",
    },
    {
        original: tower,
        thumbnail: tower1,
        thumbnailTitle: "Zamek w Belem",
        description: "Zamek w Belem",
    },
]

class PortugalGallery extends Component {
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

export default PortugalGallery;