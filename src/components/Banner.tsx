"use client";
import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import Image from "next/image";
import CareerForm from "./CareerForm";
import { useIsClient } from "./AOSProvider";
import Home from "../../public/img/banners/Home.jpg";

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
  const isClient = useIsClient();
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await api.post("api/banner/getAllApi", { pageName });
        const Filter = res.data?.data?.filter(
          (item: BannerItem) => item.pageName === pageName && item.isActive
        );
        setBanners(Filter);
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchBanners();
  }, [pageName]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (loader) {
    return (
      <section className="hero -type-1 z-1">
        <div className="video-overlay01"></div>
        <div className="hero__bg">
          <Image
            src={Home}
            alt="Video Placeholder"
            width={1920}
            height={800}
            className="w-full object-cover absolute top-0 left-0 z-0"
            priority
          />
        </div>
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-8 col-lg-10">
              <h1 className="hero__title text-white">Creativity & Innovation</h1>
              <div className="hero__content">
                <div className="hero__subtitle text-white">
                  Jewelry-Making Intertwines With
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (banners.length === 0) return null;

  return (
    <>
      {banners.map((banner) => {
        const isVideo = banner.bannerType === "video";
        const cleanDescription = banner.description?.replace(/^<p>|<\/p>$/g, "");

        return (
          <React.Fragment key={banner._id}>
            {pageName === "Career" ? (
              <section
                className="job-section"
                style={{
                  backgroundImage: `url(${api.defaults.baseURL}${banner.desktopImage})`,
                }}
              >
                <div className="container">
                  <div className="row justify-center text-center">
                    <div className="col-xl-6 col-lg-6 d-flex items-center text-left">
                      <div>
                        <h1 className="hero__title text-white">{banner.bannerTitle}</h1>
                        <div className="hero__content">
                          <div
                            className="hero__subtitle text-white text-justify"
                            dangerouslySetInnerHTML={{
                              __html: cleanDescription,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 job-bg">
                      <CareerForm />
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section className="hero -type-1 z-1">
                <div className="video-overlay01"></div>
                <div className="hero__bg">
                  {isVideo ? (
                    <>
                      {!videoLoaded[banner._id] && (
                        <Image
                          src={Home}
                          alt="Video Placeholder"
                          width={1920}
                          height={800}
                          className="w-full object-cover absolute top-0 left-0 z-0 transition-opacity duration-500 ease-in-out"
                          priority
                        />
                      )}
                      <video
                        width="100%"
                        className={isMobile ? "mobile-v" : "desktop-v"}
                        autoPlay
                        loop
                        // muted
                        playsInline
                        preload="auto"
                        onLoadedData={() =>
                          setVideoLoaded((prev) => ({ ...prev, [banner._id]: true }))
                        }
                        onError={() =>
                          setVideoLoaded((prev) => ({ ...prev, [banner._id]: false }))
                        }
                      >
                        <source
                          src={`${api.defaults.baseURL}${isMobile ? banner.mobileImage : banner.desktopImage
                            }`}
                          type="video/mp4"
                        />
                      </video>
                    </>
                  ) : (
                    <>
                      <Image
                        src={`${api.defaults.baseURL}${banner.desktopImage}`}
                        alt={banner.bannerTitle}
                        width={1915}
                        height={1122}
                        className="hidden md:block w-full object-cover"
                      />
                      <Image
                        src={`${api.defaults.baseURL}${banner.mobileImage}`}
                        alt={banner.bannerTitle}
                        width={520}
                        height={650}
                        className="md:hidden w-full object-cover"
                      />
                    </>
                  )}
                </div>

                <div className="container">
                  <div className="row justify-center text-center">
                    <div className="col-xl-8 col-lg-10">
                      <h1
                        className="hero__title text-white"
                        {...(isClient && {
                          "data-aos": "fade-up",
                          "data-aos-offset": "0",
                          "data-aos-duration": "1000",
                        })}
                      >
                        {banner.bannerTitle}
                      </h1>
                      <div className="hero__content">
                        <div
                          className="hero__subtitle text-white"
                          {...(isClient && {
                            "data-aos": "fade-up",
                            "data-aos-offset": "0",
                            "data-aos-duration": "1000",
                          })}
                          dangerouslySetInnerHTML={{ __html: cleanDescription }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
