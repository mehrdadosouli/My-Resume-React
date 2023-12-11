import React from 'react'
import { HiPaintBrush } from "react-icons/hi2";
import { TbDeviceImac } from "react-icons/tb";
import { GiPhotoCamera } from "react-icons/gi";
import { SiInteractiondesignfoundation } from "react-icons/si";
import image1 from '../../../photos/image-1.jpg'
export default function AbouteSelf() {
  return (
    <>
        <div className="container flex md:flex-row flex-col-reverse md:items-start items-center py-16">
            <div className='md:w-3/4 flex flex-col items-end'>
                <div className='mt-10 md:mt-0 flex flex-col items-end gap-5'>
                    <h3 className='text-left lg:text-[60px] md:text-[30px] font-MorabbaBold'>Bring passion to</h3>
                    <h3 className='text-left pl-5 lg:text-[60px] md:text-[20px] font-MorabbaBold text-white bg-black md:w-[60rem] w-[40rem] tracking-widest'>everything I do</h3>
                    <p className='text-left my-10 max-w-'>Praesent vitae lacinia lacus, rutrum pellentesque dolor. Suspendisse posuere congue odio congue </p>
                </div>
                <div className="flex justify-between w-full [&>*]:ltr-dir mb-20 [&>*]:font-bold">
                    <div className='flex items-center gap-5 w-6/12'>
                        <TbDeviceImac className='sm:w-[50px] sm:h-[50px]' />    
                        <span className='text-2xl sm:text-4xl font-MorabbaBold'>Development</span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <HiPaintBrush className='sm:w-[50px] sm:h-[50px]'/>    
                        <span className='text-2xl sm:text-4xl font-MorabbaBold'>Web Design</span>
                    </div>
                </div>
                <div className="flex justify-between w-full [&>*]:ltr-dir [&>*]:font-bold">
                    <div className='flex items-center gap-5 w-6/12'>
                    <SiInteractiondesignfoundation className='sm:w-[50px] sm:h-[50px]'/>   
                        <span className='text-2xl sm:text-4xl font-MorabbaBold'>Copywriting</span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <GiPhotoCamera className='sm:w-[5rem] sm:h-[5rem]'/>   
                        <span className='text-2xl sm:text-4xl font-MorabbaBold'>Photography</span>
                    </div>
                </div>
            </div>
            <div className='flex lg:justify-center lg:items-center md:max-w-[500px] md:pr-24 md:pt-20'>
                <div className='relative h-fit'>
                    <img className='w-[100%] h-auto z-10' src={image1} alt="" />
                    <div className='bg-black w-[100%] z-[-10] h-[100%] absolute lg:bottom-[-10px] lg:right-[-12px] md:right-[-6px] md:top-3 top-3 right-[-10px]'></div>
                </div>
            </div>
        </div>
    </>
  )
}
