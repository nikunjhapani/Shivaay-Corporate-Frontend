import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/Banner"));
const About = dynamic(() => import("../components/AboutSection"));
const CounterSection = dynamic(() => import("../components/Counter"));
const VisionMissionSection = dynamic(() => import("../components/VisionMissionSection"));
const InnovationSection = dynamic(() => import("../components/Innovation"));
const Essence = dynamic(() => import("../components/Essence"));
const SocialResponsibility = dynamic(() => import("../components/SocialResponsibility"));
const ManagementTeam = dynamic(() => import("../components/ManagementTeam"));
const OurClients = dynamic(() => import("../components/OurClients"));
const GlobalPresence = dynamic(() => import("../components/GlobalPresence"));
const Awards = dynamic(() => import("../components/Awards"));

import getMetadataForSlug from "../utils/getMetadataForSlug";

export async function generateMetadata() {
  return await getMetadataForSlug("home");
}

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
