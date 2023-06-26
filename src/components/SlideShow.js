import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/css";
import { BreakPoints } from "../styles/styles";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwiperContainer = styled(Swiper)`
  margin: 0;
  .swiper-slide {
    cursor: auto;
    img {
      cursor: grab;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 40%;
    @media ${BreakPoints.smallOnly} {
      top: 200px;
    }
    &::after {
      font-size: 30px;
      font-weight: 800;
      color: var(--primary-color);
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
      cursor: pointer;
      width: 100px;
      object-fit: cover;
      height: 100px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 350px;
  @media ${BreakPoints.smallOnly} {
    height: 200px;
  }
`;

const Urls = styled.div`
  display: flex;
  background: var(--white);
  position: absolute;
  padding: 0px 2px;
  top: 10px;
  right: 10px;
  gap: 2px;
  border-radius: 5px;
  // box-shadow: -2px 2px black;
  a {
    color: black;
    :hover {
      color: var(--primary-color);
    }
    margin: 0;
  }
  @media ${BreakPoints.smallOnly} {
    gap: 5px;
    top: 0px;
    right: 0px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  transition: 0.2s;
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
      autoHeight={autoHeight}
      //If the onswiper value is set then this is a thumbnail slideshow
      className={onSwiper ? "thumbnail-swiper" : "main-swiper"}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div>
            {" "}
            {/* If this is just a thumbnail slide only show the image. If its the main slide wrap the image in an anchor tag and show the description */}
            {onSwiper ? (
              <img alt={`${slide.title}`} src={slide.thumbnail_path} />
            ) : (
              <>
                <h2>{slide.title}</h2>
                <ImageWrapper>
                  <img alt={`${slide.title}`} src={slide.image_path} />
                  {(slide.projectUrl || slide.githubUrl) && (
                    <Urls>
                      {slide.projectUrl && (
                        <a target="blank" href={slide.projectUrl}>
                          <Icon icon={faExternalLinkSquareAlt} />
                        </a>
                      )}
                      {slide.githubUrl && (
                        <a target="blank" href={slide.githubUrl}>
                          <Icon icon={faGithubSquare} />
                        </a>
                      )}
                    </Urls>
                  )}
                </ImageWrapper>
                <p dangerouslySetInnerHTML={{ __html: slide.description }}></p>
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
}
