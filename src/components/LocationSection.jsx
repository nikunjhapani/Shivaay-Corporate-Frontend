"use client";
import React from "react";
import { useIsClient } from "./AOSProvider";

export default function LocationSection() {
  const isClient = useIsClient();
  return (
    <section className="relative layout-pt-lg layout-pb-lg md:pt-0 bg-light-1">
      <div className="container">
        <div className="row justify-end md:justify-between">
          <div className="sectionBg col-lg-6 col-12 -left z-1">
            <div className="h-full md:h-map md:mb-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.573379295639!2d72.86742657401102!3d21.0896948856853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0516516465555%3A0x22fd4493701f3ac1!2sShivaay%20Jewels!5e0!3m2!1sen!2sin!4v1747131244099!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-5 col-12">
            <h2
              className="text-34 md:text-30 sm:text-24"
               {...(isClient && {
                  "data-aos": "fade-up",
                  "data-aos-offset": "0",
                  "data-aos-duration": "1000",
                })}
            >
              Location
            </h2>
            <div className="mt-20">
              <p className="mb-10">
                <b>Shivaay Jewels</b>
              </p>
              <p className="mb-20">
                Plot No. 101-102, Surat Special Economic Zone,
                <br />
                Sursez, Sachin, Surat, Gujarat 394230
              </p>
              <div className="mb-10">
                <a href="mailto:info@shivaayjewels.com">
                  <i className="icon-email text-15 mr-10"></i>{" "}
                  info@shivaayjewels.com
                </a>
              </div>
              <div>
                <a href="tel:02612399533">
                  <i className="icon-phone text-15 mr-10"></i> 0261 239 9533
                </a>
              </div>
            </div>

            <button
              className="button -md -type-2 bg-accent-2 mt-40 text-white"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/WWKCEE4nFowvsTuT8",
                  "_blank"
                )
              }
              type="button"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
