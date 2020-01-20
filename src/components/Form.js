import React, {useState} from 'react';
import Input from './Input';
import Button from './Button';
import axios from 'axios';

const Form =(props) => {

const [employee, setEmployee] = useState({
                firstName:'',
                lastName:'',
                email:'',
                empId:'',
                city:''

    });
const [message, setMessage] = useState({
        name:'',
        error:'' 
    })
const [emailIsValid, setEmailIsValid] = useState(false);        
        
        
const sendData = (message) => {
        props.callBackFromParent(message);
   }
    
const handleChange=(e)=>{
        // let name= e.target.name;
        // let value= e.target.value;
        const validEmailRegex = 
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const {name,value}=e.target;
        console.log("name:",name,"value:", value, "email test", validEmailRegex.test(value));
        
        setEmployee({...employee,[name]:value});
        console.log("check setEmployee: ", employee)

                switch (name) {
                        case 'firstName': 
                        
                        message.error=value.length<2 ? 'You First Name must be atleast 2 characters' : ''
                        setMessage({...message,message});
                        sendData(message);
            
                        break;
                        case 'lastName': 
                        
                        //this.sendData({error:'You First Name must be atleast 2 characters'}):this.sendData({error:''})
                        message.error= value.length<2 ?'You Last Name must be atleast 2 characters' : ''
                        setMessage({...message,message});
                        sendData(message);
                        break;
                        case 'email': 
                        
                        //this.sendData('Please enter valid Email'):this.sendData('')
                        message.error= !validEmailRegex.test(value)?'Please enter valid Email' : ''
                        validEmailRegex.test(value)? setEmailIsValid(true) : setEmailIsValid(false)
                        setMessage({...message,message});
                        sendData(message);
                        break;
                        default:
                        break;
                    }
        

    }
    
const handleSubmit = (e)=>{
        
        e.preventDefault();
        
        if(employee.firstName.length>=2 && employee.lastName.length>=2 && emailIsValid){
            message.name= employee.firstName;
            message.error='';
            sendData(message);
            //send post request to node-express server
            axios.post(`http://localhost:3001/api`, employee )
                .then(res => {
            console.log(res);
            console.log(res.data);
      })
            handleClear(e);
        }else{
            //console.log("Check Submission name:",employee.firstName>=2,"lastname",employee.lastName>=2,"email", employee.emailIsValid)
            if(employee.firstName.length<2){
                message.error= "Error: You must enter your First Name "; 
                setMessage({...message,message});
                sendData(message); 
            }
            else if(employee.lastName.length<2){
                message.error= "Error: You must enter your Last Name "; 
                setMessage({...message,message});
                sendData(message); 
            }else if(!emailIsValid){
                message.error= "Error: You must enter a valid Email "; 
                setMessage({...message,message});
                sendData(message); 
            }
            
            
        }
        
        

    }
const handleClear = (e)=>{
        e.preventDefault();
        setEmployee({
            firstName:'',
            lastName:'',
            email:'',
            empId:'',
            city:''
            });
        setMessage({
                name:'',
                error:''
            });
        setEmailIsValid(false);

    }
    
        //console.log("props in Form:", props)
        return (
            <div>
                {/* First Name */}
                <form className="container" onSubmit={handleSubmit} className="col-lg-6 offset-lg-3">
   
                <Input
                    type={'text'}
                    title= {'First Name'} 
                    name= {'firstName'}
                    value={employee.firstName} 
                    placeholder = {'Enter your first name (required)'}
                    handleChange = {handleChange}
                    required={true}
               />
                {/* Last Name */}
                <Input
                    type={'text'}
                    title= {'Last Name'} 
                    name= {'lastName'}
                    value={employee.lastName} 
                    placeholder = {'Enter your last name (required)'}
                    handleChange = {handleChange}
                    required={true}
               />
                {/* Employee Id  */}
                <Input
                    type={'number'}
                    title= {'Employee ID'} 
                    name= {'empId'}
                    value={employee.empId} 
                    placeholder = {'Enter your Employee Id'}
                    handleChange = {handleChange}
                    required={true}
               />
                {/* email */}
                <Input
                    type={'email'}
                    title= {'Email'} 
                    name= {'email'}
                    value={employee.email} 
                    placeholder = {'Enter your Email (required)'}
                    handleChange = {handleChange}
                    required={true}
               />
                {/* City */}
                <Input
                    type={'text'}
                    title= {'City'} 
                    name= {'city'}
                    value={employee.city} 
                    placeholder = {'Enter your City'}
                    handleChange = {handleChange}
                    required={false}
               />


                <Button title={'Submit'} action={handleSubmit} type={'primary'}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button title={'Clear'} action={handleClear} type={'warning'}/>
                </form>
               
            </div>
        )
    }
export default Form;
