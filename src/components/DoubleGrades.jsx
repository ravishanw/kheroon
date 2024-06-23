import VerticalGrades from "./VerticalGrades";
import Box from "@mui/material/Box";
function DoubleGrades() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <div className="double-grades-container">
        <VerticalGrades></VerticalGrades>

        <div className="bottom-grades">
          <VerticalGrades></VerticalGrades>
        </div>
      </div>
    </Box>
  );
}

export default DoubleGrades;
