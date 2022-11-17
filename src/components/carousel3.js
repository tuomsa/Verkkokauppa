import React, { useRef, useState } from "react";
//Pictures
import Bike from './imgVid/productImg/bicycle1.png'
import Cyclist from './imgVid/productImg/cyclist.png'
import KidBike from './imgVid/productImg/kid-bike.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel3() {
  return (
    <>
    <div className="main">
      <Swiper
        slidesPerView={5}
        slidesPerGroup={1}
        spaceBetween={10}
        
        breakpoints={{  

          481: {
            slidesPerView: 2,
            slidesPerGroup:2,
            spaceBetween: 10
          },
          769: {
            slidesPerView: 5,
            slidesPerGroup:1,
            spaceBetween: 10
          }

        }}

        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide id="Maantiepyora"><a><img src={KidBike} /></a></SwiperSlide>
        <SwiperSlide>Sasa</SwiperSlide>
        <SwiperSlide>Juha</SwiperSlide>
        <SwiperSlide> <p>ERILAINEN 3</p> <a><img src={Cyclist} /></a> </SwiperSlide>
        <SwiperSlide>Ville</SwiperSlide>
        <SwiperSlide>Mika</SwiperSlide>
        <SwiperSlide>????</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}