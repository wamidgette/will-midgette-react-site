import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFileAlt, faMobile, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3, faJs, faNodeJs, faPhp, faReact, faGit } from '@fortawesome/free-brands-svg-icons'
const Intro = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 50px;
`;

const HeadShot = styled.img`
  position: relative;
  border-radius: 50%;
  width: 500px;
  margin-right: 50px;
`;

const Bio = styled.p`
  position: relative;
  flex: 0 0 50%;
  color: var(--light-gray);
  font-size: 1.5rem;
  padding-left: 50px;
  line-height: 2.3rem;
  &::after{
    content:"";
    position:absolute;
    bottom:0;
    left:-2px;
    width:2px;
    height:100%;
    background-color: var(--light-gray);
    transition: width 0.6s;
  }
  a{
    color: var(--primary-color);
    transition: 0.3s;
    :hover{
      color: var(--secondary-color);
    }
  }
`;

const BackGroundInfo = styled.div`
  flex: 0 0 1;
  background: var(--white);
  padding: 50px;
  padding-top:0;
  h2{
    font-size: 2rem;
    color: var(--dark-gray);
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
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 4rem;
`;

export default function About() {
  return (
    <>
      <Intro>  
        <HeadShot src='/images/will.jpg' alt='headshot picture of Will Midgette'></HeadShot>
        <Bio>Hi, my name is Will and I am a full-stack web developer. There is nothing more satisfying to me than turning an idea into reality, and my skills in a number of languages such as JavaScript, PHP, C#(ASP.NET), MySQL, HTML, CSS and XML allow me to do just that. This website is an example of something I built from scratch, using no frameworks or libraries. If you're interested in my work, feel free to leave me a message!
        <br/><br/>Download my resume <a href="../Resume/WillMidgette_Resume_2021.pdf" download="WillMidgette_Resume_2021">here!</a>
        </Bio>
      </Intro>
      <BackGroundInfo>
        <h2>My Skills</h2>
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
    </>
  );
}