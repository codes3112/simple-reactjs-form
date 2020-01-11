import React from 'react';

const msgStyle={
    color:'#808080',
    textAlign:'center'
};
const msgSuccess={
    color:'#00cc66',
    textAlign:'center'
};

const Message =(props)=>{
    console.log('props from message:',props);
    return (
        <div className='container'>
            <h1 style={msgStyle}>User Data Form</h1>
            {(props.name !='')?<h2 style={msgSuccess}>Congratulation {props.name} !, your information has been saved!</h2>: <h2></h2>}
            {(props.error)?<h6 style={{color:'red', textAlign:'center'}}>{props.error}</h6> : <h6></h6>}
          <br></br>  
        </div>
    )
}
export default Message;
