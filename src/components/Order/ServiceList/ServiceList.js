import React, { useContext, useEffect, useState } from 'react';
import ServicesList from '../ServicesList/ServicesList';
import Logo from '../../../images/logos/logo.png';
import ListBar from '../ListBar/ListBar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServiceList = () => {


    return (
        <section>
            <div className="container-fluid row">
            <div className="col-md-2">
            <Link to="/" className="">
            <img className="img-box mt-4" src={Logo} alt=""/>
            </Link>
                <ListBar></ListBar>
            </div>
            <div className="col-md-10" style={{backgroundColor: '#F4F7FC'}}>
                <h5 className="mt-4">Order</h5>
                <div className="mt-5 pt-3">
                    <ServicesList></ServicesList>
                </div>
                
            </div>
        </div>
        </section>
    );
};

export default ServiceList;