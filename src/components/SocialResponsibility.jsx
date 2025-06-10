"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import api from "../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { postData } from "../utils/apiMethods";

export const getData = async () => {
  const res = await postData("api/socialActivity/getAllApi");
  return res?.data || [];
};

export default function SocialResponsibility() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["socialActivity"],
    queryFn: getData,
  });

  const [activeIndex, setActiveIndex] = useState(1);
  const filteredData = data?.filter((item) => item.isActive) || [];


  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  

  return (
    <>
      <section className="layout-pt-md">
        <div className="container layout-pb-sm">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div
                className="text-15 sm:text-13 uppercase mb-5"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Committed to Making a Difference
              </div>
              <h2
                className="text-34 md:text-30 sm:text-24 capitalize"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Social Responsibility
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="verticalSlider-images relative z-0 bg-accent-3">
        {/* Background Images */}
        <div className="sectionBg -left-2 w-1/2 lg:w-1/1 z-2">
          <div className="verticalSlider-images__images">
            {filteredData.map((item, index) => (
              <div
                key={item._id}
                className={index === activeIndex ? "is-active" : ""}
              >
                <Image
                  src={`${api.defaults.baseURL}/${item?.socialActivityphoto}`}
                  alt={item?.title || "Social responsibility image"}
                  className="img-ratio"
                  width={1920}
                  height={1080}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Slider */}
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4 offset-lg-7">
              <div className="verticalSlider__wrap">
                <Swiper
                  initialSlide={activeIndex}
                  className="verticalSlider"
                  direction="vertical"
                  spaceBetween={130}
                  slidesPerView={1}
                  centeredSlides={true}
                  loop={true}
                  mousewheel={true}
                  pagination={{
                    el: ".js-verticalSlider-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="pagination__item">0${
                        index + 1
                      }</span>`;
                    },
                  }}
                  modules={[Pagination, Mousewheel]}
                  onSlideChange={handleSlideChange}
                  onInit={(swiper) => {
                    swiper.pagination.init();
                    swiper.pagination.render();
                  }}
                  breakpoints={{
                    1200: { slidesPerView: 3 }, // xl-3
                    992: { slidesPerView: 3 }, // lg-3
                    768: { slidesPerView: 1 }, // md-1
                    576: { slidesPerView: 1 }, // sm-1
                    0: { slidesPerView: 1 }, // base-1
                  }}
                >
                  {filteredData.map((item) => (
                    <SwiperSlide key={item._id}>
                      <div className="d-flex items-center h-full">
                        <div>
                          <div className="sr-icon">
                            <Image
                              src={`${api.defaults.baseURL}/${item?.socialActivityIcon}`}
                              alt={item?.title || "Icon"}
                              width={50}
                              height={50}
                            />
                          </div>
                          <h4 className="text-30 lg:text-30 sm:text-20 text-white mt-20">
                            {item?.title}
                          </h4>
                          <p className="text-17 text-white mt-10">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="verticalSlider__nav js-verticalSlider-pagination"></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
