import { React } from "react";

const Button = ({
    btnLink,
    btnClick,
    btnStyle,
    iconDisplayFront,
    iconDisplayBack,
    btnTextStyle,
    btnLabel
}) => {
    return (
        <a
            href={btnLink}
            onClick={btnClick}
            className={btnStyle}
        >
            <i className={iconDisplayFront}></i>
            <span className={btnTextStyle}>{btnLabel}</span>
            <i className={iconDisplayBack}></i>
        </a>
    );
};

export default Button;