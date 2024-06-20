import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function KheroonArrBtn(props) {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
      aria-label={props.ariaLabel}
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
      {props.icon}
    </Button>
  );
}

export default KheroonArrBtn;
