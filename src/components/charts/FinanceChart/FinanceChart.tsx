import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./FinanceChart.css";

// Registrar los elementos necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const data1 = {
  labels: ["Ingresos", "Gastos", "Ahorros"],
  datasets: [
    {
      data: [65, 25, 10],
      backgroundColor: ["#4caf50", "#f44336", "#2196f3"],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ["Ventas", "Marketing", "I+D"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ["#ff9800", "#8bc34a", "#9c27b0"],
      borderWidth: 1,
    },
  ],
};

const data3 = {
  labels: ["Activos", "Pasivos", "Capital"],
  datasets: [
    {
      data: [70, 20, 10],
      backgroundColor: ["#3f51b5", "#e91e63", "#00bcd4"],
      borderWidth: 1,
    },
  ],
};

const data4 = {
  labels: ["Banca", "Inversiones", "Créditos"],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ["#ff5722", "#795548", "#607d8b"],
      borderWidth: 1,
    },
  ],
};

const data5 = {
  labels: ["Cuentas a Pagar", "Cuentas a Cobrar", "Eficiencia"],
  datasets: [
    {
      data: [40, 50, 10],
      backgroundColor: ["#8bc34a", "#cddc39", "#ffeb3b"],
      borderWidth: 1,
    },
  ],
};

const data6 = {
  labels: ["Rendimiento", "Riesgos", "Proyección"],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ["#2196f3", "#f44336", "#4caf50"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`;
        },
      },
    },
  },
  animation: {
    duration: 1500,
    easing: "easeInOutQuad",
  },
};

const FinanceCharts = () => {
  return (
    <div className="charts-main-container">
      <h2>Financial Charts - Component: FinanceChart - Library: charts.js</h2>
      <div className="charts-container">
        <div className="chart">
          <Doughnut data={data1} options={options} />
        </div>
        <div className="chart">
          <Doughnut data={data2} options={options} />
        </div>
        <div className="chart">
          <Doughnut data={data3} options={options} />
        </div>
        <div className="chart">
          <Doughnut data={data4} options={options} />
        </div>
        <div className="chart">
          <Doughnut data={data5} options={options} />
        </div>
        <div className="chart">
          <Doughnut data={data6} options={options} />
        </div>
      </div>
    </div>
  );
};

export default FinanceCharts;
