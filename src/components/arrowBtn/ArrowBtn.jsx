import React from 'react'
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
export default function ArrowBtn() {
  return (
    <div className='container gap-5 flex'>
        <span className='w-16 h-16 inline-flex justify-center items-center border border-gray-700 rounded-full'><IoIosArrowForward  /></span>
        <span className='w-16 h-16 inline-flex justify-center items-center border border-gray-700 rounded-full'><IoIosArrowBack /></span>
    </div>
  )
}
