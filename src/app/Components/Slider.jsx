"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="w-full = mx-auto py-4">
      <Swiper
        slidesPerView={'1.4'}
        spaceBetween={15}
        pagination={{
          el: ".swiper-pagination",
          clickable: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/01.jpg" className='w-full max-sm:h-24 md:rounded-2xl' alt="" /></SwiperSlide>
        <SwiperSlide><img src="/02.jpg" className='w-full max-sm:h-24  md:rounded-2xl' alt="" /></SwiperSlide>
        <SwiperSlide><img src="/03.jpg" className='w-full max-sm:h-24  md:rounded-2xl' alt="" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};


export default Slider;
