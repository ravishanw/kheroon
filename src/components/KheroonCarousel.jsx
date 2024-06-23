import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/material/Grid";
import KheroonSubTitleLg from "./KheroonSubTitleLg";
import KheroonSubTitle from "./KheroonSubTitle";
import Typography from "@mui/material/Typography";
import KheroonTilda from "./KheroonTilda";
import KheroonArrBtn from "./KheroonArrBtn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function KheroonCarousel(props) {
  let sliderRef = useRef(null);

  function handleNext() {
    sliderRef.slickNext();
  }

  function handlePrevious() {
    sliderRef.slickPrev();
  }

  const settings = {
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {props.carouselArr.map((el, index) => {
          return (
            <div key={index}>
              <Grid
                sx={{
                  backgroundColor: "secondary.light",
                }}
                container
                spacing={0}
                wrap="wrap-reverse"
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    padding: { xs: "20px 20px 80px 20px" },
                    height: { xs: "fit-content", sm: "100%" },
                  }}
                >
                  <KheroonSubTitleLg subTitle={el.title}></KheroonSubTitleLg>
                  <div className="carousel-business-container">
                    <KheroonSubTitle subTitle={el.name}></KheroonSubTitle>
                    <Typography>
                      {el.designation} | {el.company}
                    </Typography>
                  </div>
                  <KheroonTilda></KheroonTilda>
                  <div className="carousel-content-container">
                    <Typography>{el.content}</Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                  <img
                    src={el.imgSrc}
                    alt={el.imgAlt}
                    className="testimonials-img"
                  />
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Slider>
      <div className="carousel-controls">
        <KheroonArrBtn
          ariaLabel="previous"
          btnColor="primary.main"
          onClick={handlePrevious}
          icon={<ArrowBackIcon></ArrowBackIcon>}
        ></KheroonArrBtn>
        <KheroonArrBtn
          ariaLabel="next"
          btnColor="primary.main"
          onClick={handleNext}
          icon={<ArrowForwardIcon></ArrowForwardIcon>}
        ></KheroonArrBtn>
      </div>
    </div>
  );
}

export default KheroonCarousel;
