import { useEffect, useState } from "react";
import Router from "next/router";
import Sidebar from "../components/home/sidebar";
import Header from "../components/home/header";
import Dashboard from "./dashboard";
export default function Home() {
  const checkLogin = () => {
    const access_token = window.localStorage.getItem("access_token");
    if (!access_token) {
      Router.push("/login");
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);

  const [menuName, setMenuName] = useState("Dashboard") 
  return (
    <>
      <div className="bg-soft">
        <Sidebar valueMenu={setMenuName}/>
        <div className="">
            <Header menu={menuName}/>
            <Dashboard />
        </div>
      </div>
    </>
  );
}
