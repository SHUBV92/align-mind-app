import React from "react"

const Button = (props) => { 

    const { onClick, name } = props

    return (
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    )
}

export default Button; 