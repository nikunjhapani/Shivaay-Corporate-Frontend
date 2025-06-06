import LocationSection from "../../components/LocationSection";
import Banner from "../../components/Banner";
import React from "react";
import Awards from "../../components/Awards";
import ContactFormSection from "../../components/ContactFormSection";

export default function page() {
  return (
    <>
      <Banner pageName="Contact Us" />
      <LocationSection />
      <ContactFormSection />
      <Awards />
    </>
  );
}
