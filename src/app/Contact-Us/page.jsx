import LocationSection from "../../components/LocationSection";
import Banner from "../../components/Banner";
import React from "react";
import Awards from "../../components/Awards";
import ContactFormSection from "../../components/ContactFormSection";
import getMetadataForSlug from "../../utils/getMetadataForSlug";

export async function generateMetadata() {
  return await getMetadataForSlug("contact-us");
}

export default function Page() {
  return (
    <>
      <Banner pageName="Contact Us" />
      <LocationSection />
      <ContactFormSection />
      <Awards />
    </>
  );
}
