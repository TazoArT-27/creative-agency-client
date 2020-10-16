import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import ReviewForm from '../ReviewForm/ReviewForm';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div>
            <section>
            <div className="container-fluid row">
               <div className="col-md-2">
               <Link to="/" className="">
               <img className="img-box mt-4" src={Logo} alt=""/>
               </Link>
                   <Sidebar></Sidebar>
               </div>
               <div className="col-md-10" style={{backgroundColor: '#F4F7FC'}}>
                   <h5 className="mt-4">Order</h5>
                   
                   <div className="mt-5 pt-3">
                   <ReviewForm></ReviewForm>
                   </div>
                   
               </div>
           </div>
        </section>
        </div>
    );
};

export default Review;