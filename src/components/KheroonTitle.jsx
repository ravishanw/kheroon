import Typography from "@mui/material/Typography";

function KheroonTitle(props) {
  return (
    <Typography
      color="primary.main"
      variant="h1"
      sx={{
        fontSize: "2rem",
        fontWeight: "900",
      }}
    >
      {props.titleText}
      <span style={{ color: "#D8B6A4", marginLeft: "10px" }}>~</span>
    </Typography>
  );
}

export default KheroonTitle;
