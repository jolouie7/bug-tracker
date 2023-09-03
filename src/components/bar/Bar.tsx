import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      ticks: {
        font: {
          size: 16, // Set the font size for X-axis labels
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Ticket by Priority",
      font: {
        size: 30,
      },
    },
  },
};

const labels = ["None", "Low", "Medium", "High"];
const chartData = {
  labels: labels,
  data: [2, 3, 4, 1], // Replace when API is implemented
  backgroundColor: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261"],
};

export const data = {
  labels,
  datasets: [
    {
      label: "Ticket Count",
      data: chartData.data.map((data) => data),
      backgroundColor: chartData.backgroundColor.map((color) => color),
    },
  ],
};

const BarChart = () => {
  return (
    <>
      <Bar options={options} data={data} width={800} height={400} />
    </>
  );
};

export default BarChart;
