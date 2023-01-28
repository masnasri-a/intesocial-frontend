import React from 'react'
import Logo from '@/../public/LogoFull.svg'
import Image from 'next/image'
function Index() {
  return (
    <>
    <div className="bg-all">
        <div className="loginForm">
            <Image src={Logo} alt="logo"/>
        </div>
    </div>
    </>
  )
}

export default Index