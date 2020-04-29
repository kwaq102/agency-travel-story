import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import biskupin from '../img/piastowie/biskupin.jpg';
import biskupin1 from '../img/piastowie/biskupin_min.jpg';
import gniezno from '../img/piastowie/gniezno.jpg';
import gniezno1 from '../img/piastowie/gniezno_min.jpg';
import gnieznoChurch from '../img/piastowie/gnieznoChurch.jpg';
import gnieznoChurch1 from '../img/piastowie/gnieznoChurch_min.jpg';
import poznan from '../img/piastowie/poznan.jpg';
import poznan1 from '../img/piastowie/poznan_min.jpg';
import poznanOldTown from '../img/piastowie/poznanOldTown.jpg';
import poznanOldTown1 from '../img/piastowie/poznanOldTown_min.jpg';


const images = [
    {
        original: biskupin,
        thumbnail: biskupin1,
    },
    {
        original: gniezno,
        thumbnail: gniezno1,
    },
    {
        original: gnieznoChurch,
        thumbnail: gnieznoChurch1,
    },
    {
        original: poznan,
        thumbnail: poznan1,
    },
    {
        original: poznanOldTown,
        thumbnail: poznanOldTown1,
    },
];

class PiastowieGallery extends Component {
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

export default PiastowieGallery;


