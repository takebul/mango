"use client";
import book1 from "@/assets/books/book1.png";
import book2 from "@/assets/books/book2.png";
import book3 from "@/assets/books/book3.png";
import book4 from "@/assets/books/book4.png";
import book5 from "@/assets/books/book5.png";
import book6 from "@/assets/books/book6.png";
import book7 from "@/assets/books/book7.png";
import book8 from "@/assets/books/book8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        modules={[EffectCube, Navigation, Autoplay, FreeMode]}
        effect="slide"
        speed={2000}
        loop={true}
        cubeEffect={{
          shadowOffset: 25,
          shadowScale: 0.9,
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
        }}
        mousewheel={true}
      >
        <SwiperSlide>
          <Image
            className="w-full h-[80vh]"
            src={book1}
            width={300}
            height={300}
            alt="book"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[80vh]"
            src={book2}
            width={300}
            height={300}
            alt="book"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[80vh]"
            src={book3}
            width={300}
            height={300}
            alt="book"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[80vh]"
            src={book4}
            width={300}
            height={300}
            alt="book"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[80vh]"
            src={book5}
            width={300}
            height={300}
            alt="book"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[80vh]"
            src={book6}
            width={300}
            height={300}
            alt="book"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[80vh]"
            src={book7}
            width={300}
            height={300}
            alt="book"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-[80vh]"
            src={book8}
            width={300}
            height={300}
            alt="book"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Home;
