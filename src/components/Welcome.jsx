import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KheroonBtn from "./KheroonBtn";
import WelcomeImg from "../assets/welcomeImg.jpg";
import VerticalGrades from "../assets/vertical-grades-primary.png";

function Welcome() {
  return (
    <Grid
      container
      spacing={0}
      className="screen-block"
      sx={{ padding: "2% 0" }}
    >
      <Grid
        item
        xs={3}
        className="padding-qtr"
        sx={{ backgroundColor: "secondary.light" }}
      >
        <img
          src={VerticalGrades}
          alt="image of decorative lines"
          className="vertical-grades"
        />
        <Typography className="welcome-text" sx={{ margin: "50px 0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          voluptatem repudiandae quo! Sed quos, alias ad qui fugit dolorem
          laboriosam!
        </Typography>
        <KheroonBtn
          btnColor="secondary.dark"
          btnText="Browse products"
        ></KheroonBtn>
      </Grid>
      <Grid item xs={9}>
        <img
          src={WelcomeImg}
          alt="image of man putting jewellery on woman"
          className="welcome-img"
        />
      </Grid>
    </Grid>
  );
}

export default Welcome;
