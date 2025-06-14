'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { postData } from '../utils/apiMethods';
import { useQuery } from '@tanstack/react-query';
import api from '../utils/axios';

export const getsliderData = async () => {
    const res = await postData("/api/cms/getAllApi");
    return res?.data || [];
};

export default function HeroSlider() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["innovation"],
        queryFn: getsliderData,
    });
    return (
        <section className="pt-90 sm:pt-40 layout-pb-md bg-accent-1">
            <div data-anim-wrap className="container">
                <div className="pt-50">
                    {isLoading ? (
                        <p>Loading slider...</p>
                    ) : isError ? (
                        <p>Failed to load slider. Please try again later.</p>
                    ) : (
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
                            {data?.filter((item) => item.isActive).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Link
                                        href={`/${item.page_link}`}
                                        className="baseCard -type-1 -hover-image-scale rounded-16"
                                    >
                                        <div className="baseCard__image ratio ratio-33:45 aspect-[33/45]">
                                            <div className="-hover-image-scale__image">
                                                <Image
                                                    src={`${api.defaults.baseURL}/${item.page_image}`}
                                                    alt={item.page_title}
                                                    className="img-ratio"
                                                    width={300}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                        <div className="baseCard__content d-flex flex-column justify-end text-center">
                                            <h4 className="text-24 md:text-20 text-white">{item.page_title}</h4>
                                            <div className="text-white text-13 mt-10">READ MORE</div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )
                    }

                </div>
            </div>
        </section>
    );
}
