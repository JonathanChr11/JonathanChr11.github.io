import React from "react";

import '../../styles/components/_input.scss'

const Input = ({
    textLabel,
    inputType,
    placeholder
}) => {
    return(
        <div className="input-container">
            <label className="input-label" htmlFor="">{textLabel}</label>
            <input className="input-style" type={inputType} placeholder={placeholder} />
        </div>
    )
}

export default Input;