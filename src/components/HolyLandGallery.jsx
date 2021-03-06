import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import church from '../img/holyLand/church.jpg';
import church1 from '../img/holyLand/church_min.jpg';
import goldenGate from '../img/holyLand/goldenGate.jpg';
import goldenGate1 from '../img/holyLand/goldenGate_min.jpg';
import jerusalem from '../img/holyLand/jerusalem.jpg';
import jerusalem1 from '../img/holyLand/jerusalem_min.jpg';
import jerusalemTemple from '../img/holyLand/jerusalemTemple.jpg';
import jerusalemTemple1 from '../img/holyLand/jerusalemTemple_min.jpg';
import oliveTrees from '../img/holyLand/oliveTrees.jpg';
import oliveTrees1 from '../img/holyLand/oliveTrees_min.jpg';
import viaDolorosa from '../img/holyLand/viaDolorosa.jpg';
import viaDolorosa1 from '../img/holyLand/viaDolorosa_min.jpg';
import wailingWall from '../img/holyLand/wailingWall.jpg';
import wailingWall1 from '../img/holyLand/wailingWall_min.jpg';


const images = [
    {
        original: goldenGate,
        thumbnail: goldenGate1,
    },
    {
        original: jerusalem,
        thumbnail: jerusalem1,
    },
    {
        original: church,
        thumbnail: church1,
    },
    {
        original: jerusalemTemple,
        thumbnail: jerusalemTemple1,
    },
    {
        original: oliveTrees,
        thumbnail: oliveTrees1,
    },
    {
        original: viaDolorosa,
        thumbnail: viaDolorosa1,
    },
    {
        original: wailingWall,
        thumbnail: wailingWall1,
    },
]

class HolyLandGallery extends Component {
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

export default HolyLandGallery;