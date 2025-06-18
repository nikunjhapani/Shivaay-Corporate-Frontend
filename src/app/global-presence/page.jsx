"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "../../components/Banner";
import OurClients from "../../components/OurClients";
import { postData } from "../../utils/apiMethods";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/axios";
import { getTabData, capabilityData } from "../../utils/tabData";
import Image from "next/image";

export default function page() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["tabData"],
    queryFn: getTabData,
  });
    const {
    data: featuresData,
    isLoading: isFeatureLoading,
    isError: isFeatureError,
  } = useQuery({
    queryKey: ['globalCapability'],
    queryFn: capabilityData,
  });
  const [activeTab, setActiveTab] = useState(null);
  useEffect(() => {
    if (data && data.length > 0) {
      setActiveTab(data[0]._id);
    }
  }, [data]);

  return (
    <div>
      <Banner pageName="Our Global Presence" />
      <section className="layout-pb-md bg-light-1">
        <div className="container">
          <div className="row y-gap-40 layout-pt-md">
            {featuresData
              ?.filter((item) => item?.isActive)
              .map((feature, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-lg-3 col-md-6 col-6"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  // data-aos-duration={feature.duration}
                >
                  <div className="flex flex-col justify-center items-center text-center bg-white h-full min-h-[250px] sm:py-6 px-4 sm:px-2 rounded-8">
                    <div className="mb-4">
                      <Image
                        src={`${api.defaults.baseURL}${feature?.icon}`}
                        alt={`Feature ${index + 1}`}
                        className="w-[60px] h-[60px] object-contain mx-auto"
                        width={60}
                        height={60}
                      />
                    </div>
                    <h4 className="text-20 lg:text-20 sm:text-17">
                      {feature?.label}
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="layout-pb-md">
        <div className="row y-gap-40">
          <div className="col-lg-12">
            <div className="tabs -underline-2">
              <div className="tabs__controls mt-3 justify-center row x-gap-30 lg:x-gap-20">
                {data
                  ?.filter((item) => item.isActive)
                  .map((location) => (
                    <div className="col-auto" key={location._id}>
                      <button
                        className={`tabs__button fw-500 pb-15 ${
                          activeTab === location._id ? "is-tab-el-active" : ""
                        }`}
                        onClick={() => setActiveTab(location._id)}
                      >
                        {location.countryName}
                      </button>
                    </div>
                  ))}
              </div>
              <div className="tabs__content layout-pb-sm layout-pt-sm">
                <AnimatePresence mode="wait">
                  {data
                    ?.filter((item) => item.isActive)
                    .map((location, index) =>
                      activeTab === location._id ? (
                        <motion.div
                          key={location.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.5 }}
                          className="tabs__pane is-tab-el-active"
                        >
                          <div className="container">
                            {index % 2 === 0 ? (
                              <div className="row y-gap-40 justify-between items-center">
                                <div
                                  className="col-xl-6 col-lg-6"
                                  data-aos="zoom-in"
                                  data-aos-offset="0"
                                  data-aos-duration="1000"
                                >
                                  <Image
                                    className="rounded-8"
                                    src={`${api.defaults.baseURL}${location.globalImage}`}
                                    alt={location.countryName}
                                    width={600}
                                    height={400}
                                  />
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                  <h2
                                    className="text-30 md:text-24 sm:text-24"
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-duration="1000"
                                  >
                                    {location.countryName}
                                  </h2>
                                  <div
                                    className="lh-17 text-15 sm:text-13 mt-15 mb-10 text-justify"
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-duration="1000"
                                    dangerouslySetInnerHTML={{
                                      __html: location.description,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            ) : (
                              <div className="row y-gap-40 justify-between items-center">
                                <div className="col-xl-6 col-lg-6">
                                  <h2
                                    className="text-30 md:text-24 sm:text-24"
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-duration="1000"
                                  >
                                    {location.name}
                                  </h2>
                                  <div
                                    className="lh-17 text-15 sm:text-13 mt-15 mb-10 text-justify"
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-duration="1000"
                                    dangerouslySetInnerHTML={{
                                      __html: location.description,
                                    }}
                                  ></div>
                                </div>
                                <div
                                  className="col-xl-6 col-lg-6"
                                  data-aos="zoom-in"
                                  data-aos-offset="0"
                                  data-aos-duration="1000"
                                >
                                  <Image
                                    className="rounded-8"
                                    src={`${api.defaults.baseURL}${location.globalImage}`}
                                    alt={location.countryName}
                                    width={600}
                                    height={400}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ) : null
                    )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurClients />
    </div>
  );
}
