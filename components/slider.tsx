"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import { useState } from "react";

const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  return (
    <Swiper
      spaceBetween={6}
      slidesPerView={slidesPerView}
      scrollbar={{
        hide: true,
        draggable: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      {[...Array(8)].map((_, i) => {
        return (
          <SwiperSlide key={i} className="!flex">
            <Image
              src={`/../public/nft-${i + 1}.png`}
              alt="Monkey"
              width={300}
              height={300}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
