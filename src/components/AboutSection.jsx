"use client";

import React from "react";
import Image from "next/image";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import { useQuery } from "@tanstack/react-query";
import { postData } from "../utils/apiMethods";
import api from "../utils/axios";
import Link from "next/link";
export const getAboutImages = async () => {
  const res = await postData("api/about/getAllApi");
  return res?.data || [];
};

export default function About() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["about"],
    queryFn: getAboutImages,
  });
  return (
    <section className="about -type-1 layout-pt-md">
      <div className="container">
        <div className="about__images">
          {data
            ?.filter((item) => item.isActive)
            .map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1000"
                key={item.id || index}
              >
                <Image
                  src={`${api.defaults.baseURL}${item?.aboutImage}`}
                  alt="image"
                  className="rounded-16"
                  width={500}
                  height={500}
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
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  SHIVAAY JEWELS
                </Typography>
                <Typography variant="body" className="lh-17 text-justify">
                  Welcome to Shivaay Jewels, where the legacy of jewelry-making
                  intertwines with creativity and innovation. For over 35 years,
                  we have dedicated ourselves to producing exquisite jewelry
                  pieces that go beyond ornamentation, offering a timeless
                  reflection of personal stories. From our first design to the
                  present-day masterpieces, we proudly showcase a perfect blend
                  of traditional craftsmanship and modern techniques.
                </Typography>
              </div>

              <div>
                <Link href="/our-journey">
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
