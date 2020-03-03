import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {axiosWithAuth} from '../utilities/axiosWithAuth'
import {UserIdContext} from '../contexts/UserIdContext'
import Background from '../Images/background.PNG'



const Div = styled.div`
text-align:center
`;
const Div2 = styled.div`
border:2px solid white;
width:50%;
margin:5% auto;
background-image: url(${Background});
.button {
  margin-top:20%;
  width:100px;
}
`;
const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
width:100px;
`;
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    color: 'white',
    lineHeight: 1.5,
    backgroundColor: '#171330',
    borderColor: 'white',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color:'white',
      backgroundColor: '#EF019F',
      borderColor: '#white',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      color:'white',
      width:'200px',
    },
  },
  input: {
    color:'red',
  }
}));

const Profile = (props) => {
    const classes = useStyles();
    const id = useContext(UserIdContext);
  console.log('id in profile', id)
    

    const [state, setState] = useState({
           username: ''
    })
       
    
    console.log('this is state', state)

    function handleUpdate(){
        console.log('this is state in update', state)
          axiosWithAuth()
          .put(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/${id}`, state)
          .then(response => {
              console.log('this is update res',response)
          })
          .catch(error => {
              console.log('ehh error', error)
          },[])
        }

        const handleChange = e => {
            setState({
              ...state, [e.target.name]: e.target.value
            });
        }
    return (
        <Div2 className="Login">
        <Div>
        <h1>Username Changer</h1>
        <h3>Hello, Please Change Username</h3>
        </Div>
        <Form onSubmit={handleUpdate}>
          <FormGroup controlId="Username" bsSize="large">
            <TextField className={classes.root} id="standard-basic" label="Username"  
              type="username"
              onChange={handleChange}
              name='username'
              />
          </FormGroup>
        
          <BootstrapButton onClick={handleUpdate}  className='button' variant="contained" color="primary" disableRipple>
       Update Username
      </BootstrapButton>
        </Form>
      </Div2>
    )
}

export default Profile;