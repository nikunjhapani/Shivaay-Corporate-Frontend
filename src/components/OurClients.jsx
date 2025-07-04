"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import api from "../utils/axios";

const OurClients = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [slides, setSlides] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch(
          `${api.defaults.baseURL}api/ourClients/getAllApi`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
          }
        );
        const data = await res.json();

        const filteredSortedSlides = (data?.data || [])
          .filter((item) => item.isActive)
          .sort((a, b) => (a.sort_order_no || 0) - (b.sort_order_no || 0));

        setSlides(filteredSortedSlides);
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    fetchSlides();
  }, []);

  const handlePaginationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      {slides.length > 0 && (
        <>
          <section className="layout-pt-md layout-pb-lg bg-light-1">
            <div className="container">
              <div className="row y-gap-30 justify-between">
                <div className="col-xl-5 col-lg-6 align-content-center">
                  <div>
                    <h2 className="text-36 md:text-30 sm:text-24 lh-11">
                      Feedback from <br /> Our Clients &amp; Visitors
                    </h2>
                    <p className="lh-17 mt-20">
                      We take pride in the experiences we create for our clients and
                      visitors. Here’s what they have to say:
                    </p>
                  </div>
                  <div className="d-flex items-center mt-40 md:mt-20">
                    <div className="text-60 text-sec">4.88</div>
                    <div className="ml-30">
                      <div>Google Ratings</div>
                      <div className="d-flex x-gap-5">
                        <div className="ratings">
                          <Image
                            src="/img/ratings.png"
                            alt="ratings"
                            width={100}
                            height={20}
                            style={{ height: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 h-testimonial-w">
                  <>
                    <Swiper
                      modules={[Navigation]}
                      autoplay={true}
                      spaceBetween={30}
                      slidesPerView={1}
                      speed={500}
                      onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex + 1)
                      }
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                      {slides.map((slide, i) => (
                        <SwiperSlide key={i}>
                          <div>
                            <div className="d-flex items-center">
                              <Image
                                src={`${api.defaults.baseURL}${slide.icon}`}
                                alt={slide.name}
                                className="size-80"
                                width={80}
                                height={80}
                              />
                              <div className="ml-20">
                                <h5>Client from {slide.name}</h5>
                              </div>
                            </div>
                            <div
                              className="lh-17 pr-20 mt-40 lg:mt-20"
                              dangerouslySetInnerHTML={{
                                __html: slide.description,
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className="custom-pagination pt-50 md:pt-30 d-flex items-center fw-500">
                      {slides.map((_, index) => (
                        <React.Fragment key={index}>
                          <span
                            className={`number cursor-hover-target ${activeIndex === index + 1 ? "active" : ""
                              }`}
                            onClick={() => handlePaginationClick(index)}
                            style={{ cursor: "pointer" }}
                          >
                            {`0${index + 1}`}
                          </span>
                          {index !== slides.length - 1 && (
                            <span
                              className={`line ${activeIndex === index + 1 ? "line-filled" : ""
                                }`}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default OurClients;
