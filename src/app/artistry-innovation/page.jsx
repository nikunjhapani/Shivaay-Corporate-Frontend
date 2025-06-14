import React from "react";
import Essence from "../../components/Essence";
import Banner from "../../components/Banner";
import Image from "next/image";
import { postData } from "../../utils/apiMethods";
import { useQuery } from "@tanstack/react-query";
export const getData = async () => {
  const res = await postData("/api/innovation/getAllApi");
  return res?.data || [];
};
export default function page() {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["innovation"],
  //   queryFn: getData,
  // });
  
  return (
    <>
      <Banner pageName="Artistry Innovation" />
      <section className="layout-pt-md layout-pb-md bg-light-1">
        <div className="container">
          {/* Section Header */}
          <div className="row justify-center text-center mb-30 sm:mb-20">
            <div className="col-xl-9 col-lg-9 px-20 sm:px-10">
              <h2
                className="text-34 md:text-30 sm:text-24 capitalize leading-md"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                At Shivaay Jewels, we believe in the perfect fusion of tradition
                and technology.
              </h2>
            </div>
          </div>

          {/* Line Grid */}
          <div className="lineGrid -type-1 md:pt-0 sm:pt-50">
            {/* CAD Technology */}
            <div className="lineGrid__content sm:mb-20">
              <div
                className="mb-20 sm:mb-10 sm:order-2"
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <Image
                  src="/img/AI01.jpg"
                  alt="CAD Technology"
                  width={696}
                  height={469}
                  className="w-full rounded-4 shadow-md"
                />
              </div>
              <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                <h3 className="text-32 sm:text-24 mb-10">CAD Technology</h3>
                <p className="text-16 leading-md">
                  We leverage cutting-edge Computer-Aided Design (CAD) software
                  to bring unmatched accuracy and efficiency to every stage of
                  the design process.
                </p>
              </div>
            </div>

            <div className="lineGrid__line"></div>

            {/* 3D Printing */}
            <div className="lineGrid__content">
              <div
                className="mb-20 sm:mb-10 sm:order-2"
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <Image
                  src="/img/AI02.jpg"
                  alt="3D Printing"
                  width={696}
                  height={469}
                  className="w-full rounded-4 shadow-md"
                />
              </div>
              <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                <h3 className="text-32 sm:text-24 mb-10">3D Printing</h3>
                <p className="text-16 leading-md">
                  We harness the power of advanced 3D printing technology to
                  bring even the most complex and delicate jewelry designs to
                  life.
                </p>
              </div>

              {/* R&D Section */}
              <div
                className="mb-20 sm:mb-10 sm:order-2"
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <Image
                  src="/img/AI03.jpg"
                  alt="Research and Development"
                  width={696}
                  height={469}
                  className="w-full rounded-4 shadow-md"
                />
              </div>
              <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                <h3 className="text-32 sm:text-24 mb-10">
                  Continuous <br /> Research &amp; Development
                </h3>
                <p className="text-16 leading-md">
                  We are dedicated to continuous research and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Essence />
    </>
  );
}
