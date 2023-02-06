import AccountProfile from "@/model/accountProfile";
import UserReport from "@/model/userReport";
import React from "react";
import Total from "../components/home/dashboard/total";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left">
        <p className="title">Overview</p>
        <div className="overview">
          <Total menu="User" />
          <Total menu="Tweet" />
          <Total menu="News" />
        </div>
        <div className="">
          <p>User Report</p>
          <div className="chart">
            <UserReport />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="">
          <p>Account Profile</p>
          <div className="chart">
            <AccountProfile />
          </div>
        </div>
      </div>
      <div className="left2">
        
      </div>
    </div>
  );
};

export default Dashboard;
