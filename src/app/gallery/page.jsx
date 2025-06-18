import React from "react";
import Banner from "../../components/Banner";
import GallerySection from "../../components/GallerySection";
import getMetadataForSlug from "../../utils/getMetadataForSlug";

export async function generateMetadata() {
  return await getMetadataForSlug("gallery");
}

export default function GalleryPage() {
  return (
    <>
      <Banner pageName="Gallery" />
      <GallerySection />
    </>
  );
}
