import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
 import {Formik, Form, Field, ErrorMessage} from 'formik'
 import img from '../images/weed.jpg'
 import Particles from 'react-particles-js'
 import axios from 'axios'

 const StyledDiv = styled.div`{
    display:flex;
    justify-content: center;
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
    background: navy;
}`

const StyledCard = styled.div`{
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    align-items: center;
    justify-content: center;
   border: 2px solid lime;
   height: 20%;
    width: 30%;
    background-image: linear-gradient(to right, purple, lime, orange)
   
}`



const SignUpForm = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://medcabinetbuild.herokuapp.com/').then(res => console.log(res)).catch(err => console.log(err))  
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
        onSubmit={(values, tools) => {
           setUser(values)
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

export default SignUpForm;