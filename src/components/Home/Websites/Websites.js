import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import WebLogo from '../WebLogo/WebLogo';
import './Websites.css';


const webData = [
    {
        img: slack,
    },
    {
        img: google,
    },
    {
        img: uber,
    },
    {
        img: netflix,
    },
    {
        img: airbnb,
    },
];

const Websites = () => {
    return (
        <section className=" web-section d-flex justify-content-center mt-5 pt-5">
            <div className="w-80 row websites">
            <div className="card-deck">
            {
                webData.map(web => <WebLogo web={web}></WebLogo>)
            }
            </div>
            </div>
        </section>
    );
};

export default Websites;