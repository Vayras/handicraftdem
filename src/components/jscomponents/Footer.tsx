import React from 'react'
import {FiMail} from 'react-icons/fi';
import {TbDeviceLandlinePhone} from 'react-icons/tb'


const Footer = () => {
  return (
    <div className='w-full bg-black'>
        <div className='w-full mx-auto mt-[3rem] flex justify-between bg-black'>
            <div>
                <div className='flex bg-black '>
                    <img src='../logo-no-background.svg' alt='' className='h-[7rem]'></img>
                    <p className='w-[34rem] md:w-[24rem] md:ml-[0.5rem] lg:text-[3rem] md:text-[2rem] font-bold   mt-2 '>Arihant Art Exports</p>
                </div>
                <div className='flex gap-3 justify-start text-[1.125rem] font-semibold text-start ml-[0.95rem]'>
                    <div className='mt-[1.5rem] ml-8'>
                    <p className=''>331 A Mahavir Puram City</p>
                    <p className=''>CHB Jodhpur Rajasthan</p>
                    <p className='text-[#9f9f9f]'>India Pin 342008 </p>
                    </div>
                </div>
            </div> {/*logo and*/} 
            <div className=' justify-start text-[1.125rem] font-semibold text-start ml-[0.95rem]'>
                <p className='w-[34rem]  text-white lg:text-[3rem] md:text-[2rem] font-bold mb-[3.2rem] '>Connect With Us....</p>
                <p className='w-[34rem]  text-[#9f9f9f] text-[1.3rem] font-semibold'>Mail us on this link or call us for more queries</p>
                <div className='flex items-center gap-4 font-sans font-semibold text-[1.125rem]'>
                    <FiMail className=' flex p-1 text-[2rem] rounded-full bg-transparent bg-slate-500'/>
                    <p>Sayamgolia@gmail.com</p>
                </div>
                <div className='flex items-center gap-4 font-sans font-semibold text-[1.125rem] mt-1s'>
                    <TbDeviceLandlinePhone className=' flex p-1 text-[2rem] rounded-full bg-transparent bg-slate-500'/>
                    <p> +91 1234567890</p>
                </div>
            </div>
        </div>
        <div className='h-[2rem] bg-[#b88e2f] mt-3 flex justify-center text-[#fff3e3]'>
            <p>This Website is created By SUPER-BALLE agency. If you want to create your website mail us at superballe@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer