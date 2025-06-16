import getMetadataForSlug from "../../utils/getMetadataForSlug";
import HeroSlider from "../../components/HeroSlider";
import Image from "next/image";
import React from "react";
const sliderData = [
  {
    title: 'Our Journey',
    link: '/our-journey',
    image: '/img/cards/1/1.png',
  },
  {
    title: 'Our Philosophy',
    link: '/our-philosophy',
    image: '/img/cards/1/2.png',
  },
  {
    title: 'Vision',
    link: '/vision',
    image: '/img/cards/1/3.png',
  },
  {
    title: 'Mission',
    link: '/mission',
    image: '/img/cards/1/4.png',
  },
  {
    title: 'Management Team',
    link: '/management-team',
    image: '/img/cards/1/5.png',
  },
];

export async function generateMetadata() {
  return await getMetadataForSlug("mission");
}

export default function Mission() {
  return (
    <>
     <HeroSlider sliderData={sliderData} />
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        {/* Heading */}
        <div className="row justify-center">
          <div className="col-auto">
            <div className="pageHero__content text-center">
              <h1 className="pageHero__title lh-11 capitalize">Mission</h1>
              <p className="pageHero__text lh-17">
                Create jewelry that’s more than just a piece you wear
              </p>
            </div>
          </div>
        </div>

        {/* Paragraph Block */}
        <div className="row justify-between items-center">
          <div className="col-xl-8 col-lg-8 col-12 p-4 px-lg-4 mx-auto">
            <p className="text-16 sm:text-15 mt-15 text-justify lh-17">
              At Shivaay Jewels, our mission is simple: to create jewelry that’s
              more than just a piece you wear, but a masterpiece that tells your
              story. For over 35 years, we’ve been pouring our heart and soul
              into every design, crafting jewelry that’s meant to inspire and be
              cherished for generations. We believe jewelry should be timeless –
              not just following trends, but transcending them.
            </p>
          </div>
        </div>

        {/* Image + Paragraph Row */}
        <div className="row justify-between items-center">
          <div className="col-xl-6 col-lg-6 col-12 p-4 px-lg-4">
            <Image
              src="/img/mission01.jpg"
              alt="Mission Image 1"
              width={600}
              height={400}
              className="rounded-16 w-full h-auto"
            />
          </div>

          <div className="col-xl-6 col-lg-6 col-12 p-4 px-lg-4">
            <p className="text-16 sm:text-15 mt-15 text-justify lh-17">
              Every piece we create is carefully designed with love, passion,
              and a keen eye for detail. Whether it’s a meaningful engagement
              ring, a special gift, or a treat to yourself, our jewelry is made
              to celebrate life’s important moments. We know that these pieces
              aren’t just accessories – they’re part of your journey, a reminder
              of what matters most to you.
              <br />
              Our artisans combine traditional techniques with modern
              technology, ensuring that every design is crafted with precision
              and care. We use the finest materials, all ethically sourced,
              because we believe that beauty should go hand-in-hand with
              responsibility.
            </p>
          </div>
        </div>

        {/* Paragraph + Image Row */}
        <div className="row justify-between items-center">
          <div className="col-xl-6 col-lg-6 col-12 md:order-2 sm:order-2 p-4 px-lg-4">
            <p className="text-16 sm:text-15 text-justify lh-17">
              At Shivaay Jewels, it’s not just about making jewelry – it’s about
              creating lasting memories and treasures that will be passed down
              through the years. We’re here to help you mark life’s milestones
              with pieces that are as unique as you are. Each time you wear our
              creations, you’re wearing a story, a legacy, and a little piece of
              our hearts.
            </p>
          </div>

          <div className="col-xl-6 col-lg-6 col-12 md:order-2 sm:order-2 p-4 px-lg-4">
            <Image
              src="/img/mission02.jpg"
              alt="Mission Image 2"
              width={600}
              height={400}
              className="rounded-16 w-full h-auto"
            />
          </div>
        </div>
      </div>
      </section>
      </>
  );
}
