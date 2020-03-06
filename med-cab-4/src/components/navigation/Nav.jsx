import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import history from '../../utils/history';
import medical from '../../images/mj-vector.png';

// const Div = styled.div`
// display:flex;
// align-items:baseline;
// color:#006400;
// font-family: "Abril Fatface Regular";
// border-bottom:2px solid #006400;
// background-color:#171330;
// `;

// const Div2 = styled.div`
// display:flex;
// flex-direction:row;
// margin-left:50%;
// justify-content: space-between;
// width:35%;
// `;

// const H1 = styled.h2`
// display:flex;
// margin-left:1%;
// `;

// const H3 = styled.h3`
// flex-wrap: nowrap;
// cursor: pointer;



// .loginNavigation {
//     text-decoration: none;
//     color:#006400;
// }
// `;

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

const StyledNav = styled(Link)`{
    text-decoration: none;
    color: white;
    font-weight: bold;
  
}`
const Himg = styled.img`{
    height: 50px;
    width: 50px
    padding-top: 10px;
}`


const Navigation = (props) => {
    const Logout =()=> {
        {localStorage.removeItem('id')}
        {localStorage.removeItem('token')}
        history.push('')
        }
        console.log('this is props in navigation', history)
    return (
        <NavDiv>
            <div className='img-div'>
                <h2> Med Cabinet </h2>
                <Himg src={medical}/>
            </div>
            <div className='nav-div'>
                <StyledNav exact to='/homepage' className='loginNavigation'> Home  </StyledNav>
                <StyledNav exact to='/strains' className='loginNavigation'> Strains </StyledNav>
                <StyledNav exact to='/profile' className='loginNavigation'> Profile </StyledNav>
                <StyledNav><a href='https://www.leafly.com/' className='loginNavigation'> Marketing Page </a></StyledNav>
                <StyledNav onClick={Logout} exact to=''> Log Out </StyledNav>
            </div>
        </NavDiv>
    )
}

export default Navigation;