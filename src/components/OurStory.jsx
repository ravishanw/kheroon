import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";
import DoubleGrades from "./DoubleGrades";
import Typography from "@mui/material/Typography";
import KheroonBtn from "./KheroonBtn";
import StoryImg1 from "../assets/storyImg1.jpg";
import StoryImg2 from "../assets/storyImg2.jpg";
import StoryImg3 from "../assets/storyImg3.jpg";
import StoryImg4 from "../assets/storyImg4.jpg";

const galleryArr = [
  {
    imgSrc: StoryImg1,
    imgAlt: "alt",
    imgHeight: "16rem",
    colWidth: 12,
    xsColWidth: 12,
  },
  {
    imgSrc: StoryImg2,
    imgAlt: "alt",
    imgHeight: "25rem",

    colWidth: 4,
    xsColWidth: 6,
  },
  {
    imgSrc: StoryImg3,
    imgAlt: "alt",
    imgHeight: "25rem",

    colWidth: 4,
    xsColWidth: 6,
  },
  {
    imgSrc: StoryImg4,
    imgAlt: "alt",
    imgHeight: "25rem",
    colWidth: 4,
    xsColWidth: 12,
  },
];

function OurStory() {
  function handleMouseOver(e) {
    e.target.classList.remove("img-slide");
    e.target.classList.add("img-hype");
  }
  function handleMouseLeave(e) {
    e.target.classList.remove("img-hype");
  }

  return (
    <section id="our-story">
      <Grid
        container
        spacing={0}
        className="screen-block padding-horizontal padding-vertical"
        sx={{ backgroundColor: "secondary.main" }}
      >
        <Grid item xs={12} md={3} className="left-panel">
          <KheroonTitle titleText="Our story" tildaColor="white"></KheroonTitle>
          <DoubleGrades></DoubleGrades>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              sm={8}
              sx={{ marginBottom: "20px", padding: "0 20px" }}
            >
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati reprehenderit, vero aliquid iusto voluptas alias
                inventore error, quo perspiciatis laborum eveniet voluptatem.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <KheroonBtn
                btnText="Read more"
                btnColor="primary.main"
              ></KheroonBtn>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ marginTop: { xs: "20px", sm: "0" } }}
          >
            {galleryArr.map((el, index) => {
              return (
                <Grid
                  key={index}
                  item
                  xs={el.xsColWidth}
                  md={el.colWidth}
                  sx={{
                    height: el.imgHeight,
                    overflow: "hidden",
                  }}
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={el.imgSrc}
                    alt={el.imgAlt}
                    className="story-img img-slide"
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default OurStory;
