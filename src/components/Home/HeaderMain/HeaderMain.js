import React from 'react';
import frame from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row align-items-center">
            <div className="col-md-4 offset-md-1 description-part">
                <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quia nemo magnam amet quisquam perferendis.</p>
                <button style={{backgroundColor: 'black', color: 'white'}} className="btn">Hire Us</button> 
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;