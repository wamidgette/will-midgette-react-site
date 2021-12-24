import React, {useState} from 'react';
import styled from 'styled-components'
import ProjectsArray from './ProjectsArray'
import SlideShow from './SlideShow'

const Projectsdiv = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  position: absolute;
  transform: rotate(-25deg);
  top:50px;
  font-size: 60px;
`;

const MainSlideShow = styled(SlideShow)``;

const ThumbNailSlideShow = styled(SlideShow)``;

export default function Projects() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Projectsdiv>
      <Title>My Work</Title>
      <MainSlideShow
        loop
        slidesPerView={1}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        slides =  {ProjectsArray}
        allowTouchMove
      />
      <ThumbNailSlideShow
        slidesPerView={20}
        grid={{ rows: 3 }}
        watchSlidesProgress={false}
        allowTouchMove={false}
        slides =  {ProjectsArray}
        onSwiper={setThumbsSwiper}/>
    </Projectsdiv>
  );
}
