import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

const SwiperContainer = styled(Swiper)`
  margin: 0;
  .swiper-slide {
    cursor: pointer;
    a{
      display: block;
    }
    img{
      width: 100%;
      // height: 350px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 300px;
    &::after {
      font-size: 30px;
      font-weight: bold;
      color: #c6c5c5;
      transition: 0.3s;
    }
    &:hover {
      &::after {
        color: var(--black);
      }
    }
  }
  //Thumbnail swiper carousel styling
  &.thumbnail-swiper {
    width: 100%;
    .swiper-wrapper {
      display: grid;
      grid-template-columns: repeat(4, calc(25% - 3px));
      justify-content: space-between;
      .swiper-slide {
        width: 100% !important;
        margin: 0 !important;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    img {
      width: 100px;
      object-fit: cover;
      height:100px;
    }
  }
`;

/**
 * Function given swiperjs parameters as well as children(expects array of <Image/> elements, list of image objects, and handleopen function to open modal gallery )
 * @param {*} param0
 * @returns
 * swiperjs image gallery with properties provided
 */
export default function SlideShow({
  slides,
  slidesPerView = 1,
  spaceBetween = false,
  slidesPerGroup = 1,
  navigation = true,
  thumbs = false,
  grid = false,
  onSwiper = false,
  watchSlidesProgress = false,
  allowTouchMove = false,
  autoHeight = false,
  loop = false,
}) {
  SwiperCore.use([Navigation, Thumbs]);
  console.log(slides[0].imageName)
  return (
    <SwiperContainer
      loop={loop}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      slidesPerGroup={slidesPerGroup}
      navigation={navigation}
      thumbs={thumbs}
      grid={grid}
      onSwiper={onSwiper}
      watchSlidesProgress={watchSlidesProgress}
      allowTouchMove={allowTouchMove}
      autoHeight = {autoHeight}
      //If the onswiper value is set then this is a thumbnail slideshow
      className={onSwiper ? 'thumbnail-swiper' : 'main-swiper'}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div> {/* If this is just a thumbnail slide only show the image. If its the main slide wrap the image in an anchor tag and show the description */}
          {onSwiper? <img alt = {`${slide.title} project`} src={ `/images/projects/thumbnails/${slide.imageName}` }/> : (
          <>
            <h2>{slide.title}</h2>
            <a href = {slide.projectUrl}>
              <img alt = {`${slide.title} project`} src={ `/images/projects/${slide.imageName}` }/>
            </a>
            <p>{slide.description}</p>
          </> 
          )}
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
}
