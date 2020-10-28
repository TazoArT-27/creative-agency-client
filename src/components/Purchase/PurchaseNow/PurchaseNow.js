import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import  './PurchaseNow.css';

const PurchaseNow = ({date}) => {
    const [servicess, setServicess] = useState([])
    useEffect( () => {
        fetch('https://infinite-waters-86827.herokuapp.com/servicess')
        .then(res => res.json())
        .then(data => setServicess(data))
    }, [])
    return (
        <div>
            <h1 className='text-center mt-5 pt-5'>Services available on<span style={{color: '#7AB259'}}> {date.toDateString()}</span></h1>
            <section className="d-flex justify-content-center">
                <div className="w-75 row">
                <Link className="" to='/order' style={{outline: 'none', textDecoration: 'none'}}>
                <div id="info" class="card-deck py-5 frame">
                {servicess.map((service) => (
                                <PurchaseCard date={date} service={service} key={service._id}></PurchaseCard>
                            ))}
                </div>
                </Link>
                </div>
           </section>
        </div>
    );
};

export default PurchaseNow;