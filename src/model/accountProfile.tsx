import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "Account Gender",
      fill: true,
      borderColor: ["rgb(255, 99, 132)", "rgba(75, 192, 192)"],
      backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(75, 192, 192, 0.2)"],
      data: [70, 30],
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
    },
  },
};

const AccountProfile = () => {
  return (
    <>
      <div className="accountProfile">
        <div className="">
          <Doughnut data={data} height={350} options={options} />
        </div>
        <div className="gender">
          <div className="male">
            <div className="dflex jcc aic">
              <div className="colmale"></div>
              <span>Male</span>
            </div>
            <p>70%</p>
          </div>
          <div className="female">
            <div className="dflex jcc aic">
              <div className="colfemale"></div>
              <span>Female</span>
            </div>
            <p>30%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountProfile;
