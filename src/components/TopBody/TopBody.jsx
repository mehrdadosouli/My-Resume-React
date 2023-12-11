import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../photos/image-1.jpg'
import image2 from '../../../photos/image2.jpg'
import './TopBody.css'
const TopBody = () => {
    return (
        <>
          {/* <Swiper
        // direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
     <Carousel>
                <div className='image'>
                    <img src={image1}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div className='image'>
                    <img src={image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='image'>
                    <img src={image1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    );
};

export default TopBody;