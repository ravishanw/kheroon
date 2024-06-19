import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";
import DoubleGrades from "./DoubleGrades";
import Typography from "@mui/material/Typography";
import KheroonSubTitle from "./KheroonSubTitle";
import testimonialsImg1 from "../assets/testimonialsImg1.jpg";
import testimonialsImg2 from "../assets/testimonialsImg2.jpg";
import testimonialsImg3 from "../assets/testimonialsImg3.jpg";
import KheroonCarousel from "./KheroonCarousel";

const testimonialsArr = [
  {
    imgSrc: testimonialsImg1,
    imgAlt: "Woman wearing jewellery",
    title: "Five stars!",
    name: "Jane Doe",
    designation: "Business title",
    company: "Customer",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio, blanditiis autem quos nobis minima quisquam odio odit ab. Consequatur.",
  },
  {
    imgSrc: testimonialsImg2,
    imgAlt: "Man wearing jewellery",
    title: "Great selection!",
    name: "John Doe",
    designation: "Business title",
    company: "Customer",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio, blanditiis autem quos nobis minima quisquam odio odit ab. Consequatur.",
  },
  {
    imgSrc: testimonialsImg3,
    imgAlt: "Woman wearing jewellery",
    title: "Highly recommended",
    name: "Jane Doe",
    designation: "Business title",
    company: "Customer",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio, blanditiis autem quos nobis minima quisquam odio odit ab. Consequatur.",
  },
];

function Testimonials() {
  return (
    <Grid
      container
      spacing={0}
      className="screen-block padding-horizontal padding-vertical"
    >
      <Grid item xs={3} className="left-panel">
        <KheroonTitle
          titleText="Testimonials"
          tildaColor="#D8B6A4"
        ></KheroonTitle>
        <DoubleGrades></DoubleGrades>
      </Grid>
      <Grid item xs={9}>
        <KheroonCarousel carouselArr={testimonialsArr}></KheroonCarousel>
      </Grid>
    </Grid>
  );
}

export default Testimonials;
