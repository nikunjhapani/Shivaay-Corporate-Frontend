import React from "react";
import HeroSlider from "../../components/HeroSlider";
import api from "../../utils/axios";
async function getCMSData() {
  const res = await fetch(`${api.defaults.baseURL}/api/cms/getAllApi`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  const json = await res.json();
  return json?.data || [];
}
export default async function Page() {
  const data = await getCMSData();
  const items = data.filter((item) => item.page_title === "Our Philosophy");
  return (
    <>
      <HeroSlider />
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center">
            <div className="col-auto">
              <div className="pageHero__content text-center">
                <h1 className="pageHero__title lh-11 capitalize">
                  {items[0]?.page_title || "Our Philosophy"}
                </h1>
                <p className="pageHero__text sm:text-13 lh-17">
                  {items[0]?.page_subtitle || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
