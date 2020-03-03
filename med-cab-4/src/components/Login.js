import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Formik, Form, ErrorMessage, Field} from 'formik'
import img from '../images/weed.jpg'

const StyledDiv = styled.div`{
    display:flex;
    justify-content: center;
    height: 100vh;
    background-size: cover;
    background: url(${img})
}`

const StyledCard = styled.div`{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    width: 100%;
   
}`


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

    useEffect(() => {
       console.log(login)
    },[login])
 
    return (
    
        <Formik initialValues={{username: '', password: ''}}
         onSubmit={(values, tools) => {
            setLogin(values)
            tools.resetForm()}}
         validate={validate}
         >
            <StyledDiv>  
                <StyledCard>
           <Form>
               <div>
             <label htmlFor='username'>Username: 
               <Field id='username' type='text' name='username' placeholder='username'></Field>
               <ErrorMessage name='username' component='div'/>
             </label>  
             </div>
             <div>
             <label htmlFor='password'>Password: 
               <Field id='password' type='password' name='password' placeholder='password'></Field>  
               <ErrorMessage name='password' component='div'/>
             </label> 
             </div>
             <button className='login-button' type='submit'>Login</button>
           </Form> 
           </StyledCard>
        </StyledDiv>
        </Formik>
   
    );
};

export default Login;