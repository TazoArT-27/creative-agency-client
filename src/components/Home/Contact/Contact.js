import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       
           <section className="contact-container row align-items-center">
            <div className="contact-text col-md-4 offset-md-1">
                <h1>Let us handle your <br/> project, professionally</h1>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="contact-form col-md-6 mt-5 pt-5">
            <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your email address"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your name/ company's name"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button style={{backgroundColor: 'black', color: 'white'}} type="button" className="btn btn-brand px-5"> Send </button>
                    </div>
                   </form>
            </div>
        </section>
       
    );
};

export default Contact;