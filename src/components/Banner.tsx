"use client";
import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import Image from "next/image";
import Link from "next/link";

type BannerItem = {
  _id: string;
  bannerType: "image" | "video";
  bannerTitle: string;
  bannerLink: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  sort_order_no: number;
  isActive: boolean;
  pageName: string;
};
type Props = {
  pageName: string;
};

export default function Banner({ pageName }: Props) {
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await api.post("/api/banner/getAllApi", { pageName });
        const Filter = res.data?.data?.filter(
          (item: BannerItem) =>
            item.pageName === pageName && item.isActive === true
        );
        console.log(Filter);
        setBanners(Filter);
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();

    console.log(banners,'Awards & Certificates');
  }, [pageName]);
  if (loading) return <p>Loading banners...</p>;
  if (banners.length === 0) return null;
  return (
    <section className="hero -type-1 z-1">
      <div className="video-overlay01"></div>

      {banners.map((banner) => {
        const isVideo = banner.bannerType === "video";
        const cleanDescription = banner.description?.replace(/^<p>|<\/p>$/g, '');
        return (
          <>
            <section className="hero -type-1 z-1" key={banner._id}>
              <div className="video-overlay01"></div>
              <div className="hero__bg">
                {isVideo ? (
                  <>

                    <video
                      width="100%"
                      className="desktop-v"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={`${api.defaults.baseURL}/${banner.desktopImage}`} type="video/mp4" />
                    </video>
                    <video
                      width="100%"
                      className="mobile-v"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={`${api.defaults.baseURL}/${banner.desktopImage}`} type="video/mp4" />
                    </video></>
                ) : (
                  <>
                    <Image
                      src={`${api.defaults.baseURL}/${banner.desktopImage}`}
                      alt={banner.bannerTitle}
                      width={1920}
                      height={800}
                      className="hidden md:block w-full object-cover"
                    />
                    <Image
                      src={`${api.defaults.baseURL}/${banner.mobileImage}`}
                      alt={banner.bannerTitle}
                      width={768}
                      height={500}
                      className="md:hidden w-full object-cover"
                    />
                  </>
                )}

              </div>

              <div className="container">
                <div className="row justify-center text-center">
                  <div className="col-xl-8 col-lg-10">
                    <div className="hero__content">
                      <div
                        className="hero__subtitle text-white"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                        dangerouslySetInnerHTML={{ __html: cleanDescription }} >

                      </div>

                      <h1
                        className="hero__title text-white"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        {banner.bannerTitle}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </section>
  );
}
