import React from 'react';
import { useForm } from "react-hook-form";
const OrderForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
        //console.log(data);
        
        fetch('http://localhost:5000/addProjects', { 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Successfully added');
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group pl-3">
                <input ref={register({ required: true })} name="name"  style={{width: '630px', height: '55px', border: '1px solid white'}} placeholder="Your name/ company's name" type="text" class="form-control text-secondary"/>
                 {errors.name && <span className="text-danger">name is required</span>}            
            </div>
            <div class="form-group pl-3">
                <input ref={register({ required: true })} name="email" style={{width: '630px', height: '55px', border: '1px solid white'}} placeholder="Your email address" type="text" class="form-control"/>
                 {errors.email && <span className="text-danger">email is required</span>}            
            </div>
            <div class="form-group pl-3">
                <input ref={register({ required: true })} name="project" style={{width: '630px', height: '55px', border: '1px solid white'}} placeholder="Graphic Design" type="text" class="form-control"/>
                 {errors.name && <span className="text-danger">project is required</span>}            
            </div>
            <div class="form-group pl-3">
                <textarea ref={register({ required: true })} name="details" style={{width: '630px', border: '1px solid white'}} placeholder="Project Details" class="form-control" rows="5"></textarea>
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
    );
};

export default OrderForm;