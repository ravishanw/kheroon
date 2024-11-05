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
              Address:
              <br />
              Burlington Ontario, Canada.
            </Typography>
            <div className="inquiries-cta">
              <Typography>
                For inquiries about orders, custom designs, or general
                questions, please reach out via email.
                <br />
              </Typography>
            </div>
            <div className="inquiries-cta">
              <Typography>
                Email:{" "}
                <span className="legal-link">
                  <a href="mailto:info@kheroon.com" target="_blank">
                    info@kheroon.com
                  </a>
                </span>
              </Typography>
            </div>
            <div className="socials-container">
              <a href="mailto:info@kheroon.com" target="_blank">
                <EmailIcon sx={{ fontSize: "40px" }} href="#"></EmailIcon>
              </a>
              <a href="https://www.instagram.com/kheroon_jewelry/">
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
