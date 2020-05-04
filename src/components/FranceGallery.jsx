import React, { Component } from 'react';

import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../styles/gallery.scss';

import ImageGallery from 'react-image-gallery';

import avignon from '../img/france/avignon.jpg';
import avignon1 from '../img/france/avignon_min.jpg';
import carcassonne from '../img/france/carcassonne.jpg';
import carcassonne1 from '../img/france/carcassonne_min.jpg';
import houses from '../img/france/houses.jpg';
import houses1 from '../img/france/houses_min.jpg';
import monaco from '../img/france/monaco.jpg';
import monaco1 from '../img/france/monaco_min.jpg';
import monacoByNight from '../img/france/monacoByNight.jpg';
import monacoByNight1 from '../img/france/monacoByNight_min.jpg';
import monacoPalace from '../img/france/monacoPalace.jpg';
import monacoPalace1 from '../img/france/monacoPalace_min.jpg';
import nizza from '../img/france/nizza.jpg';
import nizza1 from '../img/france/nizza_min.jpg';
import pontDelArtuby from '../img/france/pontDelArtuby.jpg';
import pontDelArtuby1 from '../img/france/pontDelArtuby_min.jpg';
import reims from '../img/france/reims.jpg';
import reims1 from '../img/france/reims_min.jpg';
import verdon from '../img/france/verdon.jpg';
import verdon1 from '../img/france/verdon_min.jpg';


const images = [
    {
        original: avignon,
        thumbnail: avignon1
    },
    {
        original: carcassonne,
        thumbnail: carcassonne1
    },
    {
        original: houses,
        thumbnail: houses1
    },
    {
        original: monaco,
        thumbnail: monaco1
    },
    {
        original: monacoByNight,
        thumbnail: monacoByNight1
    },
    {
        original: monacoPalace,
        thumbnail: monacoPalace1
    },
    {
        original: nizza,
        thumbnail: nizza1
    },
    {
        original: pontDelArtuby,
        thumbnail: pontDelArtuby1
    },
    {
        original: reims,
        thumbnail: reims1
    },
    {
        original: verdon,
        thumbnail: verdon1
    },
]


class FranceGallery extends Component {
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

export default FranceGallery;