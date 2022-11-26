import React, { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

//Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/carousel.css"; 

export default function Sahkopyorat(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(props.url + '/sahkopyora.php')
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      }).catch(error => {
        console.log(error.response.data)
        alert(error);
      });
  }, []);

  return (
    <>
      <div className="main">
          <h1 id="header">Sähköpyörät</h1>
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
                <img id="plogo" className="plogo" src={'/productImg/' + item.tuotemerkki + ".png"} />
                <h5 className="productname">{item.tuotemalli}</h5>
                <a className="shop-link" href="#"><i id="productcart" className="fa-solid fa-cart-plus fa-xl"></i></a>
                <div id="imagecontainer" className="imagecontainer">
                  <img id="bikepicture" className="bikepicture" src={'/productImg/' + item.tuotemerkki + "_" + item.tuotemalli + ".png"} />
                </div>
                {/*item.kuvaus} laitetaan Loremin tilalle kun saadaan pyöriin lisättyä tietoja*/}
                <p className="productdescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores hic, quibusdam accusamus sunt ipsa esse magnam in explicabo recusandae nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi at, animi explicabo quod beatae v</p>
                <h4 className="value">{item.hinta} €</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}