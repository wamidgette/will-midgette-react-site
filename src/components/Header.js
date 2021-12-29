import React from 'react';
import styled from 'styled-components'
import { BreakPoints } from '../styles/styles';
import {Link} from 'react-router-dom';

const HeaderWrapper = styled.header`
  width:100vw; 
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
  justify-content: flex-start;
`;
const Applink = styled(Link)`
  margin-left:auto;
  text-decoration: none;
  color:var(--white);
  font-size: 1.3rem;
  transition: all 0.1s ease-out;
  position:relative;
  overflow:hidden;
  //Red underline for header links
  &::after{
    content:"";
    position:absolute;
    bottom:0;
    left:-2px;
    width:0%;
    height: 2px;
    background: red;
    transition: width 0.6s;
  }
  &:hover::after{
    width:100%;
    color:var(--primary-color);
  }
  @media ${BreakPoints.medDown}{
    font-size: 1rem;
  }
`;
const Logo = styled(Link)`
  padding: 4px;
  overflow: hidden;
  background: transparent;
  display : flex;
  flex-direction: column;
  background:var(--white);
  outline: 4px solid var(--primary-color);
  border-radius:50%;
  justify-content: center;
  width:2.5rem;
  height:2.5rem;
  text-decoration: none;
  &::after{
    position:absolute;
    height:100%;
    width:100%;
    left:0;
    top:0;
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
