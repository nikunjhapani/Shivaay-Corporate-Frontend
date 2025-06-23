"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/axios";

const getMenuData = async () => {
  const res = await fetch(`${api.defaults.baseURL}api/menu/getAllApi`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });
  const data = await res.json();
  return Object.values(data).flat();
};

export default function HeroSlider() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["menuData"],
    queryFn: getMenuData,
  });

  const cmsMenu = data?.filter((item: any) => item.menuType === "CMS");

  return (
    <section className="pt-90 sm:pt-40 layout-pb-md bg-accent-1">
      <div className="container">
        <div className="pt-50">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              nextEl: ".js-slider4-next",
              prevEl: ".js-slider4-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="js-section-slider"
          >
            {cmsMenu?.map((item: any) => (
              <SwiperSlide key={item?._id} className="baseCard -type-1 -hover-image-scale">
                <div className="baseCard__image ratio ratio-33:45 aspect-[33/45] rounded-16">
                  <div className="-hover-image-scale__image">
                    <Image
                      src={`${api.defaults.baseURL}${item?.cmsId?.page_image}`}
                      alt={item?.cmsId?.page_title || "CMS Image"}
                      className="img-ratio"
                      width={300}
                      height={400}
                      priority
                      
                    />
                  </div>
                </div>
                <Link href={`/${item?.menuURL}`} className="">
                  <div className="baseCard__content d-flex flex-column justify-end text-center">
                    <h4 className="text-24 md:text-20 text-white">
                      {item?.cmsId?.page_title}
                    </h4>
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
