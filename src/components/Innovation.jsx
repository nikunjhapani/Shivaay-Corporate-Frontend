"use client";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { postData } from "../utils/apiMethods";
import api from "../utils/axios";
import Link from "next/link";
export const getInnovation = async () => {
  const res = await postData("/api/innovation/getAllApi");
  return (res?.data || []).filter((item) => item.isActive);
};

const InnovationCard = ({
  title,
  subtitle,
  description,
  index,
  setActiveIndex,
}) => (
  <div
    className="imageCard -type-1 -hover-1"
    onMouseEnter={() => setActiveIndex(index)}
    onFocus={() => setActiveIndex(index)}
  >
    <div className="imageCard__content text-white">
      <div className="-hover-1-slide">
        <div className="uppercase mb-10 md:mb-5">{subtitle}</div>
        <h3 className="text-30 md:text-24 text-white">{title}</h3>
      </div>
      <div className="-hover-1-content">
        <div className="lh-17 mt-20 w-full max-w-md">
          <div>{description}</div>
        </div>
        <div className="d-flex mt-30">
          <Link href="/artistry-innovationl">
            <button className="button -md -type-2 -outline-white text-white">
              Discover More
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const InnovationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["innovation"],
    queryFn: getInnovation,
  });
  return (
    <>
      <section className="layout-pt-md">
        <div className="container layout-pb-sm">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h2
                className="text-34 md:text-30 sm:text-24"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Artistry & Innovation
              </h2>
              <div
                className="text-15 sm:text-13 uppercase mb-5"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Where Tradition Meets Cutting-Edge Design
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative hoverTitleInteraction">
        <div className="sectionBg">
          <div className="hoverTitleInteraction__images -type-2">
            {data
              ?.filter((item) => item.isActive)
              .map((item, index) => (
                <Image
                  key={item?._id}
                  src={`${api.defaults.baseURL}${item.innovationImage}`}
                  alt={item.title || "title"}
                  fill
                  priority
                  className={clsx("img-cover", {
                    "is-active": activeIndex === index,
                    "opacity-0": activeIndex !== index,
                  })}
                  style={{
                    transition: "opacity 0.5s ease",
                    opacity: activeIndex === index ? 1 : 0,
                    zIndex: activeIndex === index ? 1 : 0,
                  }}
                />
              ))}
          </div>
        </div>

        <div className="row border-row-1 hoverTitleInteraction__links">
          {data
            ?.filter((item) => item.isActive)
            .map((item, index) => (
              <div className="col-md-4" key={item._id}>
                <InnovationCard
                  title={item.title}
                  subtitle={item.subTitle}
                  description={item.description}
                  index={index}
                  setActiveIndex={setActiveIndex}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default InnovationSection;
