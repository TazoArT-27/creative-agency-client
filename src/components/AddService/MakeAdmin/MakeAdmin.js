import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import ListBar from '../../Order/ListBar/ListBar';
import AdminForm from '../AdminForm/AdminForm';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://infinite-waters-86827.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                alert('Admin added successfully');
            })
    };
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
                <h4 className="mt-4">Add Services</h4>
                
                <div className="mt-5 pt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input name="email" ref={register({ required: true })} placeholder="jon@gmail.com" type="email" class="input-box form-control"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                </div>
                
            </div>
            </div>
        </section>
    );
};

export default MakeAdmin;