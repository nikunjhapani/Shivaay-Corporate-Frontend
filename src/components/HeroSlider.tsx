'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlider({ sliderData }) {
    return (
        <section className="pt-90 sm:pt-40 layout-pb-md bg-accent-1">
            <div className="container">
                <div className="pt-50">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={2}
                        navigation={{
                            nextEl: '.js-slider4-next',
                            prevEl: '.js-slider4-prev',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                        className="js-section-slider"
                    >
                        {sliderData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    href={item.link}
                                    className="baseCard -type-1 -hover-image-scale rounded-16"
                                >
                                    <div className="baseCard__image ratio ratio-33:45 aspect-[33/45]">
                                        <div className="-hover-image-scale__image">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                className="img-ratio"
                                                width={300}
                                                height={400}
                                                placeholder="blur"
                                                blurDataURL="/img/cards/placeholder.png" // Optional small placeholder

                                            />
                                        </div>
                                    </div>
                                    <div className="baseCard__content d-flex flex-column justify-end text-center">
                                        <h4 className="text-24 md:text-20 text-white">{item.title}</h4>
                                        <div className="text-white text-13 mt-10">READ MORE</div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
