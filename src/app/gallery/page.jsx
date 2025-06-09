"use client";

import React from "react";
import Banner from "../../components/Banner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/axios";

export const fetchGalleryData = async () => {
  const [titlesRes, imagesRes] = await Promise.all([
    axios.post(`${api.defaults.baseURL}/api/gallaryTitle/getAllApi`),
    axios.post(`${api.defaults.baseURL}/api/gallaryImage/getAllApi`),
  ]);

  if (titlesRes.status !== 200 || imagesRes.status !== 200) {
    throw new Error("Failed to fetch gallery data");
  }

  const titles = titlesRes.data?.data || [];
  const images = imagesRes.data?.data || [];

  return titles.map((title) => ({
    galleryTitleId: title._id,
    title: title.title,
    images: images
      .filter((img) => img.galleryTitleId === title._id)
      .sort((a, b) => a.sort_order_no - b.sort_order_no),
  }));
};

export default function GalleryPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGalleryData,
  });

  return (
    <div>
      <Banner pageName="Gallery" />
      <section className="layout-pt-md  layout-pb-lg">
        <div className="container">
          {isLoading && <p style={{ padding: "20px" }}>Loading gallery...</p>}
          {isError && (
            <p style={{ color: "red", padding: "20px" }}>
              Failed to load gallery. Please try again later.
            </p>
          )}

          {!isLoading &&
            !isError &&
            data?.map(({ galleryTitleId, title, images }) => (
              <>
                <div
                  className="row y-gap-30 justify-between items-end"
                  key={galleryTitleId}
                >
                  <div className="col-auto">
                    <h2
                      className="text-34 md:text-30 sm:text-24 mb-10"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      {title}
                    </h2>
                  </div>
                </div>

                <div className="row g-4">
                  {images.map(({ _id, gallaryImage, sort_order_no }) => (
                    <div className="col-md-4" key={_id}>
                      <img
                        src={`${api.defaults.baseURL}/${gallaryImage}`}
                        alt={`${title} Image ${sort_order_no}`}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </div>
              </>
            ))}
        </div>
      </section>
    </div>
  );
}
