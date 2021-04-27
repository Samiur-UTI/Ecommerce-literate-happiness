import React, { Component } from 'react'

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
        console.log(e.target.value)
    }
    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
        console.log(this.state);
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' onChange ={this.handleChange} value={this.state.email} required/>
                    <label>Email</label>
                    <input name='password' type='password' onChange ={this.handleChange} value={this.state.password}/>
                    <input type="submit" value='submit form'/>
                </form>
            </div>
        )
    }
}
