import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  
  const handleSubmit=(e) => {
    e.preventDefault();
    emailjs.sendForm('service_9k6epms', 'template_braozdc', formRef.current, 'user_m3cQzONBSi2qJo5DtziUP')
    .then((result) => {
        console.log(result.text);
         setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="page-section"  style={{height:'100vh'}}>
            <div className="container">
               
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
           
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                       
                        <form ref={formRef} onSubmit={handleSubmit}>
                           
                            <div className="form-floating mb-3">
                                <input className="form-control" type="text" placeholder="Enter your name..." name="user_name"  />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" >A name is required.</div>
                            </div>
                          
                            <div className="form-floating mb-3">
                                <input className="form-control"  type="email" placeholder="name@example.com" name="user_email"  />
                                <label for="email">Email address</label>
                                <div className="invalid-feedback" >An email is required.</div>
                                <div className="invalid-feedback" >Email is not valid.</div>
                            </div>
                           
                            <div className="form-floating mb-3">
                                <input className="form-control"  type="text" placeholder="Subject" name="user_subject" />
                                <label for="phone">Subject</label>
                                <div className="invalid-feedback" >A phone number is required.</div>
                            </div>
                            
                            <div className="form-floating mb-3">
                                <textarea className="form-control"  rows="5" placeholder="Enter your message here..." name='message' ></textarea>
                                <label for="message">Message</label>
                                <div className="invalid-feedback" >A message is required.</div>
                            </div>
                           
                           
                           
                            <div className="d-none" ><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            
                            <button className="btn btn-primary btn-xl "  type="submit">Send</button>
                            {done &&  "Thank you for your message"}
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactMe