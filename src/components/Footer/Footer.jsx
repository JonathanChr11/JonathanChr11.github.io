import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import 'styles/components/_footer.scss';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-container-left">
                <p>© {new Date().getFullYear()} JoC, All Right Reserved.</p>
                <p>Created by Jonathan Christian</p>
            </div>
            <div className="footer-container-right">
                <h2 className="social-media-title">My Social Media</h2>
                <div className="social-media-item">
                    <a className="icon-color" href="https://www.instagram.com/jonathan.soesanto/"><FontAwesomeIcon className="social-media-item-style" icon={faInstagram} size="2x" /></a>
                    <a className="icon-color" href="www.tiktok.com/@euntzyy"><FontAwesomeIcon className="social-media-item-style" icon={faTiktok} size="2x" /></a>
                    <a className="icon-color" href="https://www.linkedin.com/in/jonathan-christian-286478220/"><FontAwesomeIcon className="social-media-item-style" icon={faLinkedinIn} size="2x" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;