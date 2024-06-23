import Typography from "@mui/material/Typography";

function KheroonTitle(props) {
  return (
    <Typography
      color="primary.main"
      variant="h1"
      sx={{
        fontSize: { xs: "1.5rem", md: "1.5rem", lg: "2rem" },
        fontWeight: "900",
        marginBottom: { xs: "2rem", md: "0" },
      }}
    >
      {props.titleText}
      <span style={{ color: props.tildaColor, marginLeft: "10px" }}>~</span>
    </Typography>
  );
}

export default KheroonTitle;
