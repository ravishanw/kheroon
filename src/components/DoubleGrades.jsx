import VerticalGrades from "./VerticalGrades";
function DoubleGrades() {
  return (
    <div className="double-grades-container">
      <VerticalGrades></VerticalGrades>
      <div className="bottom-grades">
        <VerticalGrades></VerticalGrades>
      </div>
    </div>
  );
}

export default DoubleGrades;
