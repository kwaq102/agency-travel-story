import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import redWine from '../../img/wine/redWine.jpg';
import redWine1 from '../../img/wine/redWine_min.jpg';
import whiteWine from '../../img/wine/whiteWine.jpg';
import whiteWine1 from '../../img/wine/whiteWine_min.jpg';
import wine from '../../img/wine/wine.jpg';
import wine1 from '../../img/wine/wine_min.jpg';
import paris from '../../img/wine/paris.jpg';
import paris1 from '../../img/wine/paris_min.jpg';
import eiffelTower from '../../img/wine/eiffelTower.jpg';
import eiffelTower1 from '../../img/wine/eiffelTower_min.jpg';

const images = [
    {
        original: redWine,
        thumbnail: redWine1,
    },
    {
        original: whiteWine,
        thumbnail: whiteWine1,
    },
    {
        original: wine,
        thumbnail: wine1,
    },
    {
        original: paris,
        thumbnail: paris1,
    },
    {
        original: eiffelTower,
        thumbnail: eiffelTower1,
    },
];

class ParisWineGallery extends Component {
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

export default ParisWineGallery;


