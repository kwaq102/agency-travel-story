import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import arbutus from '../../img/madrid/arbutus.jpg';
import arbutus1 from '../../img/madrid/arbutus_min.jpg';
import madrid from '../../img/madrid/madrid.jpg';
import madrid1 from '../../img/madrid/madrid_min.jpg';
import madridRoad from '../../img/madrid/madridRoad.jpg';
import madridRoad1 from '../../img/madrid/madridRoad_min.jpg';
import plazaMayor from '../../img/madrid/plazaMayor.jpg';
import plazaMayor1 from '../../img/madrid/plazaMayor_min.jpg';
import royalPalace from '../../img/madrid/royalPalace.jpg';
import royalPalace1 from '../../img/madrid/royalPalace_min.jpg';


const images = [
    {
        original: arbutus,
        thumbnail: arbutus1,
    },
    {
        original: madrid,
        thumbnail: madrid1,
    },
    {
        original: madridRoad,
        thumbnail: madridRoad1,
    },
    {
        original: plazaMayor,
        thumbnail: plazaMayor1,
    },
    {
        original: royalPalace,
        thumbnail: royalPalace1,
    },
];

class MadridGallery extends Component {
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

export default MadridGallery;


