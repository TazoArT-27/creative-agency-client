import React from 'react';
import frame from '../../../images/logos/Frame.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './PurchaseNow.css';

const PurchaseHeader = ({handleDateChange}) => {
    
    return (
        <div>
            <main style={{height: '600px'}} className="row align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="ml-5 pl-1" style={{color: '#7AB259'}}>Purchase Now</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                    className="calender p-3"
                />
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
        </div>
    );
};

export default PurchaseHeader;