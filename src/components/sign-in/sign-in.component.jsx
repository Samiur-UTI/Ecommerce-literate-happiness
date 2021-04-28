import React, { Component } from 'react'
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
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
                    <FormInput name='email' type='email' handleChange ={this.handleChange} value={this.state.email} required/>
                    <FormInput name='password' type='password' onChange ={this.handleChange} value={this.state.password}/>
                    <input type="submit" value='submit form'/>
                </form>
            </div>
        )
    }
}
