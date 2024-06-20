import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/material/Grid";
import KheroonSubTitle from "./KheroonSubTitle";
import Typography from "@mui/material/Typography";
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
              >
                <Grid item xs={4} sx={{ padding: "0 20px" }}>
                  <KheroonSubTitle subTitle={el.title}></KheroonSubTitle>
                  <Typography>{el.name}</Typography>
                  <Typography>{el.designation}</Typography>
                  <Typography>{el.company}</Typography>
                  <Typography>{el.content}</Typography>
                </Grid>
                <Grid item xs={8}>
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
          className="button"
          ariaLabel="previous"
          btnColor="primary.main"
          onClick={handlePrevious}
          icon={<ArrowBackIcon></ArrowBackIcon>}
        ></KheroonArrBtn>
        <KheroonArrBtn
          className="button"
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
