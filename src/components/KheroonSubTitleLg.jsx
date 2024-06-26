import Typography from "@mui/material/Typography";

function KheroonSubTitleLg(props) {
  return (
    <Typography
      color="primary.main"
      variant="h2"
      sx={{
        fontSize: { xs: "1.5rem", md: "1.5rem", lg: "2rem" },
        fontWeight: "400",
        margin: "0",
      }}
    >
      {props.subTitle}
    </Typography>
  );
}

export default KheroonSubTitleLg;
