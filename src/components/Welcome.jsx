import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KheroonBtn from "./KheroonBtn";
import WelcomeImg from "../assets/welcomeImg.jpg";
import VerticalGrades from "./VerticalGrades";

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
        sx={{ backgroundColor: "secondary.light", position: "relative" }}
      >
        <VerticalGrades></VerticalGrades>
        <div className="welcome-cta-container">
          <Typography sx={{ marginBottom: "50px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            voluptatem repudiandae quo! Sed quos, alias ad qui fugit dolorem
            laboriosam!
          </Typography>
          <KheroonBtn
            btnColor="primary.main"
            btnText="Browse products"
          ></KheroonBtn>
        </div>
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
