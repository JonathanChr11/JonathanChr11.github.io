import React from "react";

import 'styles/components/_input.scss'

const TextArea = ({
    textLabel,
    textName,
    textValue,
    placeholder,
    onTextChange
}) => {
    return(
        <div className="input-container">
            <label>{textLabel}</label>
            <textarea className="input-style-textarea" name={textName} value={textValue} placeholder={placeholder} onChange={onTextChange}></textarea>
        </div>
    )
}

export default TextArea;