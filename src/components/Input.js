import React from 'react';
import PropTypes from 'prop-types';
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
    
    let setInput;
    if (props.required) {
      setInput = <input
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      required
      />
    } else {
        setInput=  <input
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        />
    }
    console.log("props for input:", props.required);
    let isRequired = props.required;
    return (
        
        <div className="form-group">

            
     <label htmlFor={props.name} className="form-label">{props.title}</label><br></br>
        {isRequired ? 
        <input
            className="form-control"
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            noValidate/> 
            :
            <input
            className="form-control"
            id={props.name}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            noValidate
            />}
        
        
        </div>
    )
}
export default Input;
