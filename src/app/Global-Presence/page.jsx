"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Banner from "../../components/Banner";
import OurClients from '../../components/OurClients';

const featuresData = [
  {
    icon: "/img/icon/icon01.png",
    title: "57 cities in 28 country",
    duration: 1000,
  },
  {
    icon: "/img/icon/icon02.png",
    title: "Flexible staffing options",
    duration: 1200,
  },
  {
    icon: "/img/icon/icon03.png",
    title: "Successful track recordy",
    duration: 1400,
  },
  {
    icon: "/img/icon/icon04.png",
    title: "Location diversity and business continuity",
    duration: 1600,
  },
];

const tabLocationsData = [
  {
    id: 1,
    name: "New York",
    image: "/img/JD01.jpg",
    content: `
    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.

    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.

    <br><br>
    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.`,
    imageLeft: true,
  },
  {
    id: 2,
    name: "Paris",
    image: "/img/JD01.jpg",
    content: `
    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.

    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.

    <br><br>
    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.
    `,
    imageLeft: false,
  },
  {
    id: 3,
    name: "Dubai",
    image: "/img/JD01.jpg",
    content: `
    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.

    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.

    <br><br>
    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.
    `,
    imageLeft: true,
  },
  {
    id: 4,
    name: "Hong Kong",
    image: "/img/JD01.jpg",
    content: `
    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.

    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.

    <br><br>
    Shivaay Jewels has established a significant global footprint. Our jewelry is sold across
    continents,
    from New York to Paris, Dubai to Hong Kong. With flagship stores and exclusive showrooms
    worldwide,
    our designs are cherished by customers who appreciate both luxury and craftsmanship.
    `,
    imageLeft: false,
  },
];

export default function page() {

  const [activeTab, setActiveTab] = useState(tabLocationsData[0].id);

  return (
    <div>
      <Banner pageName="Our Global Presence" />
      <section className="layout-pb-md bg-light-1">
        <div className="container">
          <div className="row y-gap-40 layout-pt-md">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-3 col-md-6 col-6"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration={feature.duration}
              >
                <div className="flex flex-col justify-center items-center text-center bg-white h-full min-h-[250px] sm:py-6 px-4 sm:px-2 rounded-8">
                  <div className="mb-4">
                    <img
                      src={feature.icon}
                      alt={`Feature ${index + 1}`}
                      className="w-[60px] h-[60px] object-contain mx-auto"
                    />
                  </div>
                  <h4 className="text-20 lg:text-20 sm:text-17">
                    {feature.title}
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
                {tabLocationsData.map((location) => (
                  <div className="col-auto" key={location.id}>
                    <button
                      className={`tabs__button fw-500 pb-15 ${activeTab === location.id ? "is-tab-el-active" : ""
                        }`}
                      onClick={() => setActiveTab(location.id)}
                    >
                      {location.name}
                    </button>
                  </div>
                ))}
              </div>
              <div className="tabs__content layout-pb-sm layout-pt-sm">
                <AnimatePresence mode="wait">
                  {tabLocationsData.map((location) =>
                    activeTab === location.id ? (
                      <motion.div
                        key={location.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="tabs__pane is-tab-el-active"
                      >
                        <div className="container">
                          <div className="row y-gap-40 justify-between items-center">
                            {location.imageLeft && (
                              <div
                                className="col-xl-6 col-lg-6"
                                data-aos="zoom-in"
                                data-aos-offset="0"
                                data-aos-duration="1000"
                              >
                                <img
                                  className="rounded-8"
                                  src={location.image}
                                  alt={location.name}
                                />
                              </div>
                            )}

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
                                dangerouslySetInnerHTML={{ __html: location.content }}
                              ></div>

                            </div>

                            {!location.imageLeft && (
                              <div
                                className="col-xl-6 col-lg-6"
                                data-aos="zoom-in"
                                data-aos-offset="0"
                                data-aos-duration="1000"
                              >
                                <img
                                  className="rounded-8"
                                  src={location.image}
                                  alt={location.name}
                                />
                              </div>
                            )}
                          </div>
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
  )
}
