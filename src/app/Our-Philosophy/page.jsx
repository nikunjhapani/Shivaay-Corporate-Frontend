import React from 'react'
import HeroSlider from "../../components/HeroSlider";

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

export default function page() {
  return (
    <div>
      <HeroSlider sliderData={sliderData} />
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
