import React, { Component } from 'react'
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        } catch (err) {
            console.error(err)
        }
    }
    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            ...this.state,
            [name] : value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' onChange ={this.handleChange} value={this.state.email} required/>
                    <FormInput name='password' type='password' label='password' onChange ={this.handleChange} value={this.state.password}/>
                    <div className='buttons'>
                        <CustomButton type="submit" value='submit form'>Sign In</CustomButton>
                        <CustomButton  onClick ={signInWithGoogle} isGoogleSignedIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
