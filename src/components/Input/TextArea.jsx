import React from "react";

import '../../styles/components/_input.scss'

const TextArea = ({
    textLabel,
    placeholder
}) => {
    return(
        <div className="input-container">
            <label htmlFor="">{textLabel}</label>
            <textarea className="input-style-textarea" placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea;