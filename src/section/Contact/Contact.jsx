import React, { useEffect, useRef, useState } from "react";
import { UseNav } from "components/Navbar/UseNav";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import Input from "components/Input/Input";
import TextArea from "components/Input/TextArea";

import UserDark from "assets/icon/user-dark.svg";
import UserLight from "assets/icon/user-light.svg";
import LocationDark from "assets/icon/location-dark.svg";
import LocationLight from "assets/icon/location-light.svg";
import EmailDark from "assets/icon/email-dark.svg";
import EmailLight from "assets/icon/email-light.svg";

import "react-toastify/dist/ReactToastify.css";
import "styles/section/_contact.scss";
import "styles/components/_button.scss";

const Contact = () => {
    const contactRef = UseNav("Contact");

    useEffect(() => {
        AOS.init();
    }, []);

    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (name.trim() === "") {
            newErrors.name = "Name can't be empty!";
        }

        if (email.trim() === "") {
            newErrors.email = "Email can't be empty!";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid!";
        }

        if (subject.trim() === "") {
            newErrors.subject = "Subject can't be empty!";
        }

        if (message.trim() === "") {
            newErrors.message = "Message can't be empty!";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            toast.success("Message Sent!", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            emailjs
                .sendForm(
                    "service_lklko5j",
                    "template_e65zfs8",
                    form.current,
                    "oGPNj93WPBTPVho0-"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <section ref={contactRef} id="contactSection">
            <div className="contact-container">
                <h1 className="title">Contact Me</h1>
                <hr />
                <div className="contact-container-flex">
                    <div
                        className="contact-container-flex-left"
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                    >
                        <h2 className="contact-title">Get in Touch</h2>
                        <p>
                            Hello my name is Jonathan Christian BINUSIAN 2025
                            taking Information Systems major. Here are lists of
                            my full name, Adress and Email :
                        </p>
                        <div className="contact-details">
                            <div>
                                <img
                                    className="logo-dark"
                                    src={UserDark}
                                    alt=""
                                />
                                <img
                                    className="logo-light"
                                    src={UserLight}
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>Name</p>
                                <p className="contact-details-item">
                                    Jonathan Christian
                                </p>
                            </div>
                        </div>
                        <div className="contact-details">
                            <div>
                                <img
                                    className="logo-dark"
                                    src={LocationDark}
                                    alt=""
                                />
                                <img
                                    className="logo-light"
                                    src={LocationLight}
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>Address</p>
                                <p className="contact-details-item">
                                    Jl. Anggrek No.20
                                </p>
                            </div>
                        </div>
                        <div className="contact-details">
                            <div>
                                <img
                                    className="logo-dark"
                                    src={EmailDark}
                                    alt=""
                                />
                                <img
                                    className="logo-light"
                                    src={EmailLight}
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>Email</p>
                                <p className="contact-details-item">
                                    jonathansoesanto@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="contact-container-flex-right"
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                    >
                        <h2 className="contact-title">Message Me</h2>
                        <form
                            className="contact-form"
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <Input
                                textLabel="Name :"
                                inputType="text"
                                inputName="user_name"
                                inputValue={name}
                                placeholder="Input your name..."
                                onInputChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && (
                                <span className="error">{errors.name}</span>
                            )}
                            <Input
                                textLabel="Email :"
                                inputType="email"
                                inputName="user_email"
                                inputValue={email}
                                placeholder="Input your email..."
                                onInputChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <span className="error">{errors.email}</span>
                            )}
                            <Input
                                textLabel="Subject :"
                                inputType="text"
                                inputName="user_subject"
                                inputValue={subject}
                                placeholder="Input your subject..."
                                onInputChange={(e) =>
                                    setSubject(e.target.value)
                                }
                            />
                            {errors.subject && (
                                <span className="error">{errors.subject}</span>
                            )}
                            <TextArea
                                textLabel="Message :"
                                textName="message"
                                textValue={message}
                                placeholder="Input your message..."
                                onTextChange={(e) => setMessage(e.target.value)}
                            />
                            {errors.message && (
                                <span className="error">{errors.message}</span>
                            )}
                            <input
                                className="btn"
                                type="submit"
                                value="Submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;
