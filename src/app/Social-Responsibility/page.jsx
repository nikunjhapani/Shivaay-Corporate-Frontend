// app/social-responsibility/page.jsx
import React from "react";
import Banner from "../../components/Banner";
import Image from "next/image";

const getData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const res = await fetch(`${baseUrl}api/socialActivity/getAllApi`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status);
      return [];
    }

    const json = await res.json();
    return json?.data || [];
  } catch (err) {
    console.error("Error fetching social activities:", err);
    return [];
  }
};

export default async function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const data = await getData();

  return (
    <div>
      <Banner pageName="Social Responsibility" />
      <section className="layout-pt-md layout-pb-md">
        {data?.map((item, index) => (
          <React.Fragment key={item._id}>
            <div className="container">
              <div
                className={`row justify-between items-center ${
                  index % 2 !== 0 ? "bg-accent-1" : ""
                }`}
              >
                <div className="col-xl-6 col-lg-6 p-0">
                  <img
                    src={`${baseUrl}${item?.socialActivityphoto}`}
                    alt="Environmental Sustainability"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 p-lg-5 px-md-3 p-4">
                  <div
                    className="sr-icon"
                    style={index % 2 === 0 ? { filter: "invert(1)" } : {}}
                    data-aos="zoom-in"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={`${baseUrl}${item?.socialActivityIcon}`}
                      alt="Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h4
                    className={`text-30 lg:text-30 sm:text-20 mt-15 ${
                      index % 2 !== 0 ? "text-white" : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-16 sm:text-15 mt-15 ${
                      index % 2 !== 0 ? "text-white" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}
