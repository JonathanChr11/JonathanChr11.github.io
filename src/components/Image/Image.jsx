import React from "react";

import '../../styles/components/_image.scss';

const Image = ({
    image,
    imageTitle
}) => {
    return (
        <div className="image-container">
            <img className="image-style" src={image} alt="" />
            <h2 className="title-style">{imageTitle}</h2>
        </div>
    )
}

export default Image;