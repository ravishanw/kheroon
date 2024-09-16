import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KheroonBtn from "./KheroonBtn";
import WelcomeImg from "../assets/welcomeImg.jpg";
import Box from "@mui/material/Box";
import VerticalGrades from "./VerticalGrades";

function Welcome(props) {
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
            wrap="wrap-reverse"
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
              <div
                className={
                  (props.visibleState ? "lazy-load" : "invisible") +
                  " welcome-panel"
                }
              >
                <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                  <VerticalGrades></VerticalGrades>
                </Box>
                <div className="welcome-cta-container">
                  <Typography sx={{ marginBottom: "50px" }}>
                    Handcrafted elegance. Responsibly sourced exotic gems,
                    meticulously sculpted for ageless beauty.
                  </Typography>
                  <KheroonBtn
                    btnColor="primary.main"
                    btnColorAlt="white"
                    btnText="Browse products"
                    href="#products"
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
