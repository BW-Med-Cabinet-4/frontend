import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Formik, Form, ErrorMessage, Field} from 'formik'
import img from '../images/mj-vector.png'
import Particles from 'react-particles-js'

const StyledDiv = styled.div`{
    display:flex;
    justify-content: center;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background: navy;
}`

const StyledCard = styled.div`{
    margin-top: 10%;
    display: flex;
    border: 2px solid magenta;
    flex-direction: column;
    font-weight: bold;
    align-items: center;
    justify-content: center;
   height: 20%;
    width: 30%;
    background-image: linear-gradient(to right, purple, lime, orange)
   
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
        <Form>
           
            <StyledDiv> 
                <Particles></Particles>
                <Particles></Particles>
                <StyledCard>
                
                <label htmlFor='username'>Username:
               <ErrorMessage name='username' component='div'/>
               <Field id='username' name='username' type='text' placeholder='username'/>
               </label> 
               <label>Password:
               <Field id='password' type='password' name='password' placeholder='password'></Field>  
               <ErrorMessage name='password' component='div'/>
               </label>
               
             <button className='login-button' type='submit'>Login</button>
            
           </StyledCard>
           <Particles></Particles>
           <Particles></Particles>
        </StyledDiv>
        </Form> 
        </Formik>
    
   
    );
};

export default Login;