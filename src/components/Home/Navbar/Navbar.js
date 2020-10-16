import React from 'react';
import Logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
            <div className="container">
            <Link class="navbar-brand" to="/">
                <img style={{height: '40px'}} src={Logo} alt=""/>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <Link class="nav-link ml-5" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ml-5" to="/">Our Portfolio</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ml-5" to="/purchase">Purchase Now</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ml-5" to="/">Our Team</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link ml-5" to="/">Contact Us</Link>
                </li>
                <li class="nav-item ml-3">
                    <Link to="/login" style={{backgroundColor:'black', color:'white'}} className="btn px-5">Admin</Link>
                </li>
             </ul>
        </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;