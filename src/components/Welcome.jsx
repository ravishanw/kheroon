import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KheroonBtn from "./KheroonBtn";
import WelcomeImg from "../assets/welcomeImg.jpg";
import VerticalGrades from "./VerticalGrades";

function Welcome() {
  return (
    <section id="welcome">
      <div>
        <div className="hero-img-container screen-block">
          <img
            src={WelcomeImg}
            alt="woman wearing jewellery next to man"
            className="hero-img"
          />

          <Grid
            container
            spacing={0}
            className="padding-horizontal"
            sx={{ position: "absolute", height: "100%", top: "0", zIndex: "2" }}
          >
            <Grid
              item
              xs={3}
              sx={{
                backgroundColor: "secondary.light",
              }}
            >
              <div className="welcome-panel">
                <VerticalGrades></VerticalGrades>
                <div className="welcome-cta-container">
                  <Typography sx={{ marginBottom: "50px" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum voluptatem repudiandae quo! Sed quos, alias ad qui
                    fugit dolorem laboriosam!
                  </Typography>
                  <KheroonBtn
                    btnColor="primary.main"
                    btnText="Browse products"
                  ></KheroonBtn>
                </div>
              </div>
            </Grid>
            <Grid item xs={9}></Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
