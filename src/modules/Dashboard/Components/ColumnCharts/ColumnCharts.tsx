import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function ColumnCharts() {
  const [series] = useState([
    {
      name: "Revenue",
      data: [15000, 17200, 16800, 18500, 19800, 21000, 22500, 23800, 25000],
    },
    {
      name: "Free Cash Flow",
      data: [6000, 7200, 6900, 8100, 8800, 9200, 9800, 10400, 11000],
    },
    {
      name: "Net Profit",
      data: [4200, 5100, 4800, 6000, 6700, 7100, 7600, 8200, 8800],
    },
  ]);

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    yaxis: {
      title: { text: "Sum (сом)" },
      labels: {
        formatter: (val: number) =>
          `${Math.round(val).toLocaleString("ru-RU")} сом`,
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) =>
          `${Math.round(val).toLocaleString("ru-RU")} сом`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
}
