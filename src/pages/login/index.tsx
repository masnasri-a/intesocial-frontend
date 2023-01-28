import React from 'react'
import Logo from '@/../public/LogoFull.svg'
import Image from 'next/image'
import InputAuth from '../components/auth/inputAuth'
import ButtonAuth from '../components/auth/buttonAuth'
function Index() {
  return (
    <>
      <div className="bg-all">
        <div className="loginForm">
          <div>
            <Image src={Logo} alt="logo" className='logoAuth' />
          </div>
          <p>Intelligance Social Analytic</p>
          <InputAuth placeholder={'username'} />
          <InputAuth type={'password'} placeholder={'password'} />
          <ButtonAuth text={'Sign In'}/>
        </div>
      </div>
    </>
  )
}

export default Index