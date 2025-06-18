  "use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    country: "Dubai",
    image: "/img/avatars/1/2.png",
    text: "It has been a pleasure working with them over the past few years. They listen to your needs and help with your selection, they make it easy.",
  },
  {
    country: "New York, US",
    image: "/img/avatars/1/1.png",
    text: "What else can I say, all good in every way. Top quality, lightning fast shipment, friendly communication. You are one of the reasons I always buy from Shivaay.",
  },
  {
    country: "China",
    image: "/img/avatars/1/3.png",
    text: "Shivaay was very helpful and I was able to purchase a beautiful diamond at a great price! Looking forward for further business thanks.",
  },
  {
    country: "Japan",
    image: "/img/avatars/1/4.png",
    text: "All very nice guy who support me nice service and diamond. Hope can do more with them and keep longtime friendship! May your company business boom!",
  },
];

const OurClients = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef(null);

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="layout-pt-md layout-pb-lg bg-light-1">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-xl-5 col-lg-6">
            <div>
              <h2 className="text-40 md:text-30 sm:text-24 lh-11">
                Feedback from Our Clients &amp; Visitors
              </h2>
              <p className="lh-17 mt-20">
                We take pride in the experiences we create for our clients and
                visitors. Here’s what they have to say:
              </p>
            </div>
            <div className="d-flex items-center mt-40 md:mt-20">
              <div className="text-60 text-sec">4.88</div>
              <div className="ml-30">
                <div className="">Google Ratings</div>
                <div className="d-flex x-gap-5">
                  <div className="ratings">
                    <Image
                      src="/img/ratings.png"
                      alt="ratings"
                      width={100}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 h-testimonial-w">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              speed={500}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <div className="d-flex items-center">
                      <Image
                        src={slide.image}
                        alt={slide.country}
                        className="size-80"
                        width={80}
                        height={80}
                      />
                      <div className="ml-20">
                        <h5>Client from {slide.country}</h5>
                      </div>
                    </div>
                    <div className="lh-17 pr-20 mt-40 lg:mt-20">
                      {slide.text}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination pt-50 md:pt-30 d-flex items-center fw-500">
              {slides.map((_, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`number cursor-hover-target ${
                      activeIndex === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePaginationClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {`0${index + 1}`}
                  </span>
                  {index !== slides.length - 1 && (
                    <span
                      className={`line ${
                        activeIndex === index + 1 ? "line-filled" : ""
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
