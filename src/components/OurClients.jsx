import React from 'react'
import Image from 'next/image'

export default function OurClients() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-1">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-xl-5 col-lg-6">
            <div>
              <h2
                className="text-34 md:text-30 sm:text-24 lh-11"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Feedback from Our Clients & Visitors
              </h2>
              <p className="lh-17 mt-20">
                We take pride in the experiences we create for our clients and visitors. Here’s what they have to say:
              </p>
            </div>

            <div className="d-flex items-center mt-40 md:mt-20">
              <div className="text-60 text-sec">4.88</div>
              <div className="ml-30">
                <div>Google Ratings</div>
                <div className="d-flex x-gap-5 pt-5">
                  <div className="ratings">
                    <Image src="/img/ratings.png" alt="ratings" width={100} height={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 h-testimonial-w">
            <div
              className="overflow-hidden js-section-slider"
              data-gap="30"
              data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
              data-number-pagination="js-number-pag"
            >
              <div className="swiper-wrapper">
                {[
                  {
                    src: "/img/avatars/1/2.png",
                    name: "Client from Dubai",
                    review:
                      "It has been a pleasure working with them over the past few years. They listen to your needs and help with your selection, they make it easy.",
                  },
                  {
                    src: "/img/avatars/1/1.png",
                    name: "Client from New York, US",
                    review:
                      "What else can I say, all good in every way. Top quality, lightning fast shipment, friendly communication. You are one of the reasons I always buy from Shivaay.",
                  },
                  {
                    src: "/img/avatars/1/3.png",
                    name: "Client from China",
                    review:
                      "Shivaay was very helpful and I was able to purchase a beautiful diamond at a great price! Looking forward for further business thanks.",
                  },
                  {
                    src: "/img/avatars/1/4.png",
                    name: "Client from Japan",
                    review:
                      "All very nice guy who support me nice service and diamond. Hope can do more with them and keep longtime friendship! May your company business boom!",
                  },
                ].map((client, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div>
                      <div className="d-flex items-center">
                        <Image src={client.src} alt="client image" width={80} height={80} className="size-80" />
                        <div className="ml-20">
                          <h5>{client.name}</h5>
                        </div>
                      </div>
                      <div className="lh-17 pr-20 mt-40 lg:mt-20">{client.review}</div>
                    </div>
                  </div>
                ))}
              </div>

             
              <div className="pagination -type-number d-flex items-center fw-500 text-white pt-50 md:pt-30 js-number-pag"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
