import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faMobile,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faPhp,
  faReact,
  faVuejs,
  faGit,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { BreakPoints, PageTitle } from "../styles/styles";
import { Link } from "react-router-dom";

const AboutDiv = styled.div`
  display: grid;
  grid-template-columns: max-content min-content 1fr;
  align-items: center;
  position: relative;
  margin: 100px auto;
  @media ${BreakPoints.xxlargeDown} {
    grid-template-columns: min-content min-content;
  }
  @media ${BreakPoints.medDown} {
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
  @media ${BreakPoints.xlargeDown} {
    font-size: 2.5rem;
  }
`;
const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
  }
  @media${BreakPoints.xxlargeDown} {
    width: 300px;
    height: 300px;
  }
  @media${BreakPoints.smallOnly} {
    width: 225px;
    height: 225px;
  }
`;
const HeadShot = styled.div`
  position: relative;
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-left: 2px solid var(--light-gray);
    border-right: 2px solid var(--light-gray);
  }
  @media ${BreakPoints.xxlargeDown} {
    ::after {
      border-right: none;
    }
  }
  @media ${BreakPoints.medDown} {
    ::after {
      border-left: none;
      border-top: 2px solid var(--light-gray);
    }
    padding: 50px 0;
  }
  @media ${BreakPoints.smallOnly} {
    padding: 20px 0;
  }
`;
const Bio = styled.p`
  margin: 0;
  position: relative;
  color: var(--light-gray);
  font-size: 1.2rem;
  padding: 50px;
  line-height: 2rem;
  a {
    color: var(--white);
    transition: 0.3s;
    :hover {
      color: var(--primary-color);
    }
  }
  @media ${BreakPoints.xxlargeDown} {
    grid-column: 1 / -1;
    border-top: 2px solid var(--light-gray);
  }
  @media ${BreakPoints.smallOnly} {
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 25px;
  }
`;
const BackGroundInfo = styled.div`
  grid-column: 1 / -1;
  padding: 50px;
  padding-top: 0;
  border-top: 2px solid var(--light-gray);
  border-bottom: 2px solid var(--light-gray);
  h3 {
    font-size: 2rem;
  }
  @media ${BreakPoints.smallOnly} {
    padding: 0 25px 25px 25px;
    h3 {
      font-size: 1.5rem;
    }
  }
`;
const Languages = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  div {
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
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 4rem;
`;

export default function About() {
  return (
    <AboutDiv>
      <Title>About Me</Title>
      <HeadShot>
        <ImageWrapper>
          <img src="/images/will.jpg" alt="Will Midgette" />
        </ImageWrapper>
      </HeadShot>
      <Bio>
        Hi, my name is Will and I'm a web developer currently working in the
        manufacturing sector. My primary focus is on developing JavaScript
        applications using frameworks such as React and Vue, and seamlessly
        integrating them with various business systems. While JavaScript is my
        core language, I am proficient in PHP, SQL, CSS, and HTML. Additionally,
        I have experience working with WordPress, Laravel, and Linux
        environments.
        <br />
        <br /> This website is an example of something I built using React along
        with Node.js packages like Swiper, EmailJS, Styled-Components, and Sass.
        Feel free to explore my <Link to={"../projects"}>projects</Link> to get
        a better understanding of my capabilities. If you're interested in
        collaborating or learning more about my experience, please download my
        resume{" "}
        <a
          href="/documents/will-midgette-resume.docx"
          download="WillMidgette_Resume_2021"
        >
          here
        </a>
        .
      </Bio>
      <BackGroundInfo>
        <h3>My Skills</h3>
        <Languages>
          <div>
            <Icon icon={faJs} />
            <span>JS</span>
          </div>
          <div>
            <Icon icon={faReact} />
            <span>React.js</span>
          </div>
          <div>
            <Icon icon={faVuejs} />
            <span>Vue.js</span>
          </div>
          <div>
            <Icon icon={faNodeJs} />
            <span>Node.js</span>
          </div>
          <div>
            <Icon icon={faCss3} />
            <span>CSS3</span>
          </div>
          <div>
            <Icon icon={faMobile} />
            <span>Resp. des.</span>
          </div>
          <div>
            <Icon icon={faPhp} />
            <span>PHP</span>
          </div>
          <div>
            <Icon icon={faDatabase} />
            <span>MySQL</span>
          </div>
          <div>
            <Icon icon={faServer} />
            <span>Apache</span>
          </div>
          <div>
            <Icon icon={faAws} />
            <span>AWS</span>
          </div>
          <div>
            <Icon icon={faHtml5} />
            <span>HTML5</span>
          </div>
          <div>
            <Icon icon={faGit} />
            <span>Git</span>
          </div>
          <div>
            <Icon icon={faFileAlt} />
            <span>XML</span>
          </div>
        </Languages>
      </BackGroundInfo>
    </AboutDiv>
  );
}
