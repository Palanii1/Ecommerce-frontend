import React from 'react';
import { SignupContainer, SignupFormButton, SignupFormContent, SignupFormLabel, SignupFormInput, SignupFormH1, SignupForm } from './SignupElements';

const SignUp = () => {
  return (
  <>
    <SignupContainer>
        <SignupFormContent>
            <SignupForm action=''>
                <SignupFormH1>Register your account</SignupFormH1>
                <SignupFormLabel htmlFor='for'>First Name</SignupFormLabel>
                <SignupFormInput type='name' required/>
                <SignupFormLabel htmlFor='for'>Last Name</SignupFormLabel>
                <SignupFormInput type='name' required/>
                <SignupFormLabel htmlFor='for'>Email</SignupFormLabel>
                <SignupFormInput type='email' required/>
                <SignupFormLabel htmlFor='for'>Password</SignupFormLabel>
                <SignupFormInput type='password' required/>
                <SignupFormLabel htmlFor='for'>Confirm Password</SignupFormLabel>
                <SignupFormInput type='password' required/>
                <SignupFormButton type="submit">Continue</SignupFormButton>
            </SignupForm>
        </SignupFormContent>
    </SignupContainer>
  </>
    );
};

export default SignUp;
