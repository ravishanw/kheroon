import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function KheroonBtn(props) {
  return (
    <Button
      sx={{
        border: "1px solid",
        borderRadius: "0",
        borderColor: props.btnColor,
        color: props.btnColor,
        "&:hover": {
          backgroundColor: props.btnColor,
          color: "#fff",
        },
      }}
    >
      {props.btnText}
      <ArrowForwardIcon sx={{ marginLeft: "10px" }}></ArrowForwardIcon>
    </Button>
  );
}

export default KheroonBtn;
