"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "../utils/axios";
import Button from "./ui/Button";
import { useIsClient } from "./AOSProvider";
import Fancybox from "./ui/FancyBox";

export default function Awards() {
  const [awardsData, setAwardsData] = useState([]);
  const isClient = useIsClient();

  useEffect(() => {
    const getAwards = async () => {
      try {
        const res = await fetch(`${api.defaults.baseURL}api/awards/getAllApi`, {
          method: "POST",
          cache: "no-store",
        });
        const data = await res.json();
        const allAwards = data?.data || [];
        setAwardsData(allAwards.filter((item) => item.isActive));
      } catch (error) {
        console.error("Error fetching awards:", error);
      }
    };

    getAwards();
  }, []);

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-end">
          <div className="col-auto">
            <div className="text-15 sm:text-13 mb-5 uppercase">
              Government and Other Recognitions
            </div>
            <h2 className="text-34 md:text-30 sm:text-24">
              Awards & Certificates
            </h2>
          </div>

          <div className="col-auto">
            <Link href="/awards-certificates">
              <Button className="py-0">VIEW ALL</Button>
            </Link>
          </div>
        </div>

        <div className="row y-gap-30 pt-10">
          <Fancybox>
            {awardsData.slice(0, 4).map((item, index) => {
              const cleanDescription = item?.description?.replace(
                /^<p>|<\/p>$/g,
                ""
              );
              const imageUrl = item?.awardImage
                ? `${api.defaults.baseURL}${item.awardImage}`
                : "/images/placeholder.jpg";
              const pdfUrl = item?.awardPdf
                ? `${api.defaults.baseURL}${item.awardPdf}`
                : "#";

              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-6"
                  {...(isClient && {
                    "data-aos": "fade-up",
                    "data-aos-duration": item.delay || "1000",
                  })}
                >
                  <div className="baseCard -type-2">
                    <a
                      href={pdfUrl}
                      data-fancybox="gallery"
                      className="baseCard__image ratio ratio-41:50 fancybox-link"
                    >
                      <Image
                        src={imageUrl}
                        alt={item.title}
                        width={300}
                        height={365}
                        className="img-ratio"
                      />
                    </a>

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

                      <div className="d-flex mt-15">
                        <a href={pdfUrl} target="_blank" rel="noreferrer">
                          <Button className="py-0">READ MORE</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fancybox>
        </div>
      </div>
    </section>
  );
}
