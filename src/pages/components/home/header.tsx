import Image from 'next/image'
import React from 'react'
import pp from '@/../public/profile.jpg'
const Header = (props:any) => {
  return (
    <div className="headers">
        <span>{props.menu}</span>
        <Image src={pp} width={45} height={45} className="headerImage" alt="profile" />
    </div>
  )
}

export default Header