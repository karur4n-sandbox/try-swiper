import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Home: NextPage = () => {
  return (
    <div className="bg-green-900 h-screen">
      <div className="pt-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={5.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides
          loop
          pagination
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-4 rounded h-64">
                <p className="font-bold">Slide {i + 1}</p>
                <p>Fooo</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
