import Button from "@mui/material/Button";

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
    </Button>
  );
}

export default KheroonBtn;
