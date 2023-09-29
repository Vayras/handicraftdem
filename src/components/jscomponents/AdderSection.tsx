import React from 'react'
import { HiOutlineTrophy } from 'react-icons/hi2'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'

const AdderSection = () => {
  return (
      <div className='h-72 w-screen lg:flex md:flex md:flex-row sm:flex sm:flex-col lg:flex-row justify-center items-center bg-[#FFF3E3]'>
        <span className='flex lg:ml-[2rem] mt-[3rem] items-center justify-center'>
          <div>
            <HiOutlineTrophy className="text-black w-[4.75rem] h-[4.75rem] mx-2 sm:mb-6 md:mb-0" />
          </div>
          <div className='flex flex-col text-left text-black font-semibold'>
            <h1 className='lg:text-4xl text-2xl'>High Quality</h1>
            <h2 className='lg:text-3xl'>Crafted from top materials</h2>
          </div>
        </span>
        <span className='flex lg:ml-[15.5rem] md:mt-[3rem] sm:mt-[3rem] items-center justify-center'>
          <div>
            <HiOutlineCurrencyRupee className="text-black w-[4.75rem] h-[4.75rem] mx-2" />
          </div>
          <div className='flex flex-col text-left text-black font-semibold'>
            <h1 className='lg:text-4xl text-2xl'>Affordable Prices</h1>
            <h2 className='lg:text-3xl'>  Because we want Satisfaction</h2>
          </div>
        </span>
      </div>

  );
};


export default AdderSection;