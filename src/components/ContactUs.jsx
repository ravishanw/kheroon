import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import KheroonLogo from "../assets/kheroonLogo.png";

function ContactUs(props) {
  return (
    <section id="contact-us">
      <Box
        className="screen-block padding-horizontal padding-vertical"
        sx={{
          backgroundColor: "secondary.main",
          position: "relative",
        }}
      >
        <Box
          className={
            (props.visibleState ? "lazy-load" : "invisible") + " left-panel"
          }
        >
          <KheroonTitle
            titleText="Contact us"
            tildaColor="white"
          ></KheroonTitle>
        </Box>
        <Grid
          container
          spacing={0}
          sx={{ marginTop: "4rem" }}
          className={props.visibleState ? "lazy-load" : "invisible"}
        >
          <Grid item sm={12} md={6} className="left-panel">
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              dolorem sint illo, vero esse debitis optio, consequatur est qui
              ducimus quas quasi ratione odio itaque, maiores incidunt.
              Accusamus, optio beatae!
            </Typography>
            <div className="socials-container">
              <a href="#">
                <EmailIcon sx={{ fontSize: "40px" }} href="#"></EmailIcon>
              </a>
              <a href="#">
                <InstagramIcon sx={{ fontSize: "40px" }}></InstagramIcon>
              </a>
              <a href="#">
                <FacebookIcon sx={{ fontSize: "40px" }}></FacebookIcon>
              </a>
            </div>
          </Grid>
          <Grid item sm={12} md={6} className="left-panel">
            <img
              src={KheroonLogo}
              alt="kheroon logo"
              className="contact-us-logo"
            />
            <div className="legal-container">
              <a href="#" className="legal-link">
                <Typography>Terms of service</Typography>
              </a>
              <a href="#" className="legal-link">
                <Typography>Privacy policy</Typography>
              </a>
            </div>
            <Typography sx={{ marginTop: "4rem" }}>
              Copyright &#169; Kheroon 2024
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <div className="contact-us-separator">
            <div className="vertical-grades-0"></div>
          </div>
        </Box>
      </Box>
    </section>
  );
}

export default ContactUs;
