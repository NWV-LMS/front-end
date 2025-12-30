// import Chart from "react-apexcharts";
// import type { ApexOptions } from "apexcharts";
import TopBar from "./Components/TopBar/TopBar";

export default function index() {
  // const series = [
  //   {
  //     name: "Sales",
  //     data: [10, 41, 35, 51, 49, 62, 69],
  //   },
  // ];

  // const options: ApexOptions = {
  //   chart: {
  //     type: "line",
  //     height: 350,
  //   },
  //   stroke: {
  //     curve: "smooth",
  //   },
  //   xaxis: {
  //     categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //   },
  // };

  return (
    <>
      <TopBar />
      {/* <Chart options={options} series={series} type="line" height={350} /> */}
    </>
  );
}
