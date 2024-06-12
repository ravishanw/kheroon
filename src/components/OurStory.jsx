import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";
import DoubleGrades from "./DoubleGrades";
import Typography from "@mui/material/Typography";
import KheroonBtn from "./KheroonBtn";
import StoryImg1 from "../assets/storyImg1.jpg";
import StoryImg2 from "../assets/storyImg2.jpg";
import StoryImg3 from "../assets/storyImg3.jpg";
import StoryImg4 from "../assets/storyImg4.jpg";

function OurStory() {
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
          <Grid item xs={8} sx={{ paddingRight: "20px" }}>
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
        <Grid container spacing={0} sx={{ maxHeight: "50%" }}>
          <Grid item xs={12}>
            <img
              className="story-img"
              src={StoryImg1}
              alt="woman wearing necklace and man"
            />
          </Grid>
          <Grid item xs={4}>
            <img className="story-img" src={StoryImg2} alt="" />
          </Grid>
          <Grid item xs={4}>
            <img className="story-img" src={StoryImg3} alt="" />
          </Grid>
          <Grid item xs={4}>
            <img className="story-img" src={StoryImg4} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OurStory;
