import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

const imageList = [
  "/img/about/21/1.png",
  "/img/about/21/2.png",
  "/img/about/21/3.png",
];

const InnovationCard = ({ title, subtitle, description, index, setActiveIndex }) => (
  <div
    className="imageCard -type-1 -hover-1"
    onMouseEnter={() => setActiveIndex(index)}
    onFocus={() => setActiveIndex(index)}
  >
    <div className="imageCard__content text-white">
      <div className="-hover-1-slide">
        <div className="uppercase mb-10 md:mb-5">{subtitle}</div>
        <h3 className="text-30 md:text-24 text-white">{title}</h3>
      </div>
      <div className="-hover-1-content">
        <div className="lh-17 mt-20 w-full max-w-md">
          <div>{description}</div>
        </div>
        <div className="d-flex mt-30">
          <a href="/artistry-innovation.html">
            <button className="button -md -type-2 -outline-white text-white">
              Discover More
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const InnovationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="layout-pt-md sm:mt-25">
        <div className="container layout-pb-sm">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h2
                className="text-34 md:text-30 sm:text-24"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Artistry & Innovation
              </h2>
              <div
                className="text-15 sm:text-13 uppercase mb-5"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Where Tradition Meets Cutting-Edge Design
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative hoverTitleInteraction">
        <div className="sectionBg">
          <div className="hoverTitleInteraction__images -type-2">
            {imageList.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`image-${index}`}
                fill
                className={clsx("img-cover", {
                  "is-active": activeIndex === index,
                  "opacity-0": activeIndex !== index,
                })}
                style={{
                  transition: "opacity 0.5s ease",
                  opacity: activeIndex === index ? 1 : 0,
                  zIndex: activeIndex === index ? 1 : 0,
                }}
              />
            ))}
          </div>
        </div>

        <div className="row border-row-1 hoverTitleInteraction__links">
          <div className="col-md-4">
            <InnovationCard
              title="CAD Technology"
              subtitle="Aided Design (CAD)"
              description="We leverage cutting-edge Computer-Aided Design (CAD) software to bring unmatched accuracy and efficiency to every stage of the design process."
              index={0}
              setActiveIndex={setActiveIndex}
            />
          </div>
          <div className="col-md-4">
            <InnovationCard
              title="3D Printing"
              subtitle="Innovative Jewelry Designs"
              description="We harness the power of advanced 3D printing technology to bring even the most complex and delicate jewelry designs to life."
              index={1}
              setActiveIndex={setActiveIndex}
            />
          </div>
          <div className="col-md-4">
            <InnovationCard
              title="Continuous Research & Development"
              subtitle="creativity and craftsmanship"
              description="We are dedicated to continuous research and development. "
              index={2}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InnovationSection;
