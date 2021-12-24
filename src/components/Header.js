import React from 'react';
import styled from 'styled-components'
import { DeviceBreakpoints } from '../styles/styles';
import {Link} from 'react-router-dom';

const HeaderWrapper = styled.header`
  width:100%; 
  background: var(--black);
  padding: 20px 150px;
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
  font-size: 1rem;
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
`;
const Logo = styled(Link)`
  // margin-right: auto;
  display : flex;
  flex-direction: column;
  background:var(--white);
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
  &:hover .spinner{
    animation: rotate20 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
    cursor:pointer;
  }
`;
const Spinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    font-size:1rem;
    &:first-of-type{
      color:var(--primary-color);
      border-bottom: 1px solid black;
      padding: 0 10px
    }
    &:nth-of-type(2){
      transform: rotate(180deg);
      color: var(--secondary-color);
    }
  }
`;
export default function Header() {
  return (
    <HeaderWrapper> 
      <Navigation>
        <Logo to="./">
          <Spinner>
              <span>W</span>  
              <span>W</span>  
          </Spinner>
        </Logo>
        <Applink to="/about">ABOUT</Applink>
        <Applink to="/projects">PROJECTS</Applink>
        <Applink to="/contact">CONTACT</Applink>
      </Navigation>
    </HeaderWrapper>  
  );
}
