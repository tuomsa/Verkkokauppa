import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles/carousel.css";  // tuote css muokkaus

//Pictures(BIKE)
import Bike1 from './imgVid/productImg/bicycle1.png';
import Bike2 from './imgVid/productImg/cyclist.png';
import Bike3 from './imgVid/productImg/kid-bike.png'

//Pictures(LOGO)
import Scott from './imgVid/productImg/scott.png'
import Specialize from './imgVid/productImg/specialize.png'


export default function Carousel1() {
  return (
    <>
    <div className="main">
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={10}
        
        breakpoints={{  

          481: {
            slidesPerView: 2,
            slidesPerGroup:2,
            spaceBetween: 5
          },
          769: {
            slidesPerView: 4,
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
          <SwiperSlide>
            <div className="productcard">
              <img id="plogo" src={Scott} alt="logo" />
              <h5 className="productname">Tuotenimi</h5>
              <img className="productimg" src={Bike1} />
              <p className="productdescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam neque iusto atque at cupiditate illum est explicabo sint nesciunt sit dolorum repudiandae</p>
              <button className="buybutton">Osta</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productcard">
              <img id="plogo" src={Specialize} />
              <h5 className="productname">Tuotenimi</h5>
              <img className="productimg" src={Bike2} />
              <p className="productdescription"><ul>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora..</li>
              <li>--</li>
              <li>hahmottelu</li>
              </ul></p>
              <button className="buybutton">Osta</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productcard">
              <img id="plogo" src={Scott} alt="logo" />
              <h5 className="productname">Tuotenimi</h5>
              <img className="productimg" src={Bike3} />
              <p className="productdescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam neque iusto atque at cupiditate illum est explicabo sint nesciunt sit dolorum repudiandae</p>
              <button className="buybutton">Osta</button>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}