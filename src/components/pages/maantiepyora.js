import React, { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

//Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/carousel.css";


export default function Maantiepyorat(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(props.url + '/maantiepyora.php')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error.response.data)
        alert(error);
      });
  }, [])


  return (
    <>
      <div className="main">
        <h1 id="header">Maantiepyörät</h1>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={10}

          breakpoints={{

            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 5
            },
            769: {
              slidesPerView: 4,
              slidesPerGroup: 1,
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

          {products.map(item => (
            <SwiperSlide key={item.id}>
              <div className="productcard">
                <img id="plogo" src={'/components/productImg/' + item.tuotemerkki + ".png"} />
                <h5 className="productname">{item.tuotemalli}</h5>
                <img className="productimg" src={item.kuva} alt="" />
                <p className="productdescription">{item.kuvaus}</p>
                <h4 className="value">{item.hinta} €</h4>
                <button className="buybutton">Osta</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

