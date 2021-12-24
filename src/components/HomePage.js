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
  max-width: 30%;
  transform: rotate(-20deg);
`;

export default function HomePage() {
  return (
    <HomeWrapper>  
      <HomeLogo alt="will midgette logo" src='/images/WMLogo2X.jpg'/>
    </HomeWrapper>
  );
}
