"use client";

import React from "react";
import Banner from "../../components/Banner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/axios";
import {
  LightGallery,
  lgThumbnail,
  lgZoom,
} from "../../utils/lightgallerySetup";

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
    <>
      <Banner pageName="Gallery" />

      {isLoading && <p>Loading gallery...</p>}
      {isError && <p>Failed to load gallery. Please try again later.</p>}

      {!isLoading && !isError && (
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            {data?.map(({ galleryTitleId, title, images }, index) => (
              <div
                key={galleryTitleId}
                className={`${index === 0 ? "" : "layout-pt-md "}`}
              >
                <h2 className="text-34 md:text-30 sm:text-24 mb-20">{title}</h2>

                <LightGallery
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  elementClassNames="row g-4"
                >
                  {images.map(({ _id, gallaryImage, sort_order_no }) => (
                    <a
                      key={_id}
                      href={`${api.defaults.baseURL}/${gallaryImage}`}
                      className="col-md-4"
                      data-sub-html={`<h4>${title}</h4><p>Image ${sort_order_no}</p>`}
                    >
                      <img
                        src={`${api.defaults.baseURL}/${gallaryImage}`}
                        alt={`Image ${sort_order_no}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </a>
                  ))}
                </LightGallery>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
