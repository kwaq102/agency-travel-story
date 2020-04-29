import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import basilica from '../../img/paris/basilica.jpg';
import basilica1 from '../../img/paris/basilica_min.jpg';
import eiffelTower from '../../img/paris/eiffelTower.jpg';
import eiffelTower1 from '../../img/paris/eiffelTower_min.jpg';
import louvre from '../../img/paris/louvre.jpg';
import louvre1 from '../../img/paris/louvre_min.jpg';
import moulinRouge from '../../img/paris/moulinRouge.jpg';
import moulinRouge1 from '../../img/paris/moulinRouge_min.jpg';
import paris from '../../img/paris/paris.jpg';
import paris1 from '../../img/paris/paris_min.jpg';
import wine from '../../img/paris/wine.jpg';
import wine1 from '../../img/paris/wine_min.jpg';


const images = [
    {
        original: basilica,
        thumbnail: basilica1,
    },
    {
        original: eiffelTower,
        thumbnail: eiffelTower1,
    },
    {
        original: louvre,
        thumbnail: louvre1,
    },
    {
        original: moulinRouge,
        thumbnail: moulinRouge1,
    },
    {
        original: paris,
        thumbnail: paris1,
    },
    {
        original: wine,
        thumbnail: wine1
    },
];

class LondonGallery extends Component {
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

export default LondonGallery;


