import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import Message from './components/Message';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userData:{
          name:'',
          error:''
        },
        errors:{
          firstName:'',
          lastName:'',
          email:''
        }
    }; 
  this.getFormData = this.getFormData.bind(this);

}
getFormData = (data) => {
  console.log('Data from Form:', data)
  
    this.setState(prevState=>({
      userData: {
        ...prevState.userData,
        name:data.name,
        error:data.error
    }
  }));
}
  render() {
  return (
    <div style={{backgroundColor:'#F5FFFA'}}>
     <Message name={this.state.userData.name} error={this.state.userData.error}/>
     <Form  callBackFromParent ={this.getFormData}/>
     
     
    </div>
  );
}

}
