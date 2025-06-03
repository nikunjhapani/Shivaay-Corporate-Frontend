'use client';

import SocialResponsibility from "../components/SocialResponsibility";
import Awards from "../components/Awards";
import Banner from "../components/Banner";
import Essence from "../components/Essence";
import ManagementTeam from "../components/ManagementTeam";
import OurClients from "../components/OurClients";
import InnovationSection from "../components/Innovation";
import CounterSection from "../components/Counter";
import VisionMissionSection from "../components/VisionMissionSection";
import About from "../components/AboutSection";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <>
      <Banner
        data={{
          title: " Jewelry-Making Intertwines With",
          desc: "Creativity & Innovation",
        }}
      />
     
     <About />
      <CounterSection />
       <VisionMissionSection />
      <InnovationSection />
      <Essence />
     <SocialResponsibility />
      <ManagementTeam />
      <OurClients />
       <section class="global-bg-section">
        <video width="100%" class="desktop-v" autoplay loop muted>
          <source src="./video/global-presence.mp4" type="video/mp4" />
        </video>
        <video width="100%" class="mobile-v" autoplay loop muted>
          <source src="./video/global-presence_mobile.mp4" type="video/mp4" />
        </video>
        <div class="global-text-p">
          <div class="container">
            <div class="col-lg-6">
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1500"
              >
                <div class="text-15 sm:text-13 uppercase mb-5 text-white">
                 
                  A Worldwide Influence in Jewelry Design
                </div>
                <h2 class="text-34 md:text-30 sm:text-24 text-white mb-20">
                  Our Global Presence
                </h2>
                <p class="text-white text-17 sm:text-13 lh-17">
                  {" "}
                  Shivaay Jewels has established a significant global footprint.
                  Our jewelry is sold across continents, from New York to Paris,
                  Dubai to Hong Kong. With flagship stores and exclusive
                  showrooms worldwide, our designs are cherished by customers
                  who appreciate both luxury and craftsmanship.
                </p>

                <a href="/global-presence.html">
                  <button class="button -type-1 text-white mt-40">
                    <i class="-icon">
                      <svg
                        width="50"
                        height="30"
                        viewBox="0 0 50 30"
                        fill="none"
                      >
                        <path
                          d="M35.8 28.0924C43.3451 28.0924 49.4616 21.9759 49.4616 14.4308C49.4616 6.88577 43.3451 0.769287 35.8 0.769287C28.255 0.769287 22.1385 6.88577 22.1385 14.4308C22.1385 21.9759 28.255 28.0924 35.8 28.0924Z"
                          stroke="#FFF"
                        ></path>
                        <path
                          d="M33.4808 10.2039L32.9985 10.8031L37.2931 14.2623H0.341553V15.0315H37.28L33.0008 18.4262L33.4785 19.0285L39 14.6492L33.4808 10.2039Z"
                          fill="#FFF"
                        ></path>
                      </svg>
                    </i>
                    READ MORE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Awards />
    </>
  );
}
