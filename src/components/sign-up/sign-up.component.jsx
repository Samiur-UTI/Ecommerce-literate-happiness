import React,{useState, useEffect} from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'
export default function SignUp() {
    const [userDetails, setuserDetails] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    async function handleSubmit (event) {
        event.preventDefault()
        console.log(event.target)
        const {displayName, email, password, confirmPassword} = userDetails
        if(password !== confirmPassword){
            alert('Password does not match')
            return
        } else {
            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password)
                await createUserProfileDocument(user,{displayName})
                setuserDetails({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            } catch (error) {
                console.error(error)
            }
        }

    }
    function handleChange (event) {
        const {name, value} = event.target
        setuserDetails({[name] : value})
    }
    const {displayName, email, password, confirmPassword} = userDetails
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email address</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput name='displayName' type='text' value={displayName} label='Display Name' onChange={handleChange} required/>
                <FormInput name='email' type='text' value={email} label='email' onChange={handleChange} required/>
                <FormInput name='password' type='password' value={password} label='password' onChange={handleChange} required/>
                <FormInput name='confirmPassword' type='password' value={confirmPassword} label='confirm password' onChange={handleChange} required/>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}
