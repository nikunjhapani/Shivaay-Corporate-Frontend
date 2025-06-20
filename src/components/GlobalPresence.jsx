"use client";
import React from "react";
import Button from "./ui/Button";
import { postData } from "../utils/apiMethods";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import api from "../utils/axios";
import { useIsClient } from "./AOSProvider";

export const GlobalPresenceData = async () => {
  const res = await postData("/api/banner/getAllApi");
  return res?.data || [];
};

export default function GlobalPresence() {
  const isClient = useIsClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["GlobalPresence"],
    queryFn: GlobalPresenceData,
  });

  const banner = data?.find((item) => item.pageName === "Our Global Presence");

  return (
    <section className="global-bg-section">
      {["video", "image"].includes(banner?.bannerType) &&
        (banner.bannerType === "video" ? (
          <>
            <video width="100%" className="desktop-v" autoPlay loop muted>
              <source
                src={`${api.defaults.baseURL}${banner?.desktopImage}`}
                type="video/mp4"
              />
            </video>
            <video width="100%" className="mobile-v" autoPlay loop muted>
              <source
                src={`${api.defaults.baseURL}${banner?.mobileImage}`}
                type="video/mp4"
              />
            </video>
          </>
        ) : (
          <>
            <Image
              src={`${api.defaults.baseURL}${banner?.desktopImage}`}
              alt={banner.bannerTitle}
              width={1920}
              height={800}
              className="hidden md:block w-full object-cover"
            />
            <Image
              src={`${api.defaults.baseURL}${banner?.mobileImage}`}
              alt={banner.bannerTitle}
              width={768}
              height={500}
              className="md:hidden w-full object-cover"
            />
          </>
        ))}

      <div className="global-text-p">
        <div className="container">
          <div className="col-lg-6">
            <div
              {...(isClient && {
                "data-aos": "fade-right",
                "data-aos-offset": "0",
                "data-aos-duration": 1500,
              })}
            >
              {/* <div className="text-15 sm:text-13 uppercase mb-5 text-white">
                A Worldwide Influence in Jewelry Design
              </div> */}
              <h2 className="text-34 md:text-30 sm:text-24 text-white mb-20">
                {banner?.bannerTitle}
              </h2>
              <p
                className="text-white text-17 sm:text-13 lh-17"
                dangerouslySetInnerHTML={{
                  __html: (banner?.description || "").replace(/<\/?p>/g, ""),
                }}
              />
              {banner?.bannerLink && (
                <Link href={banner.bannerLink}>
                  <Button
                    className="button -type-1 text-white mt-40"
                    iconColor="white"
                  >
                    READ MORE
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
