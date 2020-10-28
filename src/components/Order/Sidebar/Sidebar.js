import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag, faCommentDots, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect( () => {
            fetch('https://infinite-waters-86827.herokuapp.com/isAdmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: loggedInUser.email})
            })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    })
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to="/order" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-2">
                        <FontAwesomeIcon icon={faShoppingCart} /><span className='ml-3'>Order</span> 
                    </Link>
                    <Link to="/usersList" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-2">
                        <FontAwesomeIcon icon={faShoppingBag} /><span className='ml-3'>List</span> 
                    </Link>
                    <Link to="/review" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-2">
                        <FontAwesomeIcon icon={faCommentDots} /><span className='ml-3'>Review</span> 
                    </Link>
                    {
                        isAdmin && 
                        <Link to="/makeAdmin" style={{color: "#111430", textDecoration: "none"}} className="d-flex align-items-center mt-2">
                        <FontAwesomeIcon icon={faUserPlus} /><span className='ml-3'>Admin</span> 
                        </Link>
                    }
                </li>
                
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon  /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;