"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import api from "../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { postData } from "../utils/apiMethods";

export const getData = async () => {
  const res = await postData("api/socialActivity/getAllApi");
  return (res?.data || []).filter((item) => item.isActive);
};

export default function SocialResponsibility() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["socialActivity"],
    queryFn: getData,
  });

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const filteredData = data?.filter((item) => item.isActive) || [];

  const containerRef = useRef(null);
  const hasActivatedOnce = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasActivatedOnce.current) {
          hasActivatedOnce.current = true;
          if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideToLoop(0);
            setActiveIndex(0);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [filteredData]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handlePaginationClick = (index) => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
      setActiveIndex(index);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !filteredData.length) return <div>No data found.</div>;

  return (
    <>
      <section className="layout-pt-md">
        <div className="container layout-pb-sm">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="text-15 sm:text-13 uppercase mb-5">
                Committed to Making a Difference
              </div>
              <h2 className="text-34 md:text-30 sm:text-24 capitalize">
                Social Responsibility
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="verticalSlider-images relative z-0 bg-accent-3">
        <div className="sectionBg -left-2 w-1/2 lg:w-1/1 z-2">
          <div className="verticalSlider-images__images">
            {filteredData.map((item, index) => (
              <div
                key={item._id}
                className={index === activeIndex ? "is-active" : ""}
              >
                <Image
                  src={`${api.defaults.baseURL}${item?.socialActivityphoto}`}
                  alt={item?.title || "Social responsibility image"}
                  className="img-ratio"
                  width={1920}
                  height={1080}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4 offset-lg-7">
              <div className="verticalSlider__wrap relative">
                <Swiper
                  ref={swiperRef}
                  direction="vertical"
                  loop={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  spaceBetween={10}
                  mousewheel={true}
                  initialSlide={0}
                  modules={[Mousewheel]}
                  className="verticalSlider"
                  onSlideChange={handleSlideChange}
                >
                  {filteredData.map((item) => (
                    <SwiperSlide key={item._id}>
                      <div className="d-flex items-center h-full">
                        <div>
                          <div className="sr-icon">
                            <Image
                              src={`${api.defaults.baseURL}${item?.socialActivityIcon}`}
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
                </Swiper>
              </div>
              <div className="verticalSlider__nav js-verticalSlider-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-vertical">
                {filteredData.map((_, index) => (
                  <span
                    key={index}
                    className={`pagination__item cursor-hover-target cursor-pointer ${activeIndex === index ? "is-active" : ""
                      }`}
                    onClick={() => handlePaginationClick(index)}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
