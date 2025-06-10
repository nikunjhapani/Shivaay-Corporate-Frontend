import React from "react";
import Banner from "../../components/Banner";
import api from "../../utils/axios";
import {
  LightGallery,
  lgThumbnail,
  lgZoom,
} from "../../utils/lightgallerySetup";
import { fetchGalleryData } from "../api/gallery";

export default async function GalleryPage() {
  // const galaryData = await fetchGalleryData();

  return (
    <>
      <Banner pageName="Gallery" />
      {/* {!isLoading && !isError && (
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
      )} */}
    </>
  );
}
