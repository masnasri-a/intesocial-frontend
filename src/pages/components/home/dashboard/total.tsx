import React, { useEffect, useState } from 'react'
import { RiUser5Line } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";


const Total = (props:any) => {
    const [icon, setIcon] = useState(<RiUser5Line size={30}/>)
    useEffect(()=>{
        if (props.menu == "User"){
            setIcon(<RiUser5Line size={30}/>)
        }else if(props.menu == "Tweet"){
            setIcon(<FiTwitter size={30}/>)
        }else if(props.menu == "News"){
            setIcon(<IoNewspaperOutline size={30}/>)
        }
    },[props.menu])
  return (
    <div className='total'>
        <div className="side"></div>
        <div className="top">
        <p>Total {
            props.menu?props.menu:null
        } : <span>50.000</span></p>
        {
            icon
        }
        </div>
        
    </div>
  )
}

export default Total