import React, {useState} from 'react';
import styled from 'styled-components'
 import {Formik, Form, Field, ErrorMessage} from 'formik'

const SignUpForm = () => {

    const [user, setUser] = useState([])

    const newUser = u => {
        const member = {
            username: u.username,
            password: u.password
           
        }
      setUser(member)
    }

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
            newUser(values)
            console.log(user)
            tools.resetForm()}
        } validate={validate}
        >
           <Form>
              <label>Username:
                <Field type='text' name='username' placeholder='username'></Field>  
                <ErrorMessage name='username' component='div' />
              </label> 
              <label>Password:
                <Field type='password' name='password' placeholder='password'></Field>
                <ErrorMessage name='password' component='div'/>
              </label>
              <button type='submit'>Sumbit</button>
           </Form> 
        </Formik>
    );
};

export default SignUpForm;