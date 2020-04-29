import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';
import ImageGallery from 'react-image-gallery';


import westerplatte from '../img/sea/westerplatte1.jpg';
import westerplatte1 from '../img/sea/westerplatte1_min.jpg';
import westerplatteFar from '../img/sea/westerplatte.jpg';
import westerplatteFar1 from '../img/sea/westerplatte_min.jpg';
import gdanskChurch from '../img/sea/gdanskChurch.jpg';
import gdanskChurch1 from '../img/sea/gdanskChurch_min.jpg';
import dunes from '../img/sea/dunes.jpg';
import dunes1 from '../img/sea/dunes_min.jpg';
import gdanskCrane from '../img/sea/gdanskCrane.jpg';
import gdanskCrane1 from '../img/sea/gdanskCrane_min.jpg';
import gdanskGate from '../img/sea/gdanskGate.jpg';
import gdanskGate1 from '../img/sea/gdanskGate_min.jpg';
import kosciuszkoSquare from '../img/sea/kosciuszkoSquare.jpg';
import kosciuszkoSquare1 from '../img/sea/kosciuszkoSquare_min.jpg';
import leba from '../img/sea/leba.jpg';
import leba1 from '../img/sea/leba_min.jpg';
import neptun from '../img/sea/neptun.jpg';
import neptun1 from '../img/sea/neptun_min.jpg';
import ship from '../img/sea/ship.jpg';
import ship1 from '../img/sea/ship_min.jpg';


const images = [
    {
        original: westerplatte,
        thumbnail: westerplatte1,
    },
    {
        original: westerplatteFar,
        thumbnail: westerplatteFar1,
    },
    {
        original: gdanskChurch,
        thumbnail: gdanskChurch1,
    },
    {
        original: dunes,
        thumbnail: dunes1,
    },
    {
        original: gdanskCrane,
        thumbnail: gdanskCrane1,
    },
    {
        original: gdanskGate,
        thumbnail: gdanskGate1,
    },
    {
        original: kosciuszkoSquare,
        thumbnail: kosciuszkoSquare1,
    },
    {
        original: leba,
        thumbnail: leba1,
    },
    {
        original: neptun,
        thumbnail: neptun1,
    },
    {
        original: ship,
        thumbnail: ship,
    },

];

class SeaGallery extends Component {
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

export default SeaGallery;