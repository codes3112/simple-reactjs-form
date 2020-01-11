import React from 'react'

const Button = (props) =>{
    return(
        <button
        onClick={props.action}
        className={'btn btn-'+ props.type}>
        {props.title}
        
        </button>

        
    )

}

export default Button;