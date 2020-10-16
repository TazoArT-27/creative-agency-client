import React, { useContext, useEffect, useState } from 'react';
import './BusinessInfo.css';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import InfoCard from '../InfoCard/InfoCard';
import '../InfoCard/InfoCard.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';



const infoData = [
    {
        id:1,
        img: service1,
        title: 'Web & Mobile Design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',
    },
    {
        id:2,
        img: service2,
        title: 'Graphic Design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    },
    {
        id:3,
        img: service3,
        title: 'Web Development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    },
];



const BusinessInfo = () => {

    const [servicess, setServicess] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/servicess')
        .then(res => res.json())
        .then(data => setServicess(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mt-5 pt-5'>Provide awesome <span style={{color: '#7AB259'}}>services</span></h1>
            <section className="d-flex justify-content-center">
                <div className="w-75 row">
                <div id="info" class="card-deck py-5 frame">
                <Link className="row" to='/purchase' style={{outline: 'none', textDecoration: 'none'}}>
                {servicess.map((service) => (
                                <InfoCard service={service} key={service._id}></InfoCard>
                            ))}
                </Link>
                </div>
                </div>
           </section>
        </div>
    );
};

export default BusinessInfo;