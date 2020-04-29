import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';


import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import charlesBridge from '../../img/prague/charlesBridge.jpg';
import charlesBridge1 from '../../img/prague/charlesBridge_min.jpg';
import karolBridge from '../../img/prague/karolBridge.jpg';
import karolBridge1 from '../../img/prague/karolBridge_min.jpg';
import pragueCastle from '../../img/prague/pragueCastle.jpg';
import pragueCastle1 from '../../img/prague/pragueCastle_min.jpg';
import ancient from '../../img/prague/ancient.jpg';
import ancient1 from '../../img/prague/ancient_min.jpg';
import buildings from '../../img/prague/buildings.jpg';
import buildings1 from '../../img/prague/buildings_min.jpg';
import prague from '../../img/prague/prague.jpg';
import prague1 from '../../img/prague/prague_min.jpg';


const images = [
    {
        original: charlesBridge,
        thumbnail: charlesBridge1,
    },
    {
        original: karolBridge,
        thumbnail: karolBridge1,
    },
    {
        original: pragueCastle,
        thumbnail: pragueCastle1,
    },
    {
        original: ancient,
        thumbnail: ancient1,
    },
    {
        original: buildings,
        thumbnail: buildings1,
    },
    {
        original: prague,
        thumbnail: prague1,
    },

];

class PragueGallery extends Component {
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

export default PragueGallery;


