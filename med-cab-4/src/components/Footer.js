import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`{
    background-image: linear-gradient(to right, black, grey);
    height: 50px;
    color: white;
}`

const Footer = () => {
    return (
        <StyledFooter>
           Copyright Med-Cabinet 2020     
        </StyledFooter>
            
        
    );
};

export default Footer;