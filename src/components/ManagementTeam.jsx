'use client';
import React, { useState } from 'react'
import Image from "next/image";

export default function ManagementTeam() {
    const [data, setCount] = useState();

  return (
    <div>
      <section className="layout-pt-md layout-pb-lg px-10 container">

      <div className="container layout-pb-sm">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="text-15 sm:text-13 uppercase mb-5" data-aos="fade-up" data-aos-offset="0"
              data-aos-duration="1000">VISIONARIES BEHIND THE SPARKLE</div>
            <h2 className="text-34 md:text-30 sm:text-24" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
              Management Team</h2>
          </div>
        </div>
      </div>

      <div className="row x-gap-10 y-gap-10">
        <div className="col-lg-6 col-md-6" data-aos="fade-right" data-aos-offset="0" data-aos-duration="1500">
          <a href="/management-team.html" className="baseCard -type-4">
            <div className="baseCard__image ratio ratio-95:80 rounded-16">
              <img src="img/cards/9/1.png" alt="image" className="img-ratio" fill="fill" />
            </div>

            <div className="baseCard__content d-flex flex-column justify-end">
              <h4 className="text-30 xl:text-24 md:text-20 text-white">PARESHBHAI</h4>
              <p className="text-17 text-white">CO-FOUNDER</p>

              <div className="d-flex mt-20 md:mt-15">
                <div className="button -type-1 text-white">
                  <i className="-icon">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
                      <path
                        d="M35.8 28.0924C43.3451 28.0924 49.4616 21.9759 49.4616 14.4308C49.4616 6.88577 43.3451 0.769287 35.8 0.769287C28.255 0.769287 22.1385 6.88577 22.1385 14.4308C22.1385 21.9759 28.255 28.0924 35.8 28.0924Z"
                        stroke="#FFF" />
                      <path
                        d="M33.4808 10.2039L32.9985 10.8031L37.2931 14.2623H0.341553V15.0315H37.28L33.0008 18.4262L33.4785 19.0285L39 14.6492L33.4808 10.2039Z"
                        fill="#FFF" />
                    </svg>
                  </i>
                  DISCOVER MORE
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-offset="0" data-aos-duration="1500">
          <a href="/management-team.html" className="baseCard -type-4">
            <div className="baseCard__image ratio ratio-95:80 rounded-16">
              <img src="img/cards/9/2.png" alt="image" className="img-ratio"  fill="fill" />
            </div>

            <div className="baseCard__content d-flex flex-column justify-end">
              <h4 className="text-30 xl:text-24 md:text-20 text-white">JAYSUKHBHAI </h4>
              <p className="text-17 text-white">CO-FOUNDER</p>

              <div className="d-flex mt-20 md:mt-15">
                <div className="button -type-1 text-white">
                  <i className="-icon">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
                      <path
                        d="M35.8 28.0924C43.3451 28.0924 49.4616 21.9759 49.4616 14.4308C49.4616 6.88577 43.3451 0.769287 35.8 0.769287C28.255 0.769287 22.1385 6.88577 22.1385 14.4308C22.1385 21.9759 28.255 28.0924 35.8 28.0924Z"
                        stroke="#FFF" />
                      <path
                        d="M33.4808 10.2039L32.9985 10.8031L37.2931 14.2623H0.341553V15.0315H37.28L33.0008 18.4262L33.4785 19.0285L39 14.6492L33.4808 10.2039Z"
                        fill="#FFF" />
                    </svg>
                  </i>
                  DISCOVER MORE
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}
