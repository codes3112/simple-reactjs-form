import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

export default class form extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            empId:'',
            city:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear= this.handleClear.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.sendData=this.sendData.bind(this);
    }
    handleChange=(e)=>{
        let name= e.target.name;
        let value= e.target.value;
        this.setState({
            [name]:value
        })
    }
    
    handleSubmit = (e)=>{
        e.preventDefault();
        this.sendData(this.state.firstName);
        this.handleClear();

    }
    handleClear = (e)=>{
        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            empId:'',
            city:''
        })

    }
    sendData = (name) => {
        this.props.callBackFromParent(name);
   }
    render() {
        console.log("props in Form:", this.props)
        return (
            <div>
                {/* First Name */}
                <form className="container" onSubmit={this.handleSubmit}> 
                <Input
                    type={'text'}
                    title= {'First Name'} 
                    name= {'firstName'}
                    value={this.state.firstName} 
                    placeholder = {'Enter your first name'}
                    handleChange = {this.handleChange}
                    required={true}
               />
                {/* Last Name */}
                <Input
                    type={'text'}
                    title= {'Last Name'} 
                    name= {'lastName'}
                    value={this.state.lastName} 
                    placeholder = {'Enter your last name'}
                    handleChange = {this.handleChange}
                    required={true}
               />
                {/* Employee Id  */}
                <Input
                    type={'number'}
                    title= {'Employee ID'} 
                    name= {'empId'}
                    value={this.state.empId} 
                    placeholder = {'Enter your Employee Id'}
                    handleChange = {this.handleChange}
                    required={true}
               />
                {/* email */}
                <Input
                    type={'email'}
                    title= {'Email'} 
                    name= {'email'}
                    value={this.state.email} 
                    placeholder = {'Enter your Email'}
                    handleChange = {this.handleChange}
                    required={true}
               />
                {/* City */}
                <Input
                    type={'text'}
                    title= {'City'} 
                    name= {'city'}
                    value={this.state.city} 
                    placeholder = {'Enter your City'}
                    handleChange = {this.handleChange}
                    required={false}
               />


                <Button title={'Submit'} action={this.handleSubmit} type={'primary'}/>&nbsp;&nbsp;
                <Button title={'Clear'} action={this.handleClear} type={'warning'}/>
                </form>
            </div>
        )
    }
}
