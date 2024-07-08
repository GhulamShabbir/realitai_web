import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const OurAchievement = () => {
  return (
    <section className="section achievements">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Achievements
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Achievements</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="achievements__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                className="achievements__slider"
                breakpoints={{
                  1200: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  400: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/one.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/two.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/three.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/four.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/five.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/one.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/two.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/three.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/four.png"} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={"/images/achievement/five.png"} alt="Image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;
