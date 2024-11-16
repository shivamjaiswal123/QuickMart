import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HeroSlider({ slides }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image} alt=""/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroSlider;
