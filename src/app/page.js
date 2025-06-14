"use client";
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
import GlobalPresence from "../components/GlobalPresence";
export default function Home() {
  return (
    <>
      <Banner pageName="Home" />
      <About />
      <CounterSection />
      <VisionMissionSection />
      <InnovationSection />
      <Essence />
      <SocialResponsibility />
      <ManagementTeam />
      <OurClients />
      <GlobalPresence />
      <Awards />
    </>
  );
}
