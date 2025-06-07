'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image'

export default function SocialResponsibility() {
  const verticalSlides = [
    {
      icon: '/img/icon/environmentalsust-ainability.svg',
      title: 'Environmental Sustainability',
      text:
        'Our commitment to environmental stewardship is reflected in our initiative to plant over 50,000 trees to date. With an ambitious goal of reaching 500,000 trees in the coming years.',
    },
    {
      icon: '/img/icon/employeewelfare.svg',
      title: 'Employee Welfare',
      text:
        'We place the well-being of our employees at the heart of our operations by offering free mediclaim coverage to all team members.',
    },
    {
      icon: '/img/icon/aidprogram.svg',
      title: 'Widow’s Aid Program',
      text:
        'As part of our commitment to social responsibility, we proudly support over 100 widows by providing consistent financial assistance.',
    },
  ]

  return (
    <>
      {/* Section Title */}
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

      {/* Vertical Slider Section */}
      <section className="verticalSlider-images relative z-0 bg-accent-3">
        <div className="sectionBg -left-2 w-1/2 lg:w-1/1 z-2">
          <div className="verticalSlider-images__images">
            <div className="is-active">
              <Image
                src="/img/about/20/2.png"
                alt="image"
                className="img-ratio"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/img/about/20/3.png"
                alt="image"
                className="img-ratio"
                width={500}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/img/about/20/1.png"
                alt="image"
                className="img-ratio"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4 offset-lg-7">
              <div className="verticalSlider__wrap">
                <div
                  className="verticalSlider js-verticalSlider"
                  data-gap="130"
                  data-vertical
                  data-slider-cols="xl-3 lg-3 md-1 sm-1 base-1"
                  data-pagination="js-verticalSlider-pagination"
                >
                  <div className="swiper-wrapper flex-column h-auto">
                    {verticalSlides.map((slide, idx) => (
                      <div className="swiper-slide d-flex items-center" key={idx}>
                        <div>
                          <div className="sr-icon">
                            <Image
                              src={slide.icon}
                              alt={slide.title}
                              width={60}
                              height={60}
                            />
                          </div>
                          <h4 className="text-30 lg:text-30 sm:text-20 text-white mt-20">
                            {slide.title}
                          </h4>
                          <p className="text-17 text-white mt-10">{slide.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="verticalSlider__nav js-verticalSlider-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
