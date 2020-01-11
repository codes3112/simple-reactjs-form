import React from 'react';

const msgStyle={
    color:'#808080',
    textAlign:'center'
};

const Message =(props)=>{
    console.log('props from message:',props);
    return (
        <div className='container'>
            {(props.name)?<h1 style={msgStyle}>Welcome {props.name}</h1>: <h1 style={msgStyle}>User Data Form</h1>}
          <br></br>  
        </div>
    )
}
export default Message;
