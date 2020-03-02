import React, {useState} from 'react';
import styled from 'styled-components'
import {Formik, Form, ErrorMessage, Field} from 'formik'


const validate = ({username, password}) => {
    const errors = {};
    if (username.length < 3) {
        errors.username = 'too short'
    }
    if (password.length < 3){
    errors.password = 'too short'
    }
    return errors;
}

const Login = (props) => {
    const [login, setLogin] = useState([])
 
    return (
        <Formik initialValues={{username: '', password: ''}}
         onSubmit={(values, tools) => {
            setLogin(values)
            tools.resetForm()}}
        
         validate={validate}
         >
           <Form>
             <label>Username: 
               <Field type='text' name='username' placeholder='username'></Field>
               <ErrorMessage name='username' component='div'/>
             </label>  
             <label>Password: 
               <Field type='text' name='password' placeholder='password'></Field>  
               <ErrorMessage name='password' component='div'/>
             </label> 
             <button type='submit'>Login</button>
           </Form> 
        </Formik>
    );
};

export default Login;