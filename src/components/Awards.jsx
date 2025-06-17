"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "../utils/axios";
import Button from "./ui/Button";

export default function Awards() {
  const [awardsData, setAwardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAwards = async () => {
      try {
        const res = await api.post("api/awards/getAllApi");
        setAwardsData(res.data?.data || []);
      } catch (error) {
        console.error("Error fetching awards:", error);
      } finally {
        setLoading(false);
      }
    };

    getAwards();
  }, []);

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-end">
          <div className="col-auto">
            <div className="text-15 sm:text-13 uppercase mb-5">
              Government and Other Recognitions
            </div>
            <h2 className="text-34 md:text-30 sm:text-24">
              AWARDS & CERTIFICATES
            </h2>
          </div>

          <div className="col-auto">
            <Link href={"/awards-certificates"}>
             <Button>VIEW ALL</Button>
            </Link>
           
          </div>
        </div>

        {loading ? (
          <div className="pt-30 text-center text-16">Loading...</div>
        ) : (
          <div className="row y-gap-30 justify-between pt-10">
            {awardsData.slice(0, 4).map((item, index) => {
              // Optional: remove outer <p> tags from description
              const cleanDescription = item.description?.replace(/^<p>|<\/p>$/g, '');

              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-6"
                  data-aos="fade-up"
                  data-aos-duration={item.delay || "1000"}
                >
                  <Link href="/awards-certificates" className="baseCard -type-2">
                    <div className="baseCard__image ratio ratio-41:50">
                      <Image
                        src={`${api.defaults.baseURL}${item.awardImage}`}
                        alt={item.title}
                        width={300}
                        height={365}
                        className="img-ratio"
                       
                      />
                    </div>

                    <div className="baseCard__content mt-10">
                      <div className="row x-gap-10">
                        <div className="col-auto lh-14 text-16 md:text-13">
                          {item.title}
                        </div>
                      </div>

                      <h4
                        className="text-20 md:text-17 mt-10"
                        dangerouslySetInnerHTML={{ __html: cleanDescription }}
                      ></h4>

                      {/* <div className="d-flex mt-15 md:d-none">
                        <Button>READ MORE</Button>
                      </div> */}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
