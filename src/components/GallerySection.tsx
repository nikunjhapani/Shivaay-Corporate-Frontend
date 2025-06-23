"use client";
import React from "react";
import api from "../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { fetchGalleryData } from "../app/api/fetchGalleryData";
import Image from "next/image";
import Fancybox from "../components/ui/FancyBox";

export default function GallerySection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGalleryData,
  });
  
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        {data?.map(({ galleryTitleId, title, images }, index) => (
          <div
            key={galleryTitleId}
            className={`${index === 0 ? "" : "layout-pt-md"}`}
          >
            <h2 className="text-34 md:text-30 sm:text-24 mb-20">{title}</h2>

            <Fancybox
            >
              <div className="row g-4">
                {images.map(({ _id, gallaryImage, sort_order_no, gallaryType }) => {
                  const fileUrl = `${api.defaults.baseURL}${gallaryImage}`;
                  return gallaryType === "video" ? (
                    <div key={_id} className="col-md-4">
                    <a
                 
                      href={fileUrl}
                      className=""
                      data-fancybox={galleryTitleId}
                      data-type="video"
                    >
                      <div className="media-container">
                        <video
                          src={fileUrl}
                          className="gallery-img img-fluid"
                          width={300}
                          height={200}
                          style={{ objectFit: "cover" }}
                          controls
                        />
                      </div>
                    </a>
                    </div>
                  ) : (
                    <a
                      key={_id}
                      href={fileUrl}
                      className="col-md-4"
                      data-fancybox={galleryTitleId}
                      data-caption={`<h4>${title}</h4><p>Image ${sort_order_no}</p>`}
                    >
                      <div className="media-container">
                        <Image
                          src={fileUrl}
                          alt={`Image ${sort_order_no}`}
                          className="gallery-img img-fluid"
                          width={300}
                          height={200}
                          style={{ objectFit: "cover" }}
                          priority
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            </Fancybox>
          </div>
        ))}
      </div>
    </section>
  );
}
