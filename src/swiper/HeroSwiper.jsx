import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
// import { Pagination } from "swiper";
import { Navigation } from "swiper";

import Model1 from '../img/model1.png'
import Model2 from '../img/model2.png'
import Model3 from '../img/model3.png'
import Model4 from '../img/model4.png'

const HeroSwiper = () => {
   const styleSlider='max-w-[273px]  hover:scale-125 duration-300'
  return (
    <div>
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"></Swiper> */}
       <Swiper 
       navigation={true} modules={[Navigation]} className="mySwiper"
        slidesPerView={4}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
      >
        
        <SwiperSlide>
            <div className="relative overflow-hidden">
                <img src={Model1} alt="" className={styleSlider}/>
                <p class="absolute text-[20px] font-light text-white bottom-0 left-1/2 -translate-x-1/2 bg-[#E0BEA2] w-full">Куртка</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative overflow-hidden">
                <img src={Model2} alt="" className={styleSlider}/>
                <p class="absolute text-[20px] font-light text-white bottom-0 left-1/2 -translate-x-1/2 bg-[#E0BEA2] w-full">Куртки</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative overflow-hidden">
                <img src={Model3} alt="" className={styleSlider}/>
                <p class="absolute text-[20px] font-light text-white bottom-0 left-1/2 -translate-x-1/2 bg-[#E0BEA2] w-full">Шуби</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative overflow-hidden">
                <img src={Model4} alt="" className={styleSlider}/>
                <p class="absolute text-[20px] font-light text-white bottom-0 left-1/2 -translate-x-1/2 bg-[#E0BEA2] w-full">Пальто</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative overflow-hidden">
                <img src={Model1} alt="" className={styleSlider}/>
                <p class="absolute text-[20px] font-light text-white bottom-0 left-1/2 -translate-x-1/2 bg-[#E0BEA2] w-full">Парки</p>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default HeroSwiper