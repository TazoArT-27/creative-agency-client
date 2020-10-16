import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import ListBar from '../../Order/ListBar/ListBar';
import ServiceForm from '../ServiceForm/ServiceForm';


const AddService = () => {
    const [addService, setAddService] = useState({});
    const [file, setFile] = useState(null);
    
    const handleBlur = (e) => {
        const newService = {...addService};
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    }
   
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', addService.title)
        formData.append('description', addService.description)
      
        fetch('http://localhost:5000/addAService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
      }
    
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
                    
                            <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Service Title</label>
                                <input onBlur={handleBlur} name="title"  type="text" class="input-box form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <textarea onBlur={handleBlur} name="description" class="input-box form-control" rows="5"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlFile1">Icon</label>
                                <input onChange={handleFileChange} type="file" class="form-control-file" id="exampleFormControlFile1"/>
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                
                        </div>
                        
                    </div>
            </div>
        </section>
    );
};

export default AddService;