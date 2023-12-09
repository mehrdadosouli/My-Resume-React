import React from 'react'
import { HiPaintBrush } from "react-icons/hi2";
import { TbDeviceImac } from "react-icons/tb";
import { GiPhotoCamera } from "react-icons/gi";
import { SiInteractiondesignfoundation } from "react-icons/si";
import image1 from '../../../photos/image-1.jpg'
export default function AbouteSelf() {
  return (
    <>
        <div className="container flex my-22 h-[500px] md:flex-row flex-col-reverse md:items-start items-center sm:mt-[35rem] mt-[15rem] md:mt-0 md:py-10 ">
            <div className='md:w-3/4 flex flex-col items-end'>
                <h3 className='text-left text-[60px] font-MorabbaBold'>Bring passion to</h3>
                <h3 className='text-center text-[50px] font-MorabbaBold text-white bg-black w-[45rem] tracking-widest'>everything I do</h3>
                <p className='text-left my-10'>Praesent vitae lacinia lacus, rutrum pellentesque dolor. Suspendisse posuere congue odio congue </p>
                <div className="flex justify-between w-full [&>*]:ltr-dir mb-20 [&>*]:font-bold">
                    <div className='flex items-center gap-5 w-6/12'>
                        <TbDeviceImac className='w-[50px] h-[50px]' />    
                        <span className='text-4xl font-MorabbaBold'>Development</span>
                    </div>
                    <div className='flex items-center'>
                        <HiPaintBrush className='w-[50px] h-[50px]'/>    
                        <span className='text-4xl font-MorabbaBold'>Web Design</span>
                    </div>
                </div>
                <div className="flex justify-between w-full [&>*]:ltr-dir [&>*]:font-bold">
                    <div className='flex items-center gap-5 w-6/12'>
                    <SiInteractiondesignfoundation className='w-[50px] h-[50px]'/>   
                        <span className='text-4xl font-MorabbaBold'>Copywriting</span>
                    </div>
                    <div className='flex items-center'>
                        <GiPhotoCamera className='w-[50px] h-[50px]'/>   
                        <span className='text-4xl font-MorabbaBold'>Photography</span>
                    </div>
                </div>
            </div>
            <div className='flex lg:justify-center lg:items-center md:max-w-[500px] pr-24 md:pt-20'>
                <div className='relative h-fit'>
                    <img className='w-[1000px] h-auto z-10' src={image1} alt="" />
                    <div className='bg-black w-[100%] z-[-10] h-[100%] absolute lg:bottom-[-10px] lg:right-[-12px] md:right-[-6px] md:top-3 top-5 right-[-10px] '></div>
                </div>
            </div>
        </div>
    </>
  )
}
