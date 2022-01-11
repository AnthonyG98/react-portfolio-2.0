import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
       const [ name, setName ] = useState();
       const [ email, setEmail ] = useState();
       const [ subject, setSubject ] = useState();
       const [ message, setMessage ] = useState();
       const form = useRef();

       const validate = (event) => {
              const errors = {
                     nameError: "",
                     emailError: "",
                     subjectError: ""
              }
              
              const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              const reg = /^\d+$/;
              
              if(name.length < 2){
                  errors.nameError = "Enter a valid name"
              }
              if(errors.nameError){
                  return false
              }
              if(!email.match(re) || email < 10){
                  errors.emailError = "invalid email"
              }
              if(errors.emailError){
                  return false
              }
              if(subject.length < 2){
                  errors.subjectError = "Enter a valid subject"
              }
              if(errors.subjectError){
                  return false
              }
              return true
          }
       const sendEmail = (e) => {
              e.preventDefault();
              emailjs.sendForm('service_6mfw3xf', 'template_bb8aebw', form.current, 'user_tF7OLHQ41f2A3l6UsEq8G')
                     .then((result) => {
                            console.log(result.text);
                            alert("Message Sent!");
                            window.location.reload();
                     }, (error) => {
                            console.log(error.text);
                     });
              };
       return (
              <>
              <div className="contact-container" id='contact'>
                     <div className="contact-heading-container">
                            <div className="line"></div>
                            <h1 className="projects-head">CONTACT ME</h1>
                     </div>
                     <form ref={form} onSubmit={sendEmail}className="form-container" id="form">
                     <label>Name:</label>
                     <input name="name" type="text" onChange={(e)=>{setName(e.target.value)}}/>
                     <label>Email:</label>
                     <input name='email' type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                     <label>Subject:</label>
                     <input name='subject' type="text" onChange={(e)=>{setSubject(e.target.value)}}/>
                     <label>Message:</label>
                     <textarea name='message' className="text-area" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                     <button id='submit'>Submit</button>
                     </form>
              </div>
              <div className='footer'>
                     <p className='footer-text'><i class="far fa-copyright"></i>All Rights Reserved Anthony G.</p>
              </div>
              </>
       )
}
