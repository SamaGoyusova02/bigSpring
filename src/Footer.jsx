import React from 'react'
import logo from './assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

function Footer() {
  return (
    <>
       <footer className='bg-[#edf6f5]'>
         <div className='bg-[#edf6f5] gap-6 lg:gap-0 flex flex-col lg:flex-row justify-start pl-4 lg:pl-0  lg:justify-evenly lg:items-center mt-20 pt-15'>
            <ul className='flex flex-col gap-2'>
                <li className='text-[1.7em] font-[500]'>Company</li>
                <li className='text-[#777777] mt-2'>Pricing</li>
                <li className='text-[#777777]'>Quick Start</li>
            </ul>

            <ul  className='flex flex-col gap-2'>
                <li className='text-[1.7em] font-[500]'>Product</li>
                <li className='text-[#777777] mt-2'>Features</li>
                <li className='text-[#777777]'>Platform</li>
                <li className='text-[#777777]'>Pricing</li>
            </ul>

            <ul  className='flex flex-col gap-2'>
                <li className='text-[1.7em] font-[500]'>Support</li>
                <li className='text-[#777777] mt-2'>FAQ</li>
                <li className='text-[#777777]'>Privacy Policy</li>
                <li className='text-[#777777]'>Terms & Conditions</li>
            </ul>

            <ul  className='flex flex-col gap-2'>
                <li><img src={logo} alt="" /></li>
                <li className='text-[#777777] mt-2'>Lorem ipsum dolor sit amet, <br/> consectetur elit. Consjat tristique <br/> eget amet, tempus eu at cttur.</li>
                <li className='mt-3 flex gap-4'>
                    <p className='w-[36px] h-[36px] text-[#0aa8a7] border rounded-[50%] flex justify-center items-center hover:bg-[#0aa8a7] hover:text-white duration-300 ease-in-out' ><FaFacebook /></p>
                    <p className='w-[36px] h-[36px] text-[#0aa8a7] border rounded-[50%] flex justify-center items-center hover:bg-[#0aa8a7] hover:text-white duration-300 ease-in-out' ><FaTwitter /></p>
                    <p className='w-[36px] h-[36px] text-[#0aa8a7] border rounded-[50%] flex justify-center items-center hover:bg-[#0aa8a7] hover:text-white duration-300 ease-in-out' ><FaLinkedin /></p>
                    <p className='w-[36px] h-[36px] text-[#0aa8a7] border rounded-[50%] flex justify-center items-center hover:bg-[#0aa8a7] hover:text-white duration-300 ease-in-out' ><FaSkype /></p>
                </li>
            </ul>
        </div>
        <hr className='text-[#777777] mx-20 my-8' />
        <div className='text-center pb-6 text-[#777777] px-3'><p>Designed and Developed By <span className='text-[#3a3838]'>Themefisher</span> • Distributed by <span className='text-[#3a3838]'>ThemeWagon</span></p></div>
       </footer>
    </>
  )
}

export default Footer
