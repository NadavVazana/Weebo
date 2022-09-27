import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import 'swiper/css/autoplay'
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/sass/cmps/_swiper.scss";

// import required modules
import { EffectCoverflow,Autoplay,Pagination,Navigation  } from "swiper";
import { useNavigate } from "react-router-dom";

export function HomeSwiper() {
  const navigate = useNavigate()
  return (
    
    <>
      <Swiper

loopFillGroupWithBlank={true} 
loop={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation,EffectCoverflow]}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide style={{height:'450px'}}  onClick={()=>{navigate('/editor/34058349534609386034689')}}>
          <img className="hair-gallery-photo" src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664024878/3_jacbc9.png" />
        </SwiperSlide>
        <SwiperSlide  style={{height:'450px'}} onClick={()=>{navigate('/editor/5e28393890dd8888a06d4771')}}>
          <img src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664024877/1_babaqg.png" />
        </SwiperSlide>
        <SwiperSlide  style={{height:'450px'}} onClick={()=>{navigate('/editor/5e28393890dd8888a06d4772')}}>
          <img src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664024877/2_abxptz.png" />
        </SwiperSlide>
        <SwiperSlide  style={{height:'450px'}} onClick={()=>{navigate('/editor/63315d8388b5a7567ab940e3')}}>
          <img src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664308637/4_ty4mki.png" />
        </SwiperSlide>
        <SwiperSlide  style={{height:'450px'}} onClick={()=>{navigate('/editor/63315d83885ca7567ab91488')}}>
          <img src="https://res.cloudinary.com/ds8xkm0ue/image/upload/v1664308637/5_q011lp.png" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
