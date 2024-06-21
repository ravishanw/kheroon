import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";

function ContactUs() {
  return (
    <Grid
      container
      spacing={0}
      className="screen-block padding-horizontal padding-vertical"
      sx={{ backgroundColor: "secondary.main" }}
    >
      <Grid item xs={12}>
        <KheroonTitle titleText="Contact us" tildaColor="white"></KheroonTitle>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
}

export default ContactUs;
