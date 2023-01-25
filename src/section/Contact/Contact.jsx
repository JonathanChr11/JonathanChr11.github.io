import React, { useEffect } from "react";
import { UseNav } from '../../components/Navbar/UseNav';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Input from "../../components/Input/Input";
import TextArea from "../../components/Input/TextArea";
import Button from "../../components/Button/Button";

import UserDark from "../../assets/icon/user-dark.svg";
import UserLight from "../../assets/icon/user-light.svg";
import LocationDark from "../../assets/icon/location-dark.svg";
import LocationLight from "../../assets/icon/location-light.svg";
import EmailDark from "../../assets/icon/email-dark.svg";
import EmailLight from "../../assets/icon/email-light.svg";

import '../../styles/section/_contact.scss';
import '../../styles/components/_button.scss';


const Contact = () => {
    const contactRef = UseNav("Contact")

    useEffect(() => {
        AOS.init();
      }, [])

    return(
        <section ref={contactRef} id="contactSection">
            <div className="contact-container">
                <h1 className="title">Contact Me</h1>
                <hr />
                <div className="contact-container-flex" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="contact-container-flex-left">
                        <h2 className="contact-title">Get in Touch</h2>
                        <p>Hello my name is Jonathan Christian BINUSIAN 2025 taking Information Systems major. Here are lists of my full name, Adress and Email :</p>
                        <div className="contact-details">
                            <div>
                                <img className="logo-dark" src={UserDark} alt="" />
                                <img className="logo-light" src={UserLight} alt="" />
                            </div>
                            <div>
                                <p>Name</p>
                                <p className="contact-details-item">Jonathan Christian</p>
                            </div>
                        </div>
                        <div className="contact-details">
                            <div>
                                <img className="logo-dark" src={LocationDark} alt="" />
                                <img className="logo-light" src={LocationLight} alt="" />
                            </div>
                            <div>
                                <p>Address</p>
                                <p className="contact-details-item">Jl. Anggrek No.20</p>
                            </div>
                        </div>
                        <div className="contact-details">
                            <div>
                                <img className="logo-dark" src={EmailDark} alt="" />
                                <img className="logo-light" src={EmailLight} alt="" />
                            </div>
                            <div>
                                <p>Email</p>
                                <p className="contact-details-item">jonathansoesanto@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-container-flex-right">
                        <h2 className="contact-title">Message Me</h2>
                        <Input 
                            textLabel="Name :"
                            inputType="text"
                            placeholder="Input your name..."
                        />
                        <Input 
                            textLabel="Email :"
                            inputType="email"
                            placeholder="Input your email..."
                        />
                        <Input 
                            textLabel="Subject :"
                            inputType="text"
                            placeholder="Input your subject..."
                        />
                        <TextArea 
                            textLabel="Message :"
                            placeholder="Input your message..."
                        />
                        <Button
                            btnLink="mailto:jonathansoesanto@gmail.com"
                            btnStyle="btn"
                            btnLabel="Submit"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;