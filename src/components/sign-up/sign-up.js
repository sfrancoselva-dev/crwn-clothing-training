import { useState } from "react";
import {createUserWithEmailAndPasswordFromAuth, createFbDocFromAuth} from '../../utils/firebase';
import InputField from "../input-field/input-field";
import Button, {BTN_TYPES} from "../button/button";


import {SignUpContainer} from './sign-up.styles';

const defaultFieldValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUp = () => {
   const [fieldValues, setFieldValues] = useState(defaultFieldValues);
  
   const {displayName, email, password, confirmPassword} = {...fieldValues};

   const handleFieldChange = (event) => {
       const {name, value} = event.target;
       setFieldValues({...fieldValues, [name]: value});
   }

   const resetFormFields = () => {
    setFieldValues(defaultFieldValues);
   }

   const handleSubmit = async (event) => {

     event.preventDefault();

     if(password !== confirmPassword) {
        console.error('Password doesn\'t match.');
        return;
     }

     try {
        const {user} = await createUserWithEmailAndPasswordFromAuth(email,password);
        if(user) {
            user.displayName = displayName;
            console.log('from signup component');
            await createFbDocFromAuth(user);
            resetFormFields();
        }
     } catch(err) {
        console.error('Something went wrong', err);
     }
   }

   return (
    <SignUpContainer>
        <h2>I do not have an account</h2>
        <span>Sign up with Email and Password</span>

        <form onSubmit={handleSubmit}>
            <InputField label="Display Name" inputOptions={{
                type: 'text',
                value: displayName,
                onChange : handleFieldChange,
                name: 'displayName',
                required: true
            }}/>
    

            <InputField label="Email" inputOptions={{
                type: 'email',
                value: email,
                onChange : handleFieldChange,
                name: 'email',
                required: true
            }}/>

            
            <InputField label="Password" inputOptions={{
                            type: 'password',
                            value: password,
                            onChange : handleFieldChange,
                            name: 'password',
                            required: true
                        }}/>
            

           
            <InputField label="Confirm Password" inputOptions={{
                type: 'password',
                value: confirmPassword,
                onChange : handleFieldChange,
                name: 'confirmPassword',
                required: true
            }}/>

            <Button type="submit">Sign Up</Button>
        </form>
    </SignUpContainer>
   )
}


export default SignUp;