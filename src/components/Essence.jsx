"use client";
import { useQuery } from "@tanstack/react-query";
import { postData } from "../utils/apiMethods";
import api from "../utils/axios";
import Image from "next/image";

export const getEssence = async () => {
  const res = await postData("/api/essence/getAllApi");
  return (res?.data || []).filter((item) => item.isActive);
};

export default function Essence() {
  const { data } = useQuery({
    queryKey: ["essence"],
    queryFn: getEssence,
  });
  return (
    <section className="layout-pt-md">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-34 md:text-30 sm:text-24">THE ESSENCE</h2>
            <div className="text-15 sm:text-13 uppercase mb-5">
              SHIVAAY JEWELS
            </div>
          </div>
        </div>

        <div className="row justify-between">
          {data
            ?.filter((item) => item.isActive)
            .map((item, index) => (
              <div
                key={item.id || index}
                className="col-xl-2 col-md-4 col-6"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration={500 + index * 200}
              >
                <div className="iconCard -type-1 -hover-2 text-center p-4">
                  <div className="iconCard__bg rounded-16"></div>
                  <div className="iconCard__icon text-50">
                    <Image src={`${api.defaults.baseURL}${item.icon}`} width={75} height={75} alt={item.label} />
                  </div>
                  <h4 className="text-20 sm:text-17 lh-1 mt-20 sm:mt-15">
                    {item.label}
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
