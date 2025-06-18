import React from 'react'
import HeroSlider from "../../components/HeroSlider";
import getMetadataForSlug from '../../utils/getMetadataForSlug';

export async function generateMetadata() {
  return await getMetadataForSlug("our-philosophy");
}

export default function page() {
  return (
    <div>
      <HeroSlider />
       <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="pageHero__content text-center">
              <h1 className="pageHero__title lh-11 capitalize">
                Our Philosophy
              </h1>
              <p className="pageHero__text sm:text-13 lh-17">
                At Shivaay Jewels, our vision extends beyond creating exquisite jewelry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
