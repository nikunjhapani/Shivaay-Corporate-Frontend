import React from 'react'
import HeroSlider from "../../../components/HeroSlider";
import Image from 'next/image';
import getMetadataForSlug from '../../utils/getMetadataForSlug';

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
  return await getMetadataForSlug("our-journey"); 
}

export default function page() {

  return (
    <div>
      <HeroSlider sliderData={sliderData} />
       <section className="layout-pt-md layout-pb-md">
      <div className="container">
        {/* Heading */}
        <div className="row justify-center">
          <div className="col-auto">
            <div className="pageHero__content text-center">
              <h1 className="pageHero__title lh-11 capitalize">Our Journey</h1>
              <p className="pageHero__text lh-17">
                At Shivaay Jewels, our vision extends beyond creating exquisite jewelry
              </p>
            </div>
          </div>
        </div>

        {/* Intro Paragraphs */}
        <div className="row justify-between items-center">
          <div className="col-xl-8 col-lg-8 col-12 p-4 px-lg-4 mx-auto">
            <p className="text-18 sm:text-16 mt-15 text-justify lh-17">
              Established in 2017 by Mr. Pareshbhai in partnership with Mr. Jaysukhbhai, the company specializes in the production of diamond-studded jewelry, primarily targeting the export market in the USA.
            </p>
            <p className="text-18 sm:text-16 mt-15 text-justify lh-17">
              Shivaay Jewels operates from a spacious facility covering 1,000 square meters, spread across three floors, located in the export free zone of Sachin, Gujarat, Surat, India. With Mr. Pareshbhai’s 30 years of diverse experience in the jewelry industry, Shivaay Jewels has experienced remarkable growth; what started with just 35 craftsmen has now expanded to an impressive workforce of 550 permanent artisans.
            </p>
          </div>
        </div>

        {/* First Image and Text */}
        <div className="row justify-between items-center">
          <div className="col-xl-6 col-lg-6 col-12 p-4 px-lg-4">
            <Image
              src="/img/Journey01.jpg"
              alt="Journey image 1"
              width={600}
              height={400}
              className="rounded-16 w-full h-auto"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-12 p-4 px-lg-4">
            <p className="text-16 sm:text-15 mt-15 text-justify lh-17">
              Shivaay Jewels has become one of the leading exporters of studded jewelry from Surat, Gujarat, India. The company’s dedication to quality and craftsmanship has been key to its success. For wholesale marketing in the USA, Shivaay Jewels has established its own subsidiary office named Shree Jewels. It stands out as one of the few major manufacturers in India with a dedicated marketing office in New York, allowing direct engagement with USA customers through its own base office.
            </p>
          </div>
        </div>

        {/* Second Text and Image */}
        <div className="row justify-between items-center">
          <div className="col-xl-6 col-lg-6 col-12 md:order-2 sm:order-2 p-4 px-lg-4">
            <p className="text-16 sm:text-15 text-justify lh-17">
              Each piece of jewelry is meticulously crafted, highlighting the intricate artistry and skill of its artisans. The company is committed to maintaining high ethical standards and sustainable practices, ensuring responsible sourcing of every diamond. With a focus on innovation, Shivaay Jewels continuously invests in advanced technology to enhance the precision and beauty of its creations. Looking ahead, the company aims to broaden its international presence, building on its reputation for excellence and customer satisfaction.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-12 md:order-2 sm:order-2 p-4 px-lg-4">
            <Image
              src="/img/Journey02.jpg"
              alt="Journey image 2"
              width={600}
              height={400}
              className="rounded-16 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
