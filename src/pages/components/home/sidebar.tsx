import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/../public/LogoFull.svg";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTwitter, FaUserInjured } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";
import Link from "next/link";

const Sidebar = (props:any) => {
    const [active, setActive] = useState(0)
  let menu = [
    {
      logo: <MdSpaceDashboard />,
      title: "Dashboard",
    },
    {
      logo: <FaTwitter />,
      title: "Social Media",
    },
    {
      logo: <SiGooglenews />,
      title: "Online News",
    },
    {
      logo: <FaUserInjured />,
      title: "Profile",
    },
  ];

  const selectActive = (param:number)=>{
    setActive(param)
  }


  return (
    <div className="SidebarHome">
        <Link href="/home">
      <Image src={Logo} alt="logo" className="logo" />
      </Link>
      {menu.map((detail: any, index) => {
        return (
          <div key={index} onClick={()=>{
            props.valueMenu(detail.title)
            selectActive(index)}
            } className={(active == index)?"menusactive":"menus"}>
            {detail.logo}
            <span>{detail.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
