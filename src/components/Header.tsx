import React from "react"
import { FaUser ,FaSearch, FaHeart , FaCartPlus } from 'react-icons/fa';

function Header() {
  return (
    <>
      <div className="w-screen h-20 left-0 top-0 absolute flex items-center justify-between  bg-white text-black" >
        <span className="text-3xl ml-[15rem] font-semibold ">Funrio</span>
        <span>
          <ul className="flex justify-between ml-[7rem]  gap-[3rem]">
            <li className="hover:underline decoration-4 underline-offset-4 decoration-solid font-semibold text-lg" >Home</li>
            <li className="hover:underline decoration-4 underline-offset-4 decoration-solid font-semibold text-lg">Shop</li>
            <li className="hover:underline decoration-4 underline-offset-4 decoration-solid font-semibold text-lg">About</li>
            <li className="hover:underline decoration-4 underline-offset-4 decoration-solid font-semibold text-lg">Contact</li>
          </ul>
        </span>
        <span>
        <ul className="flex justify-between gap-[3rem] mr-[15rem]">
          <li><FaUser/></li>
          <li><FaSearch/></li>
          <li><FaHeart/></li>
          <li><FaCartPlus/></li>
          </ul>
        </span>
      </div>
    </>
  )
}
export default Header