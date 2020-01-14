import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import axios from 'axios';

export default class form extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee:{
                firstName:'',
                lastName:'',
                email:'',
                empId:'',
                city:''
            },
            message:{
                name:'',
                error:''
            },
            emailIsValid:false
        
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear= this.handleClear.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.sendData=this.sendData.bind(this);
        
    }
    sendData = (message) => {
        this.props.callBackFromParent(message);
   }
    
    handleChange=(e)=>{
        // let name= e.target.name;
        // let value= e.target.value;
        const validEmailRegex = 
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const {name,value}=e.target;
        console.log("name:",name,"value:", value, "email test", validEmailRegex.test(value));
        
        this.setState( prevState => {
            return { 
               employee : {
                        ...prevState.employee, [name]: value
                       }
            }
         });
        // this.setState({
        //     [name]:value
        // });
        let message = {...this.state.message}
                switch (name) {
                        case 'firstName': 
                        
                        message.error=value.length<2 ? 'You First Name must be atleast 2 characters' : ''
                        this.setState({message});
                        this.sendData(message);
            
                        break;
                        case 'lastName': 
                        
                        //this.sendData({error:'You First Name must be atleast 2 characters'}):this.sendData({error:''})
                        message.error= value.length<2 ?'You Last Name must be atleast 2 characters' : ''
                        this.setState({message});
                        this.sendData(message);
                        break;
                        case 'email': 
                        
                        //this.sendData('Please enter valid Email'):this.sendData('')
                        message.error= !validEmailRegex.test(value)?'Please enter valid Email' : ''
                        validEmailRegex.test(value)? this.setState({emailIsValid:true}) : this.setState({emailIsValid:false})
                        this.setState({message});
                        this.sendData(message);
                        break;
                        default:
                        break;
                    }
        

    }
    
    handleSubmit = (e)=>{
        
        e.preventDefault();
        let message = {...this.state.message}
        
        if(this.state.employee.firstName.length>=2 && this.state.employee.lastName.length>=2 && this.state.emailIsValid){
            message.name= this.state.employee.firstName;
            message.error='';
            this.sendData(message);
            let employee = this.state.employee;
            axios.post(`http://localhost:3001/api`, employee )
                .then(res => {
            console.log(res);
            console.log(res.data);
      })
            this.handleClear(e);
        }else{
            console.log("Check Submission name:",this.state.employee.firstName>=2,"lastname",this.state.employee.lastName>=2,"email", this.state.employee.emailIsValid)
            if(this.state.employee.firstName.length<2){
                message.error= "Error: You must enter your First Name "; 
                this.setState({message});
                this.sendData(message); 
            }
            else if(this.state.employee.lastName.length<2){
                message.error= "Error: You must enter your Last Name "; 
                this.setState({message});
                this.sendData(message); 
            }else if(!this.state.employee.emailIsValid){
                message.error= "Error: You must enter a valid Email "; 
                this.setState({message});
                this.sendData(message); 
            }
            
            
        }
        
        

    }
    handleClear = (e)=>{
        e.preventDefault();
        this.setState({
            employee:{
            firstName:'',
            lastName:'',
            email:'',
            empId:'',
            city:''
            },
            message:{
                name:'',
                error:''
            },
            emailIsValid:false
        });

    }
    
    render() {
        console.log("props in Form:", this.props)
        return (
            <div>
                {/* First Name */}
                <form className="container" onSubmit={this.handleSubmit} className="col-lg-6 offset-lg-3">
   
                <Input
                    type={'text'}
                    title= {'First Name'} 
                    name= {'firstName'}
                    value={this.state.employee.firstName} 
                    placeholder = {'Enter your first name (required)'}
                    handleChange = {this.handleChange}
                    required={true}
               />
                {/* Last Name */}
                <Input
                    type={'text'}
                    title= {'Last Name'} 
                    name= {'lastName'}
                    value={this.state.employee.lastName} 
                    placeholder = {'Enter your last name (required)'}
                    handleChange = {this.handleChange}
                    required={true}
               />
                {/* Employee Id  */}
                <Input
                    type={'number'}
                    title= {'Employee ID'} 
                    name= {'empId'}
                    value={this.state.employee.empId} 
                    placeholder = {'Enter your Employee Id'}
                    handleChange = {this.handleChange}
                    required={true}
               />
                {/* email */}
                <Input
                    type={'email'}
                    title= {'Email'} 
                    name= {'email'}
                    value={this.state.employee.email} 
                    placeholder = {'Enter your Email (required)'}
                    handleChange = {this.handleChange}
                    required={true}
               />
                {/* City */}
                <Input
                    type={'text'}
                    title= {'City'} 
                    name= {'city'}
                    value={this.state.employee.city} 
                    placeholder = {'Enter your City'}
                    handleChange = {this.handleChange}
                    required={false}
               />


                <Button title={'Submit'} action={this.handleSubmit} type={'primary'}/>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button title={'Clear'} action={this.handleClear} type={'warning'}/>
                </form>
               
            </div>
        )
    }
}
