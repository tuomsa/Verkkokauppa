import React, { useRef, useState } from "react";
import Bike from './imgVid/productImg/bicycle1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        breakpoints={{  

          481: {
            slidesPerView: 2,
            slidesPerGroup:2,
            spaceBetween: 10
          },
          769: {
            slidesPerView: 3,
            slidesPerGroup:3,
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
        <SwiperSlide id="eka"><a><img src={Bike} /></a>
          <p>Tähän voi sitten kirjotella mitä ikinä lystää!!</p>
        </SwiperSlide>
        <SwiperSlide>Sasa</SwiperSlide>
        <SwiperSlide>Juha</SwiperSlide>
        <SwiperSlide>Tuomas</SwiperSlide>
        <SwiperSlide>Ville</SwiperSlide>
        <SwiperSlide>Mika</SwiperSlide>
        <SwiperSlide>????</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}