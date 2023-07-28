"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import NFT_1 from "../public/nft-1.png";
import NFT_2 from "../public/nft-2.png";
import NFT_3 from "../public/nft-3.png";
import NFT_4 from "../public/nft-4.png";
import NFT_5 from "../public/nft-5.png";
import NFT_6 from "../public/nft-6.png";
import NFT_7 from "../public/nft-7.png";
import NFT_8 from "../public/nft-8.png";

import { useState } from "react";

const data = [
  {
    image: NFT_1,
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_2,
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
  {
    image: NFT_3,
    id: "4456",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_4,
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_5,
    id: "3253",
    gen: 3,
    multiplier: 4,
  },
  {
    image: NFT_6,
    id: "4456",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_7,
    id: "1741",
    gen: 2,
    multiplier: 1,
  },
  {
    image: NFT_8,
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
