import React from "react";
import '../css/Button.css'
/** los props tambien se pueden desestructurar indicando directamente entre llaves el nombre del props */
function Button({text, isButtonClick, handlerClick}) {
    return (
        <button className={ isButtonClick? 'btn_click':'btn_restart' } onClick={handlerClick}>
        {text}
        </button>
    )
}
export default Button;