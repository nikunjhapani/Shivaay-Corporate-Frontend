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
import Button from "../components/ui/Button";

export default function Home() {

  return (
    <>
      <Banner
         pageName="Home"
      />
     
     <About />
      <CounterSection />
       <VisionMissionSection />
      <InnovationSection />
      <Essence />
     <SocialResponsibility />
      <ManagementTeam />
      <OurClients />
       <section className="global-bg-section">
        <video width="100%" className="desktop-v" autoPlay loop muted>
          <source src="./video/global-presence.mp4" type="video/mp4" />
        </video>
        <video width="100%" className="mobile-v" autoPlay loop muted>
          <source src="./video/global-presence_mobile.mp4" type="video/mp4" />
        </video>
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
                  Our Global Presence
                </h2>
                <p className="text-white text-17 sm:text-13 lh-17">
               
                  Shivaay Jewels has established a significant global footprint.
                  Our jewelry is sold across continents, from New York to Paris,
                  Dubai to Hong Kong. With flagship stores and exclusive
                  showrooms worldwide, our designs are cherished by customers
                  who appreciate both luxury and craftsmanship.
                </p>

                <a href="/global-presence">
                  <Button  classNameName="button -type-1 text-white"
                    iconColor="white">  READ MORE</Button>
               
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
