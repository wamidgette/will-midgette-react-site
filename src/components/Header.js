import React from 'react';
import styled from 'styled-components'
import { BreakPoints } from '../styles/styles';
import {Link} from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: var(--black);
  padding: 20px 150px;
  border-bottom: 2px solid var(--light-gray);
  @media ${BreakPoints.medDown}{
    padding: 20px 50px;
  }
  @media ${BreakPoints.smallOnly}{
    
    padding: 10px 20px;
  }
`;
const Navigation = styled.nav`
  display:flex;
  align-items: center;
`;
const Applink = styled(Link)`
  margin-left:auto;
  text-decoration: none;
  color:var(--white);
  font-size: 1.3rem;
  position:relative;
  //Red underline for header links
  &::after{
    content:"";
    position:absolute;
    bottom:0;
    left: 0px;
    width:0%;
    height: 2px;
    transition: width 0.6s;
  }
  &:hover::after{
    width:100%;
    background: red;
  }
  @media ${BreakPoints.medDown}{
    font-size: 1rem;
  }
`;
const Logo = styled(Link)`
  display : flex;
  width: 2.5rem; 
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  background: var(--white);
  padding: 4px;
  img{
    width:100%;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper> 
      <Navigation>
        <Logo to="./">
          <img alt="home link" src='/header-logo.png'></img>
        </Logo>
        <Applink to="/about">ABOUT</Applink>
        <Applink to="/projects">PROJECTS</Applink>
        <Applink to="/contact">CONTACT</Applink>
      </Navigation>
    </HeaderWrapper>  
  );
}
