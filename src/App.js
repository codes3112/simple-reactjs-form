import React, { useState,useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import Message from './components/Message';
import 'bootstrap/dist/css/bootstrap.min.css';

const App =(props) => {

  //using react hook useState
  const [userData, setUserData] = useState({
    name:'',
    error:''
  });
  const [testNode, setTestNode] = useState([]);

//using react hook useEffect for component did mount 
useEffect(() => {
    fetch("http://localhost:3001/api")
      .then(res => res.json()).then(res=>{
        //setState({...state,testnode:res});
        setTestNode(res);
        console.log("Response from Node:", res);
      });
      
}, [])
  
  
const getFormData = (data) => {
  console.log('Data from Form:', data)
  setUserData(data);
  
}

  return (
    <div style={{backgroundColor:'#F5FFFA'}}>
    
    {testNode.map((item, index) => (
      <li key={index}>
        <span>{item.firstName}</span></li>
  ))}
     <Message name={userData.name} error={userData.error}/>
     <Form  callBackFromParent ={getFormData}/>
     
     
    </div>
  );

}
export default App;