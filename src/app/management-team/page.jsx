import React from "react";
import Image from "next/image";
import api from "../../utils/axios";
import HeroSlider from "../../components/HeroSlider";
import getMetadataForSlug from "../../utils/getMetadataForSlug";

const getManagementTeam = async () => {
  const res = await fetch(`${api.defaults.baseURL}api/managementTeam/getAllApi`, {
    method: "POST",
    cache: "no-store", // SSR: always fresh data
  });
  const json = await res.json();
  return json?.data || [];
};


export async function generateMetadata() {
  return await getMetadataForSlug("management-team");
}


export default async function Page() {
  const data = await getManagementTeam();

  return (
    <>
      <HeroSlider  />
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center">
            <div className="col-auto">
              <div className="pageHero__content text-center">
                <h1 className="pageHero__title lh-11 capitalize">
                  Management Team
                </h1>
                <p className="pageHero__text lh-17">
                  Driven by vision, powered by expertise — meet the minds
                  shaping our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {data?.map((item, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === data.length - 1;
        return (
          <section
            key={item._id}
            className={`layout-pt-sm ${
              isLast ? "layout-pb-lg" : "layout-pb-sm"
            }`}
          >
            <div className="container">
              <div className="row justify-between items-center">
                <div
                  className={`col-xl-5 col-lg-5 col-12 text-center p-lg-0 p-4 ${
                    isEven ? "order-1" : "order-2"
                  }`}
                >
                  <Image
                    src={`${api.defaults.baseURL}${item.profile}`}
                    alt={`Profile of ${item.name}`}
                    className="rounded-16"
                    width={584}
                    height={494}
                    loading="lazy"
                  />
                </div>

                <div
                  className={`col-xl-7 col-lg-7 col-12 px-50 px-lg-4 ${
                    isEven ? "order-2" : "order-1"
                  }`}
                >
                  <div className="baseCard__content d-flex flex-column justify-end">
                    <h2 className="text-34 lg:text-30 sm:text-20 mt-15">
                      {item.name}
                    </h2>
                    <p className="text-17">{item.designation}</p>
                  </div>
                  <div
                    className="text-16 sm:text-15 mt-15 text-justify lh-18"
                    dangerouslySetInnerHTML={{ __html: item.introduction }}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
