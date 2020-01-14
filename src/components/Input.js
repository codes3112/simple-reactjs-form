import React from 'react';

/* Props
name
title
type
value
handleChange
placeholder
required
*/

const Input =(props) => {
    
    console.log("props for input:", props.required);
    return (
        
        <div className="form-group">

            
     <label htmlFor={props.name} className="form-label">{props.title}</label><br></br>
        
        <input
            className="form-control"
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            noValidate/> 
        
        
        </div>
    )
}
export default Input;
