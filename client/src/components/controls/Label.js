import React from 'react'

const Label = ({text}) => {
    return (
        <label htmlFor={text}>
            {text}
        </label>
    )
}

export default Label
