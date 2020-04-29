import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';


import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import apostle from '../../img/vienna/apostle.jpg';


const images = [
    {
        original: apostle,
        thumbnail: apostle1,
    },
];

class ViennaGallery extends Component {
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

export default ViennaGallery;


