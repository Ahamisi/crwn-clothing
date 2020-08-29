import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoggle } from '../../firebase/firebase.utils'

class SignIn  extends React.Component{
    constructor(){
        super();
        this.state = {
            email: 'bbb',
            password: 'bloslo'
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({ email : '', password: ''})
    }
    handleChange = event =>{
        console.log(event,'bla i got here')
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="password" required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoggle} isGoggleSignIn>With Goggle</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;