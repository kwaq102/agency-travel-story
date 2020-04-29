import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import '../../styles/gallery.scss';

import belvedere from '../../img/vienna/belvedere.jpg';
import belvedere1 from '../../img/vienna/belvedere_min.jpg';
import carriargeHorse from '../../img/vienna/carriargeHorse.jpg';
import carriargeHorse1 from '../../img/vienna/carriargeHorse_min.jpg';
import cathedral from '../../img/vienna/cathedral.jpg';
import cathedral1 from '../../img/vienna/cathedral_min.jpg';
import palace from '../../img/vienna/palace.jpg';
import palace1 from '../../img/vienna/palace_min.jpg';
import prater from '../../img/vienna/prater.jpg';
import prater1 from '../../img/vienna/prater_min.jpg';
import viennaPalace from '../../img/vienna/viennaPalace.jpg';
import viennaPalace1 from '../../img/vienna/viennaPalace_min.jpg';


const images = [
    {
        original: belvedere,
        thumbnail: belvedere1,
    },
    {
        original: carriargeHorse,
        thumbnail: carriargeHorse1,
    },
    {
        original: cathedral,
        thumbnail: cathedral1,
    },
    {
        original: palace,
        thumbnail: palace1,
    },
    {
        original: prater,
        thumbnail: prater1,
    },
    {
        original: viennaPalace,
        thumbnail: viennaPalace1,
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


