import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../images/logos/logo.png';
import ProjectByDate from '../ProjectByDate/ProjectByDate';
import Sidebar from '../Sidebar/Sidebar';
import UsersProject from '../UsersProject/UsersProject';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const UsersList = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
    const [serviceList, setServiceList] = useState([]);

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [projects, setProjects] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);

        fetch('http://localhost:5000/projectByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
             body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        },[selectedDate])
        .then(res => res.json())
        .then(data => setProjects(data))
    }

    return (
        <section>
            <div className="container-fluid row">
            <div className="col-md-2">
            <Link to="/" className="">
            <img className="mt-4" style={{height: '50px'}} src={Logo} alt=""/>
            </Link>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-4" style={{backgroundColor: '#F4F7FC'}}>
            <Calendar
                onChange={handleDateChange}
                value={new Date()}
                className="calender pt-5 mt-5"
            />
            </div>
            <div className="col-md-5" style={{backgroundColor: '#F4F7FC'}}>
                <h5 className="mt-4">Order</h5>
                {loggedInUser.email ? (
						<div>
							<img src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name.split(" ").slice(0, 1)}</span>
						</div>
					) : (
						<div>
							<i className="fas fa-user"></i>
							<span>User</span>
						</div>
					)}
                
                <div className="mt-5 pt-3">
                        
								 <UsersProject projects={projects} ></UsersProject>
								
                    
                </div>
                
            </div>
        </div>
        </section>
    );
};

export default UsersList;