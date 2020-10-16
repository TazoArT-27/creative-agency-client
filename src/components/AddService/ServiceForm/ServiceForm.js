import React from 'react';


const ServiceForm = () => {
    return (
        <section>
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Service Title</label>
                <input style={{width: '630px', height: '55px', border: '1px solid white'}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description</label>
                <textarea style={{width: '630px', border: '1px solid white'}} class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <div className="form-group">
                <label for="exampleFormControlFile1">Icon</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    );
};

export default ServiceForm;