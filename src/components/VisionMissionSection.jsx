import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "./ui/ArrowIcon"; // Create this separately if needed

const items = [
  {
    title: "Vision",
    imgSrc: "/img/about/12/vision.jpg",
    text: `Our vision at Shivaay Jewels is to lead the global jewelry market, not just in design and quality, but in ethical business practices. We aspire to redefine the standards of luxury jewelry, blending creativity, integrity, and innovation to set the benchmark for excellence.`,
    link: "/vision",
  },
  {
    title: "Mission",
    imgSrc: "/img/about/12/mision.jpg",
    text: `Our mission at Shivaay Jewels is clear: to create jewelry that is more than just a product but a masterpiece. Every piece we design is crafted with care and precision to inspire generations, transcending time and trends.`,
    link: "/mission",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="relative layout-pt-lg">
      <div className="container">
        <div className="row">
          {items.map((item, i) => (
            <div className="col-lg-6 col-md-6" key={i}>
              <div className="row items-center">
                <div
                  className="col-lg-6 mb-3 sm:px-40"
                  data-aos="zoom-in"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    className="rounded-8"
                    width={300}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="col-lg-6 text-left sm:px-40">
                  <h3 className="mb-5">{item.title}</h3>
                  <p className="text-15 text-justify">{item.text}</p>
                  <div className="mt-15">
                    <Link href={item.link}>
                      <button className="button -type-1">
                        <i className="-icon">
                          <ArrowIcon color="#122223" />
                        </i>
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
