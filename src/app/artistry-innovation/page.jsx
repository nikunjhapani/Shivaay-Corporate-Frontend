import React from "react";
import Essence from "../../components/Essence";
import Banner from "../../components/Banner";
import Image from "next/image";
import api from "../../utils/axios";
import getMetadataForSlug from "../../utils/getMetadataForSlug";
async function getCMSData() {
  const res = await fetch(`${api.defaults.baseURL}api/innovation/getAllApi`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  const json = await res.json();
  return json?.data || [];
}

export async function generateMetadata() {
  return await getMetadataForSlug("artistry-innovation"); 
}

export default async function Page() {
  const data = await getCMSData();

  return (
    <>
      <Banner pageName="Artistry Innovation" />

      <section className="layout-pt-md layout-pb-md bg-light-1">
        <div className="container">
          <div className="row justify-center text-center mb-30 sm:mb-20">
            <div className="col-xl-9 col-lg-9 px-20 sm:px-10">
              <h2
                className="text-34 md:text-30 sm:text-24 capitalize leading-md"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                At Shivaay Jewels, we believe in the perfect fusion of tradition
                and technology.
              </h2>
            </div>
          </div>

          {/* Line Grid */}

          <div className="grid gap-10">
            {data.map((item, i) => {
              if (i % 3 !== 0) return null;

              const leftItem = data[i];
              const rightItem1 = data[i + 1];
              const rightItem2 = data[i + 2];

              return (
                <div key={i} className="lineGrid -type-1 md:pt-0 sm:pt-50">
                  {/* Left Item */}
                  <div className="lineGrid__content sm:mb-20">
                    <div
                      className="mb-20 sm:mb-10 sm:order-2"
                      data-aos="zoom-in"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      <Image
                        src={`${api.defaults.baseURL}${leftItem?.innovationImage}`}
                        alt={leftItem?.subTitle}
                        width={696}
                        height={469}
                        className="w-full rounded-4 shadow-md"
                      />
                    </div>
                    <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                      <h3 className="text-32 sm:text-24 mb-10">
                        {leftItem?.subTitle}
                      </h3>
                      <p className="text-16 leading-md">
                        {leftItem?.description}
                      </p>
                    </div>
                  </div>

                  <div className="lineGrid__line"></div>

                  {/* Right Items (Stacked) */}
                  <div className="lineGrid__content">
                    {rightItem1 && (
                      <>
                        <div
                          className="mb-20 sm:mb-10 sm:order-2"
                          data-aos="zoom-in"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          <Image
                            src={`${api.defaults.baseURL}${rightItem1?.innovationImage}`}
                            alt={rightItem1?.subTitle}
                            width={696}
                            height={469}
                            className="w-full rounded-4 shadow-md"
                          />
                        </div>
                        <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                          <h3 className="text-32 sm:text-24 mb-10">
                            {rightItem1?.subTitle}
                          </h3>
                          <p className="text-16 leading-md">
                            {rightItem1?.description}
                          </p>
                        </div>
                      </>
                    )}
                    {rightItem2 && (
                      <>
                        <div
                          className="mb-20 sm:mb-10 sm:order-2"
                          data-aos="zoom-in"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          <Image
                            src={`${api.defaults.baseURL}${rightItem2?.innovationImage}`}
                            alt={rightItem2?.subTitle}
                            width={696}
                            height={469}
                            className="w-full rounded-4 shadow-md"
                          />
                        </div>
                        <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                          <h3 className="text-32 sm:text-24 mb-10">
                            {rightItem2?.subTitle}
                          </h3>
                          <p className="text-16 leading-md">
                            {rightItem2?.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Essence />
    </>
  );
}
