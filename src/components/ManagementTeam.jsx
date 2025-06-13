import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/axios";
import { BASE_URL } from "../utils/config";

import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";
import Link from "next/link";

const fetchData = async () => {
  const { data } = await api.post("/api/managementTeam/getAllApi");
  return data?.data || []; // Assuming response is { success: true, data: [...] }
};

export default function ManagementTeam() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["managementTeam"],
    queryFn: fetchData,
  });


  return (
    <section className="layout-pt-md layout-pb-lg px-10 container">
      <div className="container layout-pb-sm">
        <div className="row justify-center text-center">
          <SectionTitle
            title="VISIONARIES BEHIND THE SPARKLE"
            paragraph="Management Team"
          />
        </div>
      </div>

      <div className="row x-gap-10 y-gap-10">
        {data?.map((item) => (
          <div
            key={item._id}
            className="col-lg-6 col-md-6"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <Link href="/management-team" className="baseCard -type-4">
              <div className="baseCard__image ratio ratio-95:80 rounded-16">
                <Image
                  src={`${BASE_URL}/${item.profile}`}
                  alt={item.name}
                  className="img-ratio"
                  fill="fill"
                  loading="eager"
                />
              </div>

              <div className="baseCard__content d-flex flex-column justify-end">
                <h4 className="text-30 xl:text-24 md:text-20 text-white">
                  {item.name}
                </h4>
                <p className="text-17 text-white"> {item.designation}</p>

                <div className="d-flex mt-20 md:mt-15">
                  <Button
                    className="button -type-1 text-white"
                    iconColor="white"
                  >
                    DISCOVER MORE
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
