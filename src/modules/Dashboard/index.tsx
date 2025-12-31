import ColumnCharts from "./Components/ColumnCharts/ColumnCharts";
import PieCharts from "./Components/PieCharts/PieCharts";
import TopBar from "./Components/TopBar/TopBar";

export default function index() {
  return (
    <>
      <TopBar />
      <div className="dashboard_wrapper">
        <ColumnCharts />
        <PieCharts />
      </div>
    </>
  );
}
