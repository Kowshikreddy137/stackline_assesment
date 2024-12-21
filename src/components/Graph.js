import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = ({ sales }) => {
  // Extract unique months from sales data
  const months = [
    ...new Set(
      sales.map((sale) =>
        new Date(sale.weekEnding).toLocaleString("default", { month: "short" })
      )
    ),
  ];

  const data = {
    labels: months,
    datasets: [
      {
        label: "Retail Sales",
        data: sales.map((sale) => sale.retailSales),
        borderColor: "#4caf50",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Wholesale Sales",
        data: sales.map((sale) => sale.wholesaleSales),
        borderColor: "#2196f3",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    layout: {
      backgroundColor: "#fcfcfc", 
    },
  };

  return (
    <div className="graph">
      <h2 className="graph-title">Retail Sales</h2>
      <div className="chart-container" style={{ width: "100%", height: "400px" }}  >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
