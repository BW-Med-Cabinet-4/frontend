import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import medical from '../images/mj-vector.png'

const NavDiv = styled.nav`{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    background-image: linear-gradient(to right, black, grey)

    
}`

const StyledNav = styled(NavLink)`{
    text-decoration: none;
    color: white;
    font-weight: bold;
  
}`
const Himg = styled.img`{
    height: 50px;
    width: 50px
    padding-top: 10px;
}`

const Nav = () => {
    return (
        <NavDiv>
        
        <div className='img-div'>
         <h2>Med-Cabinet</h2>
        <Himg src={medical}/>
        </div>
        <div className='nav-div'>
         <StyledNav activeClassName='active' to='/SignUp'>Sign Up</StyledNav>
         <StyledNav activeClassName='active' to='/login'>Login</StyledNav>
         <StyledNav to='/strains'>Strains</StyledNav>
         </div>
        </NavDiv>
    );
};

export default Nav;