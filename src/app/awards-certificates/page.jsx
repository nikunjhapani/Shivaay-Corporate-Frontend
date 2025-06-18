import api from "../../utils/axios";
import Banner from "../../components/Banner";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/ui/Button";
import getMetadataForSlug from "../../utils/getMetadataForSlug";

const getAwards = async () => {
  const res = await fetch(`${api.defaults.baseURL}api/awards/getAllApi`, {
    method: "POST",
    cache: "no-store", 
  });
  const json = await res.json();
  return json?.data || [];
};

export async function generateMetadata() {
  return await getMetadataForSlug("awards-certificates"); 
}

export default async function page() {
  const awardsData = await getAwards();

  return (
    <div>
      <Banner pageName="Awards & Certificates" />
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between pt-10">
            {awardsData.slice(0, 4).map((item, index) => {
              const cleanDescription = item.description?.replace(
                /^<p>|<\/p>$/g,
                ""
              );
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-6"
                  data-aos="fade-up"
                  data-aos-duration={item.delay || "1000"}
                >
                  <Link
                    href={`${api.defaults.baseURL}${item.awardPdf}`}
                    target="_blank"
                    className="baseCard -type-2"
                  >
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

                      <div className="d-flex mt-15 md:d-none">
                        <Button>READ MORE</Button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
