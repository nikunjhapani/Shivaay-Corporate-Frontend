import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import { postData } from "../utils/apiMethods";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/axios";

export const getsData = async () => {
  const res = await postData("api/menu/getAllApi");
  return res?.data || [];
};
export default function VisionMissionSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["VisionMission"],
    queryFn: getsData,
  });
  const items = data?.filter((item) => item.menuType === "CMS" && (item.menuName === "Vision" || item.menuName === "Mission"));
  return (
    <section className="relative layout-pt-lg">
      <div className="container">
        <div className="row">
          {items?.map((item, i) => (
            <div className="col-lg-6 col-md-6" key={i}>
              <div className="row items-center">
                <div
                  className="col-lg-6 mb-3 sm:px-40"
                  data-aos="zoom-in"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <Image
                    src={`${api.defaults.baseURL}/${item?.cmsId?.page_image}`}
                    alt={item?.cmsId.page_title}
                    className="rounded-8"
                    width={300}
                    height={300}
                   
                  />
                </div>
                <div className="col-lg-6 text-left sm:px-40">
                  <h3 className="mb-5">{item?.cmsId?.page_title}</h3>
                  <p className="text-15 text-justify">{item?.cmsId.page_subtitle}</p>
                  <div className="mt-15">
                    <Link href={item?.menuURL}>
                      <Button>READ MORE</Button>
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
