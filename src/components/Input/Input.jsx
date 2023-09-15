import React from "react";

import 'styles/components/_input.scss'

const Input = ({
    textLabel,
    inputType,
    inputName,
    inputValue,
    placeholder,
    onInputChange
}) => {
    return(
        <div className="input-container">
            <label className="input-label">{textLabel}</label>
            <input className="input-style" type={inputType} name={inputName} value={inputValue} placeholder={placeholder} onChange={onInputChange} />
        </div>
    )
}

export default Input;