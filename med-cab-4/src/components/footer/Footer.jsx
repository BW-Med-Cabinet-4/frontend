import React from 'react'
import styled from 'styled-components'

const P = styled.body`
.content {
    min-height: calc(100vh - 70px);
  }
  .footer {
    height: 50px;
    text-align:center;
    color:#006400;
  }
`;
const Footer = () => {
    return (
        <P>
  <div className="content">
  </div>
  <footer className="footer"> Copyright © 2020 Med Cabinet </footer>
</P>
    )
}

export default Footer;