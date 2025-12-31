import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function PieCharts() {
  const series = [45, 30, 15, 8, 2];

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Instagram", "TikTok", "Paid Ads", "Word of Mouth", "Other"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${Math.round(val)}%`,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} students`,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="pie_bg">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
}
