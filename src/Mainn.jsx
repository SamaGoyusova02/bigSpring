import React from 'react'
import banner from './assets/banner-art.svg'
import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'
import icon5 from './assets/icon5.svg'
import icon6 from './assets/icon6.svg'
import slider1 from './assets/service-slide-1.png'
import slider2 from './assets/service-slide-2.png'
import slider3 from './assets/service-slide-3.png'
import arrow from './assets/arrow-right.svg'
import banner2 from './assets/banner.svg'
import cta from './assets/cta.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



 function Mainn() {
  return (
   <>
    {/*Part 1*/}

    <div className='flex justify-center items-center flex-col gap-4 mt-12 pt-20'>
        <h2 className='lg:text-[3em] md:text-[2.5em] text-[2.3em] font-[500] lg:w-[50%] text-center'>Let us solve your critical website development challenges</h2>
        <p className='text-center lg:w-[47%] text-[#777777] px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
        <img className='lg:w-[50%] mt-8' src={banner} alt="" />
    </div>

    {/*Part 2*/}
    <div className='bg-[#edf6f5] py-15 mt-12'>
        <h2 className='text-[#222222] text-center text-[2.3em] font-[500]'>Something You Need To Know</h2>
        <div className='flex flex-col lg:flex-row flex-wrap px-3 lg:px-10 mt-10 justify-center items-center gap-5'>
            <div className='bg-white w-full max-w-[360px] py-7 rounded-[10px] flex flex-col gap-4 items-center'>
                <img className='w-[30px]' src={icon1} alt="" />
                <h2 className='font-[500] text-[1.3em]'>Clean Code</h2>
                <p className='text-[#777777] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>
              <div className='bg-white w-full max-w-[360px] py-7 rounded-[10px] flex flex-col gap-4 items-center'>
                <img className='w-[30px]' src={icon2} alt="" />
                <h2 className='font-[500] text-[1.3em]'>Object Oriented</h2>
                <p className='text-[#777777] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>
              <div className='bg-white w-full max-w-[360px] py-7 rounded-[10px] flex flex-col gap-4 items-center'>
                <img className='w-[30px]' src={icon3} alt="" />
                <h2 className='font-[500] text-[1.3em]'>24h Service</h2>
                <p className='text-[#777777] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>
              <div className='bg-white w-full max-w-[360px] py-7 rounded-[10px] flex flex-col gap-4 items-center'>
                <img className='w-[30px]' src={icon4} alt="" />
                <h2 className='font-[500] text-[1.3em]'>Value for Money</h2>
                <p className='text-[#777777] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>
              <div className='bg-white w-full max-w-[360px] py-7 rounded-[10px] flex flex-col gap-4 items-center'>
                <img className='w-[30px]' src={icon5} alt="" />
                <h2 className='font-[500] text-[1.3em]'>Faster Response</h2>
                <p className='text-[#777777] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>
              <div className='bg-white w-full max-w-[360px] py-7 rounded-[10px] flex flex-col gap-4 items-center'>
                <img className='w-[30px]' src={icon6} alt="" />
                <h2 className='font-[500] text-[1.3em]'>Cloud Support</h2>
                <p className='text-[#777777] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>
        </div>
    </div>

    {/* Part 3 */}
    <div className='flex flex-col lg:flex-row flex-wrap justify-center max-w-[1400px] mx-auto items-center gap-10 py-20 '>
        <div className=' w-full lg:w-[50%] px-3 lg:px-0 order-1 lg:-order-1 md:-order-1'>
            <h2  className='text-[#222222] text-[2em] lg:text-[2.4em] font-[500] lg:w-[80%]'>It is the most advanced digital marketing and it company.</h2>
            <p className='text-[#777777] lg:w-[72%] text-justify mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <p className='flex  items-center text-[#0aa8a7] mt-4'>Check it out <img className='w-[20px]' src={arrow} alt="" /></p>
        </div>
        <div className='w-full max-w-[500px] -order-1 lg:order-1 md:order-1'>
          <Swiper pagination={true} modules={[Pagination , Autoplay]} autoplay={{  delay: 2500,   disableOnInteraction: false, }} className="mySwiper" >
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
          </Swiper>
        </div>
    </div>

    {/* Part 4 */}
    <div  className='flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 py-20 bg-[#edf6f5] '>
            <div><img className='w-full max-w-[500px]' src={slider1} alt="" /></div>
    
         <div className='lg:w-[50%] px-3 lg:px-0 '>
            <h2  className='text-[#222222] text-[2em] lg:text-[2.4em] font-[500] lg:w-[80%] '>It is a privately owned Information and cyber security company</h2>
            <p className='text-[#777777] lg:w-[72%] text-justify mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <p className='flex  items-center text-[#0aa8a7] mt-4'>Check it out <img className='w-[20px]' src={arrow} alt="" /></p>
        </div>
    </div>

    {/*Part 5*/}
     <div className='flex flex-col lg:flex-row flex-wrap justify-center max-w-[1400px] mx-auto items-center gap-10 py-20 '>
        <div className=' w-full lg:w-[50%] px-3 lg:px-0 order-1 lg:-order-1 md:-order-1'>
            <h2  className='text-[#222222] text-[2em] lg:text-[2.4em] font-[500] lg:w-[80%]'>It’s a team of experienced and skilled people with distributions</h2>
            <p className='text-[#777777] lg:w-[72%] text-justify mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <p className='flex  items-center text-[#0aa8a7] mt-4'>Check it out <img className='w-[20px]' src={arrow} alt="" /></p>
        </div>
        <div className='w-full max-w-[500px] -order-1 lg:order-1 md:order-1'>
          <Swiper pagination={true} modules={[Pagination , Autoplay]} autoplay={{  delay: 2500,   disableOnInteraction: false, }} className="mySwiper" >
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
          </Swiper>
        </div>
    </div>

    {/*Part 6*/}
    <div className='bg-[#edf6f5]'>
         <div className='flex flex-col lg:flex-row flex-wrap justify-center max-w-[1400px] mx-auto bg-[#edf6f5] items-center gap-10 py-20 '>
        <div className='w-full max-w-[500px] '>
          <Swiper pagination={true} modules={[Pagination , Autoplay]} autoplay={{  delay: 2500,   disableOnInteraction: false, }} className="mySwiper" >
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
          </Swiper>
        </div>
         <div className=' w-full lg:w-[50%] px-3 lg:px-0 '>
            <h2  className='text-[#222222] text-[2em] lg:text-[2.4em] font-[500] lg:w-[80%]'>A company standing different from others </h2>
            <p className='text-[#777777] lg:w-[72%] text-justify mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
            <p className='flex  items-center text-[#0aa8a7] mt-4'>Check it out <img className='w-[20px]' src={arrow} alt="" /></p>
        </div>
    </div>
    </div>

    {/*Part 7*/}
     <div className='flex justify-center mt-10'><h2 className='lg:text-[2.4em]   md:text-[2.5em] text-[2.3em] font-[500]  text-center'>Experience the best <br/> workflow with us</h2></div>
    <img className='lg:mt-10 mt-5' src={banner2} alt="" />
    
    {/*Part 8*/}
    <div className='mt-15 flex flex-col lg:flex-row flex-wrap justify-center gap-7 lg:gap-5 items-center py-15 mx-3 lg:mx-[260px] shadow-[0_0_15px_#c9c9c9] rounded-[30px]'>
        <img src={cta} alt="" />
        <div className='lg:w-[50%] flex flex-col gap-3 px-3 lg:px-0 items-center justify-center lg:justify-start lg:items-start'>
            <p className='text-[2.3em] font-[500] text-center lg:text-start'>Ready to get started?</p>
            <p className='text-[#777777] lg:text-justify text-center w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.</p>
            <button className='bg-[#0aa8a7] w-[150px] h-[50px] rounded-[24px] text-white font-[500] flex justify-center items-center'>Contact Us</button>

        </div>
    </div>
   </>
  )
}

export default Mainn
