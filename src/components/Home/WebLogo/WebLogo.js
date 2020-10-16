import React from 'react';
import './WebLogo.css';
const WebLogo = ({web}) => {
    return (
        <div className="card-body webLogo">
            <div className="col-md-1">

            </div>
            <div className='col-md-2'>
            <div className='row mr-5 ml-2'>
                
                <div>
                <img style={{height:'60px'}} src={web.img} alt=""/>
                </div>
            </div>
            <div className="col-md-1">
                
            </div>
            
            </div>
        </div>
    );
};

export default WebLogo;