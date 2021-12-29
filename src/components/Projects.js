import React, {useState} from 'react';
import styled from 'styled-components'
import ProjectsArray from './ProjectsArray'
import SlideShow from './SlideShow'
import { BreakPoints, PageTitle } from '../styles/styles';

const Projectsdiv = styled.div`
  display: grid;
  grid-template-columns: min-content minmax( 200px, 700px);
  margin: 100px auto;
  @media ${ BreakPoints.largeDown }{
    grid-template-columns: 650px;
    margin: 0 auto;
  }
  //Must use vw here instead of % because size of children is intrinsic
  @media ${ BreakPoints.medDown }{
    grid-template-columns: 100vw;
  }
`;
const Title = styled(PageTitle)`
  font-size: 3.5rem;
  justify-self: center;
  align-self: center;
  @media ${BreakPoints.xlargeDown}{
    font-size: 2.5rem;
  }
`;
const MainSlides = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  padding-left: 50px;
  padding-bottom: 25px;
  border-left: 2px solid var(--light-gray);
  border-bottom: 2px solid var(--light-gray);
  @media ${ BreakPoints.largeDown }{
    grid-column: initial;
    grid-row: 2 / 3;
    padding: 0; 
    border-bottom: none;
    border-top: 2px solid var(--light-gray);
    border-left: none;
  }
  @media ${BreakPoints.medDown}{
    padding: 0 25px;
    h2{
      text-align: center;
    }
  }
  @media ${BreakPoints.smallOnly}{
    h2{
      font-size: 1.5rem;
    }
  }
`;
const ThumbNailSlides = styled.div`
justify-content: center;
padding-right: 50px;
padding: 60px;
align-self: center;
border-top: 2px solid var(--light-gray);
border-bottom: 2px solid var(--light-gray);
@media ${ BreakPoints.largeDown }{
  padding: 0;
  padding-bottom: 30px;
  border-top: none;
  img{
    width: 100% !important;
  }
}
@media ${BreakPoints.medDown}{
  padding: 0 25px 25px 25px;
}
@media ${BreakPoints.smallOnly}{
  display: none;
}
`;

export default function Projects() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Projectsdiv>
      <Title>My Work</Title>
      <MainSlides>
        <SlideShow
          loop
          slidesPerView={1}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          slides =  {ProjectsArray}
          allowTouchMove
          spaceBetween = {10}
        />
      </MainSlides>
      <ThumbNailSlides>
        <SlideShow
          slidesPerView={20}
          grid={{ rows: 3 }}
          watchSlidesProgress={false}
          allowTouchMove={false}
          slides =  {ProjectsArray}
          onSwiper={setThumbsSwiper}/>
      </ThumbNailSlides>
    </Projectsdiv>
  );
}
