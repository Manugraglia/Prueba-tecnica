import React, { useEffect } from "react";
import { logo } from "../../assets/images/images";
import { IntroStyle } from "./intro-style";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

const Intro = () => {
  let mySwiper: any = null;

  const [active, setActive] = useState(false);

  useEffect(() => {
    mySwiper = new Swiper(".swiper-container", {
      speed: 2000,
      direction: 'vertical', 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },

    });
  }, []);

  return (
    <IntroStyle>
    <Navbar />
      <div className="App">
        <div className="slider-container">
          <div className="swiper-container">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div className="swiper-slide">
                <div className="name">
                  <h3>Jeaper K.Thomas</h3>
                  <h2>Dunes Anthrazite Black</h2>
                  <h3>Lorem ipsum dolor sit amet consectetur adipisi repudiandae illo. Qui, aliquid harum cupiditate dolores commodi ex mollitia fugiat quasi!</h3>
                </div>
                  <img className="mesa" src="Mesa negra.png" alt="" />
              </div>
              <div className="swiper-slide">
              <div className="name">
                <h3>Jeaper K.Thomas</h3>
                <h2>Dunes Anthrazite Black</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisi repudiandae illo. Qui, aliquid harum cupiditate dolores commodi ex mollitia fugiat quasi!</h3>
                </div>
                <img className="silla" src="Silla negra.png" alt="" />
              </div>
            </div>
            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- If we need scrollbar --> */}
            <div className="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
      {/* <!-- If we need navigation buttons --> */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </IntroStyle>
  );
};

export default Intro;
