import { useEffect, useState} from 'react';
import {auth, signInWithGooglePopup, signInWithEmailAndPasswordCustom} from '../../utils/firebase';
import { getRedirectResult } from 'firebase/auth';

import InputField from '../input-field/input-field';
import Button, {BTN_TYPES} from '../button/button';



import {SignInContainer, BtnContainer} from  './sign-in.styles';



const SignIn = () => {

   const defaultFieldValues = {
    email: '',
    password: ''
   }

   const [fieldValues, setFieldValues] = useState(defaultFieldValues);
   const {email, password} = fieldValues;

    useEffect(() => {
      const redirectResult = async () => {
        await getRedirectResult(auth);
      }
      redirectResult();
    },[]);

    const onChangeInputFieldHandler = (evt) => {
        evt.preventDefault();
        const {name, value} = evt.target;
        setFieldValues({...fieldValues, [name]: value});

    }

    const googleSignInPopup =  async () => {
        try {
           await signInWithGooglePopup();
        } catch(err) {
            console.error(err);
        }
       
    }

    const signIn = async (evt) => {
      evt.preventDefault();

      try {
        const response = await signInWithEmailAndPasswordCustom(email,password);
        if(!response) return;

        setFieldValues({...defaultFieldValues});

      } catch(err) {
        if(err.code === 'auth/invalid-credential') {
          alert('Invalid Email / Password');
        }
      }   
    }
   return (
     <SignInContainer>
        <h1>Sign In</h1>
        
        <div>
          <form onSubmit={signIn}>
             <InputField label="Email" inputOptions={{
              type: 'email',
              required: true,
              name: 'email',
              value: email,
              onChange: onChangeInputFieldHandler
             }} />

            <InputField label="Password" inputOptions={{
              type: 'password',
              required: true,
              name: 'password',
              value: password,
              onChange: onChangeInputFieldHandler
             }} />

            <BtnContainer>
                <Button type="submit">Sign In</Button>
                <Button type="button" onClick={googleSignInPopup} btnType={BTN_TYPES.googleSignIn}>Sign in with Google</Button>
            </BtnContainer>
          </form>
        </div>

        
    </SignInContainer>
    )
};


export default SignIn;