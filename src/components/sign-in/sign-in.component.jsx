import React, { Component } from 'react'
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends Component {
    constructor(props){
        console.log(props)
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault()
        const {email,password} = this.state
        try{
         await auth.signInWithEmailAndPassword(email,password)
         this.setState({email:'',password:''})
          
        }catch(error){
            console.log(error)
        }
        this.setState({
        email:'',
        password:''
        })
    }
    handleChange = (event) =>{
     const {value,name} = event.target   
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
            <h2 className ="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit = {this.handleSubmit}>
            <FormInput 
            name="email"
             type="email" 
             label='email' 
             HandleChange = {this.handleChange}
             value={this.state.email} 
             required/>
            <FormInput
             name="password"
              type="password" 
              label='password'  
              HandleChange = {this.handleChange}
              value={this.state.password} 
              required/>
            <div className="buttons">
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton isGoogleSignIn  onClick = {signInWithGoogle}>Sign In with google</CustomButton>
            </div>
            </form>
            </div>

        )
    }
}


export default SignIn