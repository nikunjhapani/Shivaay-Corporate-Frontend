// components/Awards.tsx
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from './ui/ArrowIcon'

const awardsData = [
  {
    image: '/img/cards/2/1.png',
    title: 'Best Silver Jewelry Manufacturer 2020-21',
    subtitle: 'National Jewelry Awards',
    delay: 1000,
  },
  {
    image: '/img/cards/2/2.png',
    title: 'Export Excellence Jewelry 2024-25',
    subtitle: 'Retail Jeweller India Awards',
    delay: 1200,
  },
  {
    image: '/img/cards/2/3.png',
    title: 'Highest Silver Jewelry Exports 2019',
    subtitle: 'Gold Souk Jewelry Awards',
    delay: 1400,
  },
  {
    image: '/img/cards/2/4.png',
    title: 'Highest Silver Jewelry Exports in Gujarat 2018',
    subtitle: 'National Jewelry Awards',
    delay: 1600,
  },
]

export default function Awards() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-end">
          <div className="col-auto">
            <div
              className="text-15 sm:text-13 uppercase mb-5"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              Government and Other Recognitions
            </div>
            <h2
              className="text-34 md:text-30 sm:text-24"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              AWARDS & CERTIFICATES
            </h2>
          </div>

          <div className="col-auto">
            <button className="button -type-1">
              <i className="-icon">
                <ArrowIcon />
              </i>
              VIEW ALL
            </button>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-10">
          {awardsData.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-6"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration={item.delay}
            >
              <Link href="/awards-certificates.html" className="baseCard -type-2">
                <div className="baseCard__image ratio ratio-41:50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={365}
                    className="img-ratio"
                  />
                </div>

                <div className="baseCard__content mt-10">
                  <div className="row x-gap-10">
                    <div className="col-auto lh-14 text-16 md:text-13">{item.subtitle}</div>
                  </div>

                  <h4 className="text-20 md:text-17 mt-10">{item.title}</h4>

                  <div className="d-flex mt-15 md:d-none">
                    <button className="button -type-1">
                      <i className="-icon">
                        <ArrowIcon />
                      </i>
                      READ MORE
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
