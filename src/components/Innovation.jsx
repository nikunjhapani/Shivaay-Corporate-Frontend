import Image from "next/image";

const InnovationCard = ({ title, subtitle, description }) => (
  <div className="col-md-4">
    <div className="imageCard -type-1 -hover-1">
      <div className="imageCard__content text-white">
        <div className="-hover-1-slide">
          <div className="uppercase mb-10 md:mb-5">{subtitle}</div>
          <h3 className="text-30 md:text-24 text-white">{title}</h3>
        </div>
        <div className="-hover-1-content">
          <div className="lh-17 mt-20 w-40">
            <div>{description}</div>
          </div>
          <div className="d-flex mt-30">
            <button className="button -md -type-2 -outline-white text-white">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InnovationSection = () => {
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
            <img src="/img/about/21/1.png" alt="image" className="img-cover is-active" />
            <img src="/img/about/21/2.png" alt="image" className="img-cover" />
            <img src="/img/about/21/3.png" alt="image" className="img-cover" />
          </div>
        </div>

        <div className="row border-row-1 hoverTitleInteraction__links">
          <InnovationCard
            title="CAD Technology"
            subtitle="Aided Design (CAD)"
            description="We leverage cutting-edge Computer-Aided Design (CAD) software to bring unmatched accuracy and efficiency to every stage of the design process."
          />
          <InnovationCard
            title="3D Printing"
            subtitle="Innovative Jewelry Designs"
            description="We harness the power of advanced 3D printing technology to bring even the most complex and delicate jewelry designs to life."
          />
          <InnovationCard
            title="Continuous Research & Development"
            subtitle="creativity and craftsmanship"
            description="We are dedicated to continuous research and development."
          />
        </div>
      </section>
    </>
  );
};

export default InnovationSection;
