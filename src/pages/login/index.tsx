import React from 'react'
import Logo from '@/../public/LogoFull.svg'
import Image from 'next/image'
import InputAuth from '../components/auth/inputAuth'
import ButtonAuth from '../components/auth/buttonAuth'
import Router from 'next/router'
import Link from 'next/link'
function Index() {

  const login = () => {
    localStorage.setItem('access_token', 'test')
    console.log(localStorage.getItem('access_token'));
    Router.push('/home');
  }
  return (
    <>
      <div className="bg-all">
        <div className="loginForm">
          <div>
            <Image src={Logo} alt="logo" className='logoAuth' />
          </div>
          <p>Intelligence Social <br /> Analytic</p>
          <InputAuth placeholder={'username'} />
          <InputAuth type={'password'} placeholder={'password'} />
          <ButtonAuth onClick={login} text={'Sign In'}/>
          <span>Dont have an account? <Link href="/register">Sign Up</Link></span>
        </div>
      </div>
    </>
  )
}

export default Index