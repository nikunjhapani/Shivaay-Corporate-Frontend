import HeroSlider from "../../components/HeroSlider";
import { notFound } from "next/navigation";
import api from "../../utils/axios";
import { Suspense } from "react";

async function getCMSData(slug) {
  const res = await fetch(`${api.defaults.baseURL}api/menu/getAllApi`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) notFound();

  const data = await res.json();
  const cms = Object.values(data)
    .flat()
    .find((item) => item.menuType === "CMS" && item.cmsId?.page_link === slug);

  return cms?.cmsId || null;
}
export async function generateMetadata({ params }) {
  const cmsData = await getCMSData(params.slug);
  if (!cmsData) return {};

  return {
    title: cmsData?.metaTitle || cmsData?.page_title,
    description: cmsData?.metaDescription || cmsData?.page_subtitle,
  };
}

export default async function CmsPage({ params }) {
  const { slug } = params;
  
  const cmsData = await getCMSData(slug);
  if (!cmsData) notFound();

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
            dangerouslySetInnerHTML={{ __html: cmsData?.page_editor }}
          />
        </section>
      </Suspense>
    </>
  );
}
