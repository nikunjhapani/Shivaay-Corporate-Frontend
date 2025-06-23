import Image from "next/image";
import CareerForm from "./CareerForm";

type BannerItem = {
  _id: string;
  bannerType: "image" | "video";
  bannerTitle: string;
  bannerLink: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  sort_order_no: number;
  isActive: boolean;
  pageName: string;
};

type Props = {
  pageName: string;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function getBanners(pageName: string): Promise<BannerItem[]> {
  const res = await fetch(`${baseURL}api/banner/getAllApi`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pageName }),
    cache: "no-store",
  });

  const data = await res.json();
  return data?.data?.filter(
    (item: BannerItem) => item.pageName === pageName && item.isActive
  );
}

export default async function Banner({ pageName }: Props) {
  const banners = await getBanners(pageName);

  if (!banners || banners.length === 0) return null;

  return (
    <>
      {banners.map((banner) => {
        const isVideo = banner.bannerType === "video";
        const cleanDescription = banner.description?.replace(/^<p>|<\/p>$/g, "");

        return (
          <div key={banner._id}>
            {pageName === "Career" ? (
              <section
                className="job-section"
                style={{
                  backgroundImage: `url(${baseURL}${banner.desktopImage})`,
                }}
              >
                <div className="container">
                  <div className="row justify-center text-center">
                    <div className="col-xl-6 col-lg-6 d-flex items-center text-left">
                      <div>
                        <h1 className="hero__title text-white">{banner.bannerTitle}</h1>
                        <div className="hero__content">
                          <div
                            className="hero__subtitle text-white text-justify"
                            dangerouslySetInnerHTML={{ __html: cleanDescription }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 job-bg">
                      <CareerForm />
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section className="hero -type-1 z-1">
                <div className="video-overlay01"></div>
                <div className="hero__bg">
                  {isVideo ? (
                    <>
                      <video width="100%" className="desktop-v" autoPlay loop muted playsInline>
                        <source src={`${baseURL}${banner.desktopImage}`} type="video/mp4" />
                      </video>
                      <video width="100%" className="mobile-v" autoPlay loop muted playsInline>
                        <source src={`${baseURL}${banner.desktopImage}`} type="video/mp4" />
                      </video>
                    </>
                  ) : (
                    <>
                      <Image
                        src={`${baseURL}${banner.desktopImage}`}
                        alt={banner.bannerTitle}
                        width={1920}
                        height={800}
                        className="hidden md:block w-full object-cover"
                        priority
                      />
                      <Image
                        src={`${baseURL}${banner.mobileImage}`}
                        alt={banner.bannerTitle}
                        width={768}
                        height={500}
                        className="md:hidden w-full object-cover"
                        priority
                      />
                    </>
                  )}
                </div>

                <div className="container">
                  <div className="row justify-center text-center">
                    <div className="col-xl-8 col-lg-10">
                      <h1 className="hero__title text-white">{banner.bannerTitle}</h1>
                      <div className="hero__content">
                        <div
                          className="hero__subtitle text-white"
                          dangerouslySetInnerHTML={{ __html: cleanDescription }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        );
      })}
    </>
  );
}
