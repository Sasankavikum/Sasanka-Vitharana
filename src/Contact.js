import React from 'react';
import './Contact.css';
import contactImg from "./images/IMG_2235.JPG";
import emailjs from 'emailjs-com';

const Mailer = () => {

    function sentEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_yps6atl',
            'template_a5jll9d',
            e.target,
            'user_DbVb0DiOho6iUnstBdwU3'
            ).then(res=>{
                console.log(res);
            }).catch(err=>console.log(err));
    }

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelancer. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+94779885690</strong> or email <strong>sasavikum@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                        <form className="form" onSubmit={sentEmail}>
                           <input type="text" 
                           className="contact name" 
                           id="name" 
                           placeholder="Your name" 

                               />
                           <input type="text" 
                           className="contact email" 
                           id="email" 
                           placeholder="Your Email" 
                           />
                           <input type="text" 
                           className="contact subject" 
                           id="subject" 
                           placeholder="Write the Subject" 
                           />
                           <textarea name="message" 
                           id="message" 
                           placeholder="Write Your message" 
                           ></textarea>
                           <button className="btn contact pointer" id="submit" type="submit" >Submit</button>
                           </form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
                           }

export default Mailer
