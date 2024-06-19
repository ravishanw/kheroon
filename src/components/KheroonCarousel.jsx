import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/material/Grid";
import KheroonSubTitle from "./KheroonSubTitle";
import Typography from "@mui/material/Typography";

function KheroonCarousel(props) {
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
      <Slider {...settings}>
        {props.carouselArr.map((el, index) => {
          return (
            <div key={index}>
              <Grid
                sx={{ backgroundColor: "secondary.light" }}
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
    </div>
  );
}

export default KheroonCarousel;
