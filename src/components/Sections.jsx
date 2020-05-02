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
import ThemedTrips from './ThemedTrips'


const Sections = () => {
    return (
        <>
            <div>
                <AboutUs />
                <Offer />
                <Tours />
                <Pilgrimage />
                <ThemedTrips />
                <CityBreak />
                <Camp />
                <Slogan />
                <WhyUs />
                <OurTeam />
            </div>
        </>
    );
}

export default Sections;
