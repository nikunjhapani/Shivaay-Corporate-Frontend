"use client"
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { postData } from "../utils/apiMethods";
import { useQuery } from "@tanstack/react-query";
import { useIsClient } from "./AOSProvider";

export const getStats = async () => {
  const res = await postData("/api/counters/getAllApi");
  return (res?.data || []).filter((item) => item.isActive);
};

const CounterSection = () => {

  const isClient = useIsClient();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });
  return (
    <section className="layout-pt-md" ref={ref}>
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-10 col-lg-11">
            <div className="row y-gap-30 justify-between">
              {/* Render stats dynamically */}
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-auto col-6"
                  {...(isClient && {
                    "data-aos": "fade-up",
                    "data-aos-offset": "0",
                    "data-aos-duration": 1000,
                  })}
                >
                  <h3 className="text-60 lg:text-40 sm:text-34 lh-1">
                    {inView ? (
                      <CountUp
                        end={parseInt(item.count)}
                        duration={3}
                        suffix={item.count.slice(-1)}
                      />
                    ) : (
                      "0"
                    )}
                  </h3>
                  <div className="uppercase lh-1.1 mt-10">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
