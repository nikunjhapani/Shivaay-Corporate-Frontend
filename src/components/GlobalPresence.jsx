"use client";
import React from "react";
import Button from "./ui/Button";
import { postData } from "../utils/apiMethods";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import api from "../utils/axios";

export const GlobalPresenceData = async () => {
  const res = await postData("/api/banner/getAllApi");
  return res?.data || [];
};

export default function GlobalPresence() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["GlobalPresence"],
    queryFn: GlobalPresenceData,
  });

  const banner = data?.find((item) => item.pageName === "Our Global Presence");

  return (
    <section className="global-bg-section">
      {banner?.bannerType === "video" ? (
        <>
          <video width="100%" className="desktop-v" autoPlay loop muted>
            <source
              src={`${api.defaults.baseURL}/${banner.desktopImage}`}
              type="video/mp4"
            />
          </video>
          <video width="100%" className="mobile-v" autoPlay loop muted>
            <source
              src={`${api.defaults.baseURL}/${banner.mobileImage}`}
              type="video/mp4"
            />
          </video>
        </>
      ) : null}

      <div className="global-text-p">
        <div className="container">
          <div className="col-lg-6">
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <div className="text-15 sm:text-13 uppercase mb-5 text-white">
                A Worldwide Influence in Jewelry Design
              </div>
              <h2 className="text-34 md:text-30 sm:text-24 text-white mb-20">
                {banner?.bannerTitle}
              </h2>
              <p
                className="text-white text-17 sm:text-13 lh-17"
                dangerouslySetInnerHTML={{
                  __html: banner?.description?.replace(/<\/?p>/g, ""),
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
