import React from 'react';
import styled from 'styled-components'

const HomeWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content:center;
`;
const HomeLogo = styled.img`
  border-radius: 50%;
  width: 300px;
  animation: rotate20 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
  cursor:pointer;
  @media (max-width: 500px){
    width: 200px;
  }
`;

export default function HomePage() {
  return (
    <HomeWrapper>  
      <HomeLogo alt="will midgette logo" src='/images/WMLogo2X.jpg'/>
    </HomeWrapper>
  );
}
