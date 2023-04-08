import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaTasks } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";

ChartJs.register(Tooltip, ArcElement, Legend);

const loading = true;

const Box = ({ title, value }) => {
  return (
    <div>
      <h3>
        {title === "Income" && "₹"}
        {value}
      </h3>
      <p>{title}</p>
    </div>
  );
};
const Dashboard = () => {
    const data = {
    labels:["Preparing","Shipped","Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 5],
        backgroundColor: [
          "rgba(158,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(158,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        border: 1,
      },
    ],
  };

  return (
    <section className="dashboard">
     {
       loading === false ?  <main>
       <article>
         <Box title={"Users"} value={212} />
         <Box title={"Oders"} value={12} />
         <Box title={"Income"} value={8700} />
       </article>
       <section>
         <div>
           <Link to="/admin/orders">
             <FaTasks />
             View Orders
           </Link>
           <Link to="/admin/users">
             <FaUser />
             View Users
           </Link>
         </div>
         <aside>
           <Doughnut data={data} />
         </aside>
       </section>
     </main>:<Loader/>
     }
    </section>
  );
};

export default Dashboard;
