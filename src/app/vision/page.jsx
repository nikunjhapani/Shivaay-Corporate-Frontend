import React from "react";
import Image from "next/image";

import HeroSlider from "../../components/HeroSlider";
import getMetadataForSlug from "../../utils/getMetadataForSlug";
const sliderData = [
  {
    title: "Our Journey",
    link: "/our-journey",
    image: "/img/cards/1/1.png",
  },
  {
    title: "Our Philosophy",
    link: "/our-philosophy",
    image: "/img/cards/1/2.png",
  },
  {
    title: "Vision",
    link: "/vision",
    image: "/img/cards/1/3.png",
  },
  {
    title: "Mission",
    link: "/mission",
    image: "/img/cards/1/4.png",
  },
  {
    title: "Management Team",
    link: "/management-team",
    image: "/img/cards/1/5.png",
  },
];

export async function generateMetadata() {
  return await getMetadataForSlug("vision"); 
}

export default function Vision() {
  return (
    <>
      <HeroSlider sliderData={sliderData} />
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-auto">
              <div className="pageHero__content text-center">
                <h1 className="pageHero__title lh-11 capitalize">Our Vision</h1>
                <p className="pageHero__text lh-17">
                  At Shivaay Jewels, our vision extends beyond creating
                  exquisite jewelry
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-between items-center">
            <div className="col-xl-8 col-lg-8 col-12 p-4 px-lg-4 mx-auto">
              <p className="text-16 sm:text-15 mt-15 text-justify lh-17">
                Our vision at Shivaay Jewels is to lead the global jewelry
                market, not just in design and quality, but in ethical business
                practices. We aspire to redefine the standards of luxury
                jewelry, blending creativity, integrity, and innovation to set
                the benchmark for excellence.
              </p>

              <p className="text-16 sm:text-15 mt-15 text-justify lh-17">
                At Shivaay Jewels, our vision extends beyond creating exquisite
                jewelry – we aspire to make a meaningful impact on both the
                world and the future of the jewelry industry. We aim to lead the
                global market, not only with groundbreaking designs and
                unparalleled quality but also through our commitment to ethical
                business practices and sustainability. Our mission is to blend
                creativity, integrity, and innovation while making positive
                contributions to society and the environment.
              </p>
            </div>
          </div>

          <div className="row justify-between items-center">
            <div className="col-xl-6 col-lg-6 col-12 p-4 px-lg-4">
                <Image
              src="/img/vision01.jpg"
              alt="Vision Image 1"
              width={600}
              height={400}
              className="rounded-16 w-full h-auto"
            />
            </div>

            <div className="col-xl-6 col-lg-6 col-12 md:order-2 sm:order-2 px-lg-4">
              <div className="text-16 sm:text-15 lh-17 text-justify list-view">
                <ul>
                  <li>
                    – Lead the Jewelry Industry with Groundbreaking Designs: We
                    are dedicated to pushing the boundaries of design, creating
                    jewelry that embodies both timeless elegance and modern
                    innovation. Our pieces are designed to inspire and set new
                    trends, becoming symbols of luxury and creativity in the
                    jewelry world.
                  </li>
                  <li>
                    – Set New Standards in Ethical Practices and Sustainability:
                    Integrity and responsibility are at the core of our work. We
                    are committed to ethical sourcing, sustainable production
                    methods, and reducing our environmental footprint. As we set
                    new standards in the luxury jewelry market, we ensure that
                    our practices benefit the planet and its people.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row justify-between items-center">
            <div className="col-xl-6 col-lg-6 col-12 md:order-2 sm:order-2 px-lg-4">
              <div className="text-16 sm:text-15 lh-17 text-justify list-view">
                <ul>
                  <li>
                    – Continually Grow and Innovate While Upholding Our
                    Commitment to Quality: As we expand, we will maintain our
                    dedication to superior craftsmanship, ensuring each piece is
                    a reflection of quality and excellence. We aim to remain at
                    the forefront of innovation while consistently exceeding
                    customer expectations.
                  </li>
                  <li>
                    – Promote Environmental Sustainability through Tree
                    Plantation: We are committed to protecting and preserving
                    the environment. Our goal is to plant over 100,000 trees
                    globally, helping to combat climate change and promote a
                    greener, healthier planet for future generations.
                  </li>
                  <li>
                    – Support Widow Aid Initiatives: In line with our mission to
                    uplift communities, we are proud to support over 100 widows
                    by providing aid and resources to help them achieve
                    financial independence and stability. This initiative is a
                    testament to our commitment to empowering women and making a
                    lasting difference in their lives.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12 p-4 px-lg-4">
               <Image
              src="/img/vision02.jpg"
              alt="Vision Image 2"
              width={600}
              height={400}
              className="rounded-16 w-full h-auto"
            />
            </div>
          </div>

          <div className="row justify-between items-center">
            <div className="col-xl-8 col-lg-8 col-12 md:order-2 sm:order-2 px-lg-4 mx-auto">
              <p className="text-16 sm:text-15 lh-17 mt-20 text-justify">
                At Shivaay Jewels, our vision is to not only be a leader in
                jewelry but to also make a meaningful impact on the world. We
                believe in the power of innovation and integrity, and we are
                dedicated to shaping a brighter, more sustainable future for
                both the jewelry industry and society as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
