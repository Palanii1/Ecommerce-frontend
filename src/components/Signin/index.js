import React from 'react';
import { Container, FormButton, FormContent, FormLabel, FormWrap, FormInput, FormH1, Text, Icon, Form, SigninBtn, SigninLink } from './SigninElements';

const SignIn = () => {
  return (
  <>
    <Container>
        <FormWrap>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type="submit">Continue</FormButton>
                    <Text>Forgot password</Text>
                    <SigninBtn>
                      <SigninLink to="/signup">New Account Sign Up</SigninLink>
                    </SigninBtn>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>

  </>
  );
};

export default SignIn;
