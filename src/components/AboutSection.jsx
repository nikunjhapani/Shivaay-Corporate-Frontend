"use client";

import React from "react";
import Image from "next/image";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import { useQuery } from "@tanstack/react-query";
import { postData } from "../utils/apiMethods";
import api from "../utils/axios";
import Link from "next/link";
import { useIsClient } from "./AOSProvider";
export const getAboutImages = async () => {
  const res = await postData("api/about/getAllApi");
  return (res?.data || []).filter((item) => item.isActive);
};

export const getsData = async () => {
  const res = await postData("api/menu/getAllApi");
  return res?.data || [];
};

export default function About() {
  const isClient = useIsClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["about"],
    queryFn: getAboutImages,
  });

  const {
    data: menuData,
    isLoading: isMenuLoading,
    isError: isMenuError,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: getsData,
  });

  const items = Array.isArray(menuData)
    ? menuData.filter(
      (item) => item.menuType === "CMS" && item.menuName === "Our Journey"
    )
    : [];
  return (
    <section className="about -type-1 layout-pt-md">
      <div className="container">
        <div className="about__images">
          {data
            ?.filter((item) => item.isActive)
            .map((item, index) => (
              <div
                {...(isClient && {
                  "data-aos": "zoom-in",
                  "data-aos-offset": "0",
                  "data-aos-duration": "1000",
                })}
                key={item.id || index}
              >
                <Image
                  src={`${api.defaults.baseURL}${item?.aboutImage}`}
                  alt="image"
                  className="rounded-16"
                  width={500}
                  height={500}
                  priority
                  
                />
              </div>
            ))}
        </div>
        <div className="about__content01 mt-40">
          <div className="row justify-center text-center">
            <div className="col-xl-8 col-lg-10">
              <div>
                <Typography
                  variant="h2"
                  className="about__title"
                  {...(isClient && {
                    "data-aos": "fade-up",
                    "data-aos-offset": "0",
                    "data-aos-duration": "1000",
                  })}
                >
                  SHIVAAY JEWELS
                </Typography>
                <Typography
                  variant="body"
                  className="lh-17 text-justify text-truncate-five"
                >
                  {items[0]?.cmsId?.page_editor?.replace(/<\/?[^>]+(>|$)/g, "")}
                </Typography>
              </div>

              <div>
                <Link href={`/${items[0]?.menuURL || ""}`}>
                  <Button icon className="mx-auto mt-30 md:mt-20">
                    DISCOVER MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
