"use client";

import React from "react";
import Image from "next/image";
import Typography from "./ui/Typography";
import Button from "./ui/Button";

export default function About() {
  return (
    <section className="about -type-1 layout-pt-md">
      <div className="container">
        <div className="about__images">
          <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000">
            <Image
              src="/img/about/12/1.png"
              alt="image"
              className="rounded-16"
              width={500}
              height={500}
            />
          </div>

          <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000">
            <Image
              src="/img/about/12/2.png"
              alt="image"
              className="rounded-16"
              width={500}
              height={500}
            />
          </div>

          <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000">
            <Image
              src="/img/about/12/3.png"
              alt="image"
              className="rounded-16"
              width={500}
              height={500}
            />
          </div>
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
                <a href="/our-journey.html">
                  <Button icon className="mx-auto mt-30 md:mt-20">DISCOVER MORE</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
