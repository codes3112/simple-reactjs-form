import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import Message from './components/Message';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userData: null
    }; 
  this.getFormData = this.getFormData.bind(this);

}
getFormData = (data) => {
    this.setState({ userData: data });
}
  render() {
  return (
    <div style={{backgroundColor:'#F5FFFA'}}>
     <Message name={this.state.userData}/>
     <Form  callBackFromParent ={this.getFormData}/>
     
     
    </div>
  );
}

}
