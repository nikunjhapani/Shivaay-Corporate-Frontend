import React from "react";
import Banner from "../../components/Banner";
import api from "../../utils/axios";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(
    `${api.defaults.baseURL}/api/socialActivity/getAllApi`,
    {
      method: "POST",
      body: JSON.stringify({}),
    }
  );
  const json = await res.json();
  return json?.data || [];
};

export default async function page() {
  const data = await getData();
  console.log(data, "data");
  return (
    <div>
      <Banner pageName="Social Responsibility" />
      <section className="layout-pt-md layout-pb-md">
        {data?.map((item, index) => (
          <React.Fragment key={item._id}>
            <div className="container">
              {index % 2 === 0 ? (
                <>
                  <div className="row justify-between items-center">
                    <div className="col-xl-6 col-lg-6md:order-1 sm:order-1 p-0">
                      <img
                        src={`${api.defaults.baseURL}/${item?.socialActivityphoto}`}
                        alt="Environmental Sustainability"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6  md:order-2 sm:order-2 p-lg-5 px-md-3 p-4">
                      <div
                        className="sr-icon"
                        style={{ filter: "invert(1)" }}
                        data-aos="zoom-in"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <Image
                          src={`${api.defaults.baseURL}/${item?.socialActivityIcon}`}
                          alt="Icon"
                          width={50}
                          height={50}
                        />
                      </div>
                      <h4
                        className="text-30 lg:text-30 sm:text-20 mt-15"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        {item.title}
                      </h4>
                      <p className="text-16 sm:text-15 mt-15">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="row justify-between items-center  bg-accent-1">
                    <div className="col-xl-6 col-lg-6 md:order-1 sm:order-1 p-0">
                      <img
                        src={`${api.defaults.baseURL}/${item?.socialActivityphoto}`}
                        alt="Environmental Sustainability"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 md:order-2 sm:order-2 p-lg-5 px-md-3 p-4">
                      <div
                        className="sr-icon"
                        data-aos="zoom-in"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <Image
                          src={`${api.defaults.baseURL}/${item?.socialActivityIcon}`}
                          alt="Icon"
                          width={50}
                          height={50}
                        />
                      </div>
                      <h4
                        className="text-30 lg:text-30 sm:text-20 mt-15 text-white"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        {item.title}
                      </h4>
                      <p className="text-16 sm:text-15 mt-15 text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}
