import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import medical from '../images/medical.jpg'

const NavDiv = styled.section`{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 0 auto;
    background-image: linear-gradient(to right, black, grey)

    
}`

const StyledNav = styled(NavLink)`{
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding-top: 40px;
}`
const Himg = styled.img`{
    height: 100px;
    width: 100px
}`

const Nav = () => {
    return (
        <NavDiv>
        <div className='nav-div'>
        <Himg src={medical}/>
         <StyledNav activeClassName='active' to='/SignUp'>Sign Up</StyledNav>
         <StyledNav activeClassName='active' to='/login'>Login</StyledNav>
         <StyledNav to='/strains'>Strains</StyledNav>
         </div>
        </NavDiv>
    );
};

export default Nav;