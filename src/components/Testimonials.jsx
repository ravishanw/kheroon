import Grid from "@mui/material/Grid";
import KheroonTitle from "./KheroonTitle";
import DoubleGrades from "./DoubleGrades";

function Testimonials() {
  return (
    <Grid
      container
      spacing={0}
      className="screen-block padding-horizontal padding-vertical"
    >
      <Grid item xs={3} className="left-panel">
        <KheroonTitle
          titleText="Testimonials"
          tildaColor="#D8B6A4"
        ></KheroonTitle>
        <DoubleGrades></DoubleGrades>
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
}

export default Testimonials;
