import Typography from "@mui/material/Typography";

function KheroonSubTitle(props) {
  return (
    <Typography
      color="primary.main"
      variant="h3"
      sx={{ fontSize: "1.3rem", fontWeight: "600", margin: "10px 0" }}
    >
      {props.subTitle}
    </Typography>
  );
}

export default KheroonSubTitle;
