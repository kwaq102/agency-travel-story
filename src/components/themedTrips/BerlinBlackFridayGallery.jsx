import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import berlin from '../../img/berlinBlackFriday/berlin.jpg';
import berlin1 from '../../img/berlinBlackFriday/berlin_min.jpg';
import berlinCathedral from '../../img/berlinBlackFriday/berlinCathedral.jpg';
import berlinCathedral1 from '../../img/berlinBlackFriday/berlinCathedral_min.jpg';
import people from '../../img/berlinBlackFriday/people.jpg';
import people1 from '../../img/berlinBlackFriday/people_min.jpg';
import shopping from '../../img/berlinBlackFriday/shopping.jpg';
import shopping1 from '../../img/berlinBlackFriday/shopping_min.jpg';
import woman from '../../img/berlinBlackFriday/woman.jpg';
import woman1 from '../../img/berlinBlackFriday/woman_min.jpg';

const images = [
    {
        original: berlin,
        thumbnail: berlin1,
    },
    {
        original: berlinCathedral,
        thumbnail: berlinCathedral1,
    },
    {
        original: people,
        thumbnail: people1,
    },
    {
        original: shopping,
        thumbnail: shopping1,
    },
    {
        original: woman,
        thumbnail: woman1,
    },
];

class BerlinBlackFridayGallery extends Component {
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

export default BerlinBlackFridayGallery;


