import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
 import {Formik, Form, Field, ErrorMessage} from 'formik'
 import img from '../images/weed.jpg'

const SignDiv = styled.div`{
    background: url(data:image/png;base64,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);
    background-size: cover;
}`

const SignUpForm = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        console.log(user)    
    }, [user])

 

    const validate = ({username, password}) => {
        const errors = {}
        if (username.length < 3){
            errors.username = 'too short'
        }
        if (password.length < 3){
            errors.password = 'not strong enough'
        }
        return errors;
    }
   
    return (
    
        <Formik initialValues={{username: '', password: ''}}
        onSubmit={(values,tools) => { 
            setUser(values)
            tools.resetForm()}
        } validate={validate}>
        <SignDiv>
           <Form>
              <label htmlFor='username'>Username:
                <Field id='username' type='text' name='username' placeholder='username' ></Field>  
                <ErrorMessage name='username' component='div' />
              </label> 
              <label htmlFor='password'>Password:
                <Field id='password' type='password' name='password' placeholder='password' ></Field>
                <ErrorMessage name='password' component='div'/>
              </label>
              <button type='submit'>Sign Up</button>
           </Form> 
           </SignDiv>
        </Formik>
       
        
    );
};

export default SignUpForm;