import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function KheroonBtn(props) {
  return (
    <Button
      sx={{
        border: "1px solid",
        borderRadius: "0",
        borderColor: props.btnColorAlt
          ? { xs: props.btnColorAlt, md: props.btnColor }
          : props.btnColor,
        color: props.btnColorAlt
          ? { xs: props.btnColorAlt, md: props.btnColor }
          : props.btnColor,
        "&:hover": {
          backgroundColor: props.btnColorAlt
            ? { xs: props.btnColorAlt, md: props.btnColor }
            : props.btnColor,
          color: props.btnColorAlt
            ? { xs: props.btnColor, md: props.btnColorAlt }
            : "white",
        },
      }}
    >
      {props.btnText}
      <ArrowForwardIcon sx={{ marginLeft: "10px" }}></ArrowForwardIcon>
    </Button>
  );
}

export default KheroonBtn;
