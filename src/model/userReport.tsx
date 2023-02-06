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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],
  datasets: [
    {
      label: "Total User",
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",

      data: [
        1, 2, 3, 4, 5, 6, 7, 9, 9, 10, 11, 12, 13, 15, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
//   width: 900,
  plugins: {
    legend: {
      position: "top" as const,
    }
  },
};

const UserReport = () => {
  return <div className="userReport">
    <Line data={data}
  width={500}
  height={300}
   options={options} />
  </div>;
};

export default UserReport;
