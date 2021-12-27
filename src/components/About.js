import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faMobile, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faJs, faNodeJs, faPhp, faReact, faGit } from '@fortawesome/free-brands-svg-icons'
import { BreakPoints, PageTitle } from '../styles/styles';

const AboutDiv = styled.div`
  display: grid;
  grid-template-columns: max-content min-content 1fr;
  align-items: center;
  position:relative;
  margin:  100px auto;
  @media ${BreakPoints.xxlargeDown}{
    grid-template-columns: min-content min-content;
  }
  @media ${BreakPoints.medDown}{
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

const Title = styled(PageTitle)`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  width: max-content;
  padding: 0 20px;
  margin-left: 30px;
  margin-right: 30px;
  @media ${BreakPoints.xlargeDown}{
    font-size: 2.5rem;
  }
`;
const HeadShot = styled.div`
  position: relative;
  z-index: 4;
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 50%;
    width: 400px;
  }
  ::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-left: 2px solid var(--light-gray);
    border-right: 2px solid var(--light-gray);
  }
  @media ${BreakPoints.xxlargeDown}{
    img{
      width: 300px;
    }
    ::after{
      border-right: none;
    }
  }
  @media ${BreakPoints.medDown}{
    img {
      width: 300px;
    }
    ::after{
      border-left: none;
      border-top: 2px solid var(--light-gray);
    }
    padding: 50px 0;
  }
  @media ${BreakPoints.smallOnly}{
    img{ 
      width: 225px;
    }
    padding: 20px 0;
  }
`;
const Bio = styled.p`
  margin:0;
  position: relative;
  color: var(--light-gray);
  font-size: 1.2rem;
  padding: 50px;
  line-height: 2rem;
  a{
    color: var(--primary-color);
    transition: 0.3s;
    :hover{
      color: var(--primary-color);
    }
  }
  @media ${BreakPoints.xxlargeDown}{
    grid-column: 1 / -1;
    border-top: 2px solid var(--light-gray);
  }
  @media ${BreakPoints.smallOnly}{
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 25px;
  }
`;
const BackGroundInfo = styled.div`
  grid-column: 1 / -1;
  padding: 50px;
  padding-top:0;
  border-top: 2px solid var(--light-gray);
  border-bottom: 2px solid var(--light-gray);
  h3{
    font-size: 2rem;
  }
  @media ${BreakPoints.smallOnly}{
    padding: 0 25px 25px 25px;
    h3{
      font-size: 1.5rem;
    }
  }
`;
const Languages = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--dark-gray);
    border-radius: 10px;
    padding: 10px;
    width: 125px;
    background: white;
    box-shadow: 4px 4px 4px var(--black);
    transition: 0.1s;
    :hover{
      transform: scale(1.3)
    }
    span{
      color: var(--black);
    }
  }
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: var(--black)
`;

export default function About() {
  return (
    <AboutDiv>
      <Title>About Me</Title>
      <HeadShot><img src='/images/will.jpg' alt='Will Midgette'/></HeadShot>
      <Bio>Hi, my name is Will and I am a full-stack web developer. There is nothing more satisfying to me than turning an idea into reality, and my skills in a number of languages such as JavaScript, PHP, C#(ASP.NET), MySQL, HTML, CSS and XML allow me to do just that. This website is an example of something I built from scratch, using no frameworks or libraries. If you're interested in my work, feel free to leave me a message!
      <br/><br/>Download my resume <a href="../Resume/WillMidgette_Resume_2021.pdf" download="WillMidgette_Resume_2021">here!</a>
      </Bio>
      <BackGroundInfo>
        <h3>My Skills</h3>
        <Languages>
          <div><Icon icon = {faJs}/><span>JS</span></div>
          <div><Icon icon = {faReact}/><span>React.js</span></div>
          <div><Icon icon = {faNodeJs}/><span>Node.js</span></div>
          <div><Icon icon = {faCss3}/><span>CSS3</span></div>
          <div><Icon icon ={faMobile}/><span>Resp. des.</span></div>
          <div><Icon icon = {faPhp}/><span>PHP</span></div>
          <div><Icon icon ={faFolderOpen}/><span>MySQL</span></div>
          <div><Icon icon ={faFolderOpen}/><span>MongoDB</span></div>
          <div><Icon icon = {faHtml5}/><span>HTML5</span></div>
          <div><Icon icon = {faGit}/><span>Git</span></div>
          <div><Icon icon ={faFileAlt}/><span>XML</span></div>
        </Languages>
      </BackGroundInfo>
    </AboutDiv>
  );
}