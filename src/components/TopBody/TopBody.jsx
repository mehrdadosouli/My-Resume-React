import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCircleArrowDown } from "react-icons/fa6";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './topbody.css';

// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const TopBody = () => {
  const clickToBottom=()=>{
    window.scroll({
      top: 100,
      behavior: "smooth",
    });
  }
    return (
        <>
        <div className='absolute text-red-900 flex rotate-90 top-[30rem] right-[-14rem] font-MorabbaBold'>
          <span><a className='mr-10' href="#">FACEBOOK</a></span>
          <span><a className='mr-10' href="#">TELEGRAM</a></span>
          <span><a className='mr-10' href="#">INSTAGRAM</a></span>
        </div>
      <div className='container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <div onClick={clickToBottom} className='flex justify-center text-[3rem] mt-20 relative'>
          <div className='anime absolute right-0 left-0 mx-auto top-[-10px]'>
          </div>
          <div className='animeh absolute right-0 left-0 mx-auto top-[-14px]'>
          </div>
            <FaCircleArrowDown />
        </div>
     </div>
      </>
    );
};

export default TopBody;