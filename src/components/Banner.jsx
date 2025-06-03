import React from 'react'

export default function Banner({ data: { title, desc }, ...props }) {
    console.log(title);
  return (
     <section className="hero -type-1 z-1">
      <div className="video-overlay01"></div>
      <div className="hero__bg">
        <video width="100%" className="desktop-v" autoPlay loop muted>
          <source src="./video/main1.mp4" type="video/mp4" />
        </video>
        <video width="100%" className="mobile-v" autoPlay loop muted>
          <source src="./video/main_mobile.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-10">
            <div className="hero__content">
              <div className="hero__subtitle text-white" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
               {title}
              </div>
              <h1 className="hero__title text-white" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
                {desc}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
