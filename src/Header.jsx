import React from 'react'
import logo from './assets/logo.png'
import { FaBars } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";

function Header() {
  function OpenMenu(){
    let Menubar = document.getElementById('Menubar')
  if(Menubar.style.height == '0px'){
      Menubar.style.height = '300px'
    Menubar.style.transition = '.6s ease-in-out'
    }
   else{
       Menubar.style.height = '0px'
    Menubar.style.transition = '.6s ease-in-out'
    }
  }
  return (
    <>
        <header className='flex justify-between md:justify-evenly lg:justify-evenly items-center h-[80px] px-5 lg:px-0 fixed w-full bg-white top-0 z-50'>
            <img className='w-[200px]' src={logo} alt="" />
            <ul className='flex justify-center items-center gap-8 hidden md:flex lg:flex flex-wrap'>
                <li className='text-[#0aa8a7] font-[500]'>Home</li>
                <li className='font-[500]'>Blog</li>
                <li className='font-[500]'>Pricing</li>
                <li className='font-[500]'>Contact</li>
                <li className='font-[500]'>FAQ</li>
            </ul>
            <button className='bg-[#0aa8a7] w-[150px] h-[50px] rounded-[24px] text-white font-[500] hidden md:flex lg:flex justify-center items-center'>Get Started</button>
            <div className='md:hidden lg:hidden'><FaBars  onClick={OpenMenu} className='text-[1.5em]' /></div>
        </header>

        <div id='Menubar' className='bg-white w-[100vw] h-[0px] overflow-hidden fixed top-[80px] z-100'>
          <ul className='flex flex-col justify-center items-center gap-5  flex-wrap'>
                      <li className='text-[#0aa8a7] font-[500]'>Home</li>
                      <li className='font-[500]'>Blog</li>
                      <li className='font-[500]'>Pricing</li>
                      <li className='font-[500]'>Contact</li>
                      <li className='font-[500]'>FAQ</li>
                    <button className='bg-[#0aa8a7] w-[130px] h-[44px] rounded-[24px] text-white font-[500]  justify-center items-center'>Get Started</button>

                  </ul>
        </div>
    </>
  )
}

export default Header
