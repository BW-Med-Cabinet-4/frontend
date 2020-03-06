import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
 import {Formik, Form, Field, ErrorMessage} from 'formik'
 import Particles from 'react-particles-js'
 import axios from 'axios'
 import {Button} from 'reactstrap'

 const StyledDiv = styled.div`{
    display:flex;
    justify-content: center;
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, green, blue);
}`

const StyledCard = styled.div`{
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 10px white;
    font-weight: bold;
    align-items: center;
    justify-content: center;
   height: 30%;
    width: 30%;
    background-image: linear-gradient(to right, grey, white, grey)
   
}`



const SignUpForm = (props) => {

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.post('https://medcabapi.herokuapp.com/api/auth/register', user)
        .then(res => {
            props.history.push('/login');
            console.log('this is register res',res)
        })
        .catch(err => console.log(err))  
    }, [user])

 

    const validate = ({username, password}) => {
        const errors = {}
        if (username.length < 3){
            errors.username = 'too short'
        }
        else if (username.match(/[A-Z]/) === null){
            errors.username = 'must include capital letter'
        }
        if (password.length < 3){
            errors.password = 'password must be 3 characters'
        }
        else if (password.match(/[0-9]/) === null) {
            errors.password = 'must include number'
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
               <h2>Sign Up</h2>
               <h3>Already have an account?</h3>
               <h3><Link to=''>Here</Link></h3>
               <label htmlFor='username'>Username:
              <ErrorMessage className='error' name='username' component='div'/>
              <Field id='username' name='username' type='text' placeholder='username'/>
              </label> 
              <label>Password:
              <Field id='password' type='password' name='password' placeholder='password'></Field>  
              <ErrorMessage className='error' name='password' component='div'/>
              </label>  
            <Button className='login-button' type='submit'>Sign Up</Button>        
          </StyledCard>
          <Particles></Particles>
          <Particles></Particles>
       </StyledDiv>
       </Form> 
       </Formik>
       
        
    );
};

export default SignUpForm;