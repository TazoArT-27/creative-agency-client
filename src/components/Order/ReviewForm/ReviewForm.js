import React, { useState } from 'react';

const ReviewForm = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('designation', info.designation)
        formData.append('description', info.description)

        fetch('http://localhost:5000/addAReview', {
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
            <form onSubmit={handleSubmit}>
            <div class="form-group">
                <input onBlur={handleBlur} name="name" placeholder="Your name" type="text" class="input-box form-control"/>
            </div>
            <div class="form-group">
                <input onBlur={handleBlur} name="designation" placeholder="Company's name, designation" type="text" class="input-box form-control"/>
            </div>
            <div class="form-group">
                <textarea onBlur={handleBlur} name="description" type='text' placeholder="Description" class="input-box form-control"rows="5"></textarea>
            </div>
            <div class="form-group">
                <input onChange={handleFileChange} style={{width: '280px', height: '55px', border: '1px solid white'}} type="file" placeholder="upload project file" class="form-control-file"/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    );
};

export default ReviewForm;