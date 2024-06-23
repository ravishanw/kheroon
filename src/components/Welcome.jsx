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
            sx={{
              bottom: { xs: "0" },
              position: "absolute",
              maxHeight: "100%",
              minHeight: "100%",
              top: { md: "0" },
              zIndex: "2",
            }}
          >
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                backgroundColor: {
                  xs: "transparent",
                  md: "secondary.light",
                },
                color: { xs: "white", md: "primary.main" },
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
                    btnColorAlt="white"
                    btnText="Browse products"
                  ></KheroonBtn>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={9}></Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
