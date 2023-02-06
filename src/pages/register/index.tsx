import React from 'react'
import Logo from '@/../public/LogoFull.svg'
import Image from 'next/image'
import InputAuth from '../components/auth/inputAuth'
import ButtonAuth from '../components/auth/buttonAuth'
import Link from 'next/link'
function Index() {
  return (
    <>
      <div className="bg-all">
        <div className="loginForm">
          <div>
            <Image src={Logo} alt="logo" className='logoAuth' />
          </div>
          <p>Intelligence Social <br /> Analytic</p>
          <InputAuth placeholder={'username'} />
          <InputAuth placeholder={'full name'} />
          <InputAuth placeholder={'email'} />
          <InputAuth type={'password'} placeholder={'password'} />
          <InputAuth type={'password'} placeholder={'confirmation password'} />
          <ButtonAuth text={'Sign Up'}/>
          <span>Have an account? <Link href="/login">Sign In</Link></span>

        </div>
      </div>
    </>
  )
}

export default Index