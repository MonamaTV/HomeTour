import React from 'react'

const InputText = ({value, type="text", handleOnChange, placehold = ""}) => {
    return (
        <input
            value={value}
            type={type}
            onChange={handleOnChange}
            placeholder={placehold}
            className="input-field"
        /> 
    );
}

export default InputText
