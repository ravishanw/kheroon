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
    imgPadding: "0",
    colWidth: 12,
  },
  {
    imgSrc: StoryImg2,
    imgAlt: "alt",
    imgHeight: "25rem",
    imgPadding: "20px",
    colWidth: 4,
  },
  {
    imgSrc: StoryImg3,
    imgAlt: "alt",
    imgHeight: "25rem",
    imgPadding: "20px",
    colWidth: 4,
  },
  {
    imgSrc: StoryImg4,
    imgAlt: "alt",
    imgHeight: "25rem",
    imgPadding: "0",
    colWidth: 4,
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
    <Grid
      container
      spacing={0}
      className="screen-block padding-horizontal padding-vertical"
      sx={{ backgroundColor: "secondary.main" }}
    >
      <Grid item xs={3} className="left-panel">
        <KheroonTitle titleText="Our story" tildaColor="white"></KheroonTitle>
        <DoubleGrades></DoubleGrades>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ marginBottom: "20px", paddingRight: "20px" }}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              reprehenderit, vero aliquid iusto voluptas alias inventore error,
              quo perspiciatis laborum eveniet voluptatem laboriosam maxime ex
              nisi blanditiis pariatur vitae veniam! Cupiditate, esse maxime,
              dolorem sint ducimus id eligendi doloribus quia dolor, architecto
              provident aut iusto totam odio. Quibusdam, odio dignissimos!
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <KheroonBtn
              btnText="Read more"
              btnColor="primary.main"
            ></KheroonBtn>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          {galleryArr.map((el, index) => {
            return (
              <Grid
                key={index}
                item
                xs={el.colWidth}
                sx={{
                  height: el.imgHeight,
                  marginBottom: "20px",
                  paddingRight: el.imgPadding,
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
  );
}

export default OurStory;
