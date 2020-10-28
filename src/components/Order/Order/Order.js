import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../../images/logos/logo.png';
import Sidebar from '../Sidebar/Sidebar';
import OrderForm from '../OrderForm/OrderForm'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from "../../../App";
import { useForm } from 'react-hook-form';
import './Order.css';

const Order = () => {
    const { _id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useState([]);
    

    

    useEffect(() => {
		fetch("https://infinite-waters-86827.herokuapp.com/home/services")
			.then((res) => res.json())
			.then((data) => setSelectedService(data.find((item) => item._id === _id)));
    }, []);
    
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data =>{
        //console.log(data);
        data.created = new Date();
        fetch('https://infinite-waters-86827.herokuapp.com/addProjects', { 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data, {email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Successfully added');
            }
        })
    }
    return (
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
                   <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group pl-3">
                <input ref={register({ required: true })} name="name"   placeholder="Your name/ company's name" type="text" class="input-box form-control text-secondary"/>
                 {errors.name && <span className="text-danger">name is required</span>}            
            </div>
            <div class="form-group pl-3">
                <input ref={register({ required: true })} name="email"  placeholder="Your email address" type="text" class="input-box form-control"/>
                 {errors.email && <span className="text-danger">email is required</span>}            
            </div>
            <div class="form-group pl-3">
                <input ref={register({ required: true })} name="date"  placeholder="Enter project starting date ex. 2020-5-25T18:00:00.000Z(ISO date)" type="text" class="input-box form-control"/>
                 {errors.name && <span className="text-danger">date is required</span>}            
            </div>
            {/* <div class="form-group pl-3">
                <input ref={register({ required: true })} name="date" style={{width: '630px', height: '55px', border: '1px solid white'}} placeholder="Enter purchasing date" type="text" class="form-control"/>
                 {errors.name && <span className="text-danger">date is required</span>}            
            </div> */}
            <div class="form-group pl-3">
                <input ref={register({ required: true })} name="project"  placeholder="Graphic Design" type="text" class="input-box form-control"/>
                 {errors.name && <span className="text-danger">project is required</span>}            
            </div>
            <div class="form-group pl-3">
                <textarea ref={register({ required: true })} name="details"  placeholder="Project Details" class="input-box form-control" rows="5"></textarea>
                 {errors.name && <span className="text-danger">details is required</span>}            
            </div>

            <div style={{width: '630px',}} className="container-fluid row">
                <div className="col-md-6">
                    <div class="form-group">
                        <input ref={register({ required: true })} name="price" style={{width: '280px', height: '55px', border: '1px solid white'}} type="text" class="form-control" placeholder="Price"/>
                 {errors.name && <span className="text-danger">price is required</span>}                    
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="form-group">
                        <input style={{width: '280px', height: '55px', border: '1px solid white'}} type="file" placeholder="upload project file" class="form-control-file"/>
                    </div>
                </div>
            </div>
            
            
            
            <div className="form-group">
            <button type="submit" class="btn mx-5 px-5" style={{backgroundColor: '#111430', color: 'white'}}>Submit</button>
            </div>
            </form>
                   </div>
                   
               </div>
           </div>
        </section>
    );
};

export default Order;