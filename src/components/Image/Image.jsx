import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import webIcon from "assets/icon/web-icon.svg";

import 'styles/components/_image.scss';

const Image = ({
    image,
    firstText,
    secondText,
    webLink,
    githubLink,
    imageTitle
}) => {

    return (
        <div className="image-container">
            <div className="image-subcontainer">
                <img className="image-style" src={image} alt="" />
                <div className="image-overlay">
                    <div className="overlay-container">
                        <div className="overlay-icon">
                            <a href={webLink}><img style={{width:"30px", height:"30px", cursor:"pointer"}} src={webIcon} alt="" /></a>
                            <a href={githubLink}><FontAwesomeIcon icon={faGithub} size="2x" color="white" cursor={"pointer"} /></a>
                        </div>
                        <div className="overlay-text">
                            <span className="overlay-text-items">{firstText}</span>
                            <span className="overlay-text-items">{secondText}</span>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="title-style">{imageTitle}</h2>
        </div>
    )
}

export default Image;