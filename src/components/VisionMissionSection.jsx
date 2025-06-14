import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import { postData } from "../utils/apiMethods";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/axios";
export const getsData = async () => {
  const res = await postData("/api/cms/getAllApi");
  return res?.data || [];
};
const stripHtmlAndLimit = (html = "", maxLength = 200) => {
  const text = html.replace(/<[^>]*>?/gm, "");
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default function VisionMissionSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["VisionMission"],
    queryFn: getsData,
  });
  const items = data
    ?.filter(
      (item) =>
        item.page_title === "Our Vision" || item.page_title === "Our Mission"
    )
    .map((item) => ({
      ...item,
      shortText: stripHtmlAndLimit(item.page_editor, 250),
      cleanTitle: item.page_title.replace(/^Our\s+/i, ""),
    }));
  return (
    <section className="relative layout-pt-lg">
      <div className="container">
        <div className="row">
          {items?.map((item, i) => (
            <div className="col-lg-6 col-md-6 sm:mb-10" key={i}>
              <div className="row items-center">
                <div
                  className="col-lg-6 mb-3 sm:px-40"
                  data-aos="zoom-in"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <Image
                    src={`${api.defaults.baseURL}/${item.page_image}`}
                    alt={item.cleanTitle}
                    className="rounded-8"
                    width={300}
                    height={300}
                    layout="responsive"
                    
                  />
                </div>
                <div className="col-lg-6 text-left sm:px-40">
                  <h3 className="mb-5">{item.cleanTitle}</h3>
                  <p className="text-15 text-justify">{item.shortText}</p>
                  <div className="mt-15">
                    <Link href={item.page_link}>
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
