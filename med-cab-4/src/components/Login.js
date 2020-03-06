import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Formik, Form, ErrorMessage, Field} from 'formik'
import Particles from 'react-particles-js'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

const StyledDiv = styled.div`{
    display:flex;
    justify-content: center;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, purple, navy, purple, navy)
}`

const StyledCard = styled.div`{
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    box-shadow: 10px 10px 10px black;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 30%;
    background-image: linear-gradient(to right, grey,  white)
    
    
   
}`

const H1 = styled.h3`{
    text-align: center;
    text-decoration: underline;
}`


const validate = ({username, password}) => {
    const errors = {};
    if (username.length < 3) {
        errors.username = 'username must be 3 characters'
    }
    if (password.length < 3){
    errors.password = 'password too weak'
    }
    return errors;
}

const Login = (props) => {
    const [login, setLogin] = useState([])

    useEffect(() => {
        axios.post('https://medcabapi.herokuapp.com/api/auth/login', login)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('id', res.data.id);
          props.history.push('/homepage');
        })
        .catch(err => console.log(err));
    },[login])
 
    return (
       
        <Formik initialValues={{username: '', password: ''}}
         onSubmit={(values, tools) => {
            setLogin(values)
            tools.resetForm()}
          }
         validate={validate}
         >
         
        <Form>
            <StyledDiv> 
                <Particles></Particles>
                <Particles></Particles>
                <StyledCard>
                <H1>Login</H1>
                <H1>Don't have an account?</H1>
                <H1><h3><Link to='/register'>Here</Link></h3></H1>
                <label htmlFor='username'>Username:
               <ErrorMessage className='error' name='username' component='div'/>
               <Field id='username' name='username' type='text' placeholder='username'/>
               </label> 
               <label>Password:
               <Field id='password' type='password' name='password' placeholder='password'></Field>  
               <ErrorMessage className='error' name='password' component='div'/>
               </label>
             <Button className='login-button' type='submit' >Login</Button>
           </StyledCard>
           <Particles></Particles>
           <Particles></Particles>
        </StyledDiv>
        </Form> 
        </Formik>
    
   
    );
};

export default Login;