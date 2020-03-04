import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import history from '../../utils/history';

const Div = styled.div`
display:flex;
align-items:baseline;
color:#006400;
font-family: "Abril Fatface Regular";
border-bottom:2px solid #006400;
background-color:#171330;
`;

const Div2 = styled.div`
display:flex;
flex-direction:row;
margin-left:50%;
justify-content: space-between;
width:35%;
`;

const H1 = styled.h2`
display:flex;
margin-left:1%;
`;

const H3 = styled.h3`
flex-wrap: nowrap;
cursor: pointer;



.loginNavigation {
    text-decoration: none;
    color:#006400;
}
`;


const Navigation = (props) => {
    const Logout =()=> {
        {localStorage.removeItem('id')}
        {localStorage.removeItem('token')}
        history.go('')
        }
        console.log('this is props in navigation', history)
    return (
        <Div>
            <H1> Med Cabinet </H1>
            <Div2>
            
            <H3><Link exact to='/homepage' className='loginNavigation'> Home </Link> </H3>
            <H3><Link exact to='/strains' className='loginNavigation'> Strains</Link> </H3>
            <H3><Link exact to='/profile' className='loginNavigation'> Profile</Link> </H3>
            <H3><a href='#' className='loginNavigation'> Marketing Page </a></H3>
            <H3 onClick={Logout}> Log Out </H3>
            </Div2>
        </Div>
    )
}




export default Navigation