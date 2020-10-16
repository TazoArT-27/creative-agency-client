import React, { useState } from 'react';
import BusinessInfo from '../../Home/BusinessInfo/BusinessInfo';
import Navbar from '../../Home/Navbar/Navbar';
import PurchaseHeader from '../PurchaseHeader/PurchaseHeader';
import PurchaseNow from '../PurchaseNow/PurchaseNow';

const Purchase = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        //console.log(date)
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <PurchaseHeader handleDateChange={handleDateChange} />
            <PurchaseNow date={selectedDate}/>
        </div>
    );
};

export default Purchase;