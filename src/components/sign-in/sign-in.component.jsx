import React, { Component } from 'react'
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' handleChange ={this.handleChange} value={this.state.email} required/>
                    <FormInput name='password' type='password' label='password' onChange ={this.handleChange} value={this.state.password}/>
                    <CustomButton type="submit" value='submit form'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
