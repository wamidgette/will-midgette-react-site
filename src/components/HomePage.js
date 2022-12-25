import { faEdge } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { BreakPoints } from '../styles/styles';

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  width: 100%;
  @media ${BreakPoints.smallOnly}{
    margin: 0;
    grid-template-columns: 100%;
  }
`;

const Name = styled.h1`
  position: relative;
  font-size: 3.5rem;
  text-align: center;
  margin: 0;
  @media ${BreakPoints.largeDown}{
    font-size: 3rem;
  }
  @media ${BreakPoints.smallOnly}{
    font-size: 2.5rem;
    padding-top: 30px;
  }
`;

const Blurb = styled.p`
  align-self: start;
  margin-bottom: 100px;
  font-size: 1.5rem;
  text-align: center;
  @media ${BreakPoints.smallOnly}{
    font-size: 1rem;
    margin-bottom: 50px;
    padding-bottom: 30px;
    border-bottom: 2px solid var(--light-gray);
  }
`;
const LogoDiv = styled.div`
width: 300px;
height: 300px;
border-radius: 50%;
overflow: hidden;
animation: rotate20 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.3s forwards;
background: var(--white);
@media (max-width: 500px){
  width: 200px;
  height: 200px;
}
justify-self: center;
`;

const HomeLogo = styled.img`
  height: 100%;
  width: 100%;
`;

const Applink = styled(Link)`
  color: var(--white);
  transition: 0.3s;
  :hover{
    color: var(--primary-color);
  }
`;

export default function HomePage() {
  return (
    <HomeWrapper>  
      <Name>Will Midgette
      </Name>
      <Blurb>
        Full-Stack Web Developer<br/>
        Read more <Applink to={'./about'}>here</Applink>.
      </Blurb>
      <LogoDiv><HomeLogo alt="will midgette logo" src='/images/WMLogo2X.jpg'/></LogoDiv>
    </HomeWrapper>
  );
}
