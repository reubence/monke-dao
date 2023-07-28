"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import { useState } from "react";

const data = [
  {
    image: "/../public/nft-1.png",
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: "/../public/nft-2.png",
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
  {
    image: "/../public/nft-3.png",
    id: "4456",
    gen: 2,
    multiplier: 1,
  },
  {
    image: "/../public/nft-4.png",
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: "/../public/nft-5.png",
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
  {
    image: "/../public/nft-6.png",
    id: "4456",
    gen: 2,
    multiplier: 1,
  },
  {
    image: "/../public/nft-7.png",
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: "/../public/nft-8.png",
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
];

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
      {data.map((item, i) => {
        return (
          <SwiperSlide key={i} className="!flex">
            <Image
              src={item.image} // dynamically sets the src attribute
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
