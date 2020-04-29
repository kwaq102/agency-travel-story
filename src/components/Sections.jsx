import React from 'react';
import AboutUs from './AboutUs'
import Offer from './Offer'
import WhyUs from './WhyUs'
import Slogan from './Slogan'
import Tours from './Tours'
import Pilgrimage from './Pilgrimage'
import CityBreak from './CityBreak'
import Camp from './Camp'
import OurTeam from './OurTeam'


const Sections = () => {
    return (
        <>
            <div>
                <AboutUs />
                <Offer />
                <Tours />
                <Pilgrimage />
                <Camp />
                <CityBreak />
                <Slogan />
                <WhyUs />
                <OurTeam />
            </div>
        </>
    );
}

export default Sections;
