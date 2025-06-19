export const dynamicParams = true;
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import HeroSlider from "../../components/HeroSlider";
import api from "../../utils/axios";
import getMetadataForSlug from "../../utils/getMetadataForSlug";

async function getCMSData(slug) {
  try { 
    const res = await fetch(`${api.defaults.baseURL}api/menu/getAllApi`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    const allMenus = Object.values(data).flat();

    const cmsMenuItem = allMenus.find(
      (item) => item.menuType === "CMS" && item.menuURL === slug
    );

    return cmsMenuItem?.cmsId || null;
  } catch (error) {
    console.error("Error fetching CMS data:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return await getMetadataForSlug(slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const cmsData = await getCMSData(slug);

  return (
    <>
      <HeroSlider />
      <Suspense fallback={<div>Loading content...</div>}>
        <section className="layout-pt-md layout-pb-md">
          <div className="container text-center">
            <div className="row justify-center">
              <div className="col-auto">
                <div className="pageHero__content text-center">
                  <h1 className="pageHero__title lh-11 capitalize">
                    {cmsData?.page_title}
                  </h1>
                  <p className="pageHero__text lh-17">
                    {cmsData?.page_subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
  className="container"
  dangerouslySetInnerHTML={{ __html: String(cmsData?.page_editor || "") }}
/>

        </section>
      </Suspense>
    </>
  );
}
