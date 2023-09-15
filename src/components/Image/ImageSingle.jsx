import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import 'styles/components/_image.scss';

const ImageSingle = ({
    image,
    firstText,
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
                            <a href={githubLink}><FontAwesomeIcon icon={faGithub} size="2x" color="white" cursor={"pointer"} /></a>
                        </div>
                        <div className="overlay-text">
                            <span className="overlay-text-items">{firstText}</span>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="title-style">{imageTitle}</h2>
        </div>
    )
}

export default ImageSingle;