"use client";

import React from "react";
import Banner from "../../components/Banner";
import dynamic from "next/dynamic";
const GallerySection = dynamic(
  () => import("../../components/GallerySection"),
  {
    ssr: false,
  }
);

export default function GalleryPage() {
  return (
    <>
      <Banner pageName="Gallery" />
      <GallerySection />
    </>
  );
}
