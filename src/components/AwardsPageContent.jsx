// 'use client';

// import React, { useEffect, useState } from 'react';
// import api from '../utils/axios';
// import Link from 'next/link';
// import Image from 'next/image';
// import Button from './ui/Button';
// import { useIsClient } from './AOSProvider';

// export default function AwardsPageContent() {
//   const [awardsData, setAwardsData] = useState([]);
//   const isClient = useIsClient();

//   useEffect(() => {
//     const getAwards = async () => {
//       try {
//         const res = await fetch(`${api.defaults.baseURL}api/awards/getAllApi`, {
//           method: 'POST',
//         });
//         const json = await res.json();
//         const allAwards = json?.data || [];
//         setAwardsData(allAwards.filter(item => item.isActive === true));
//       } catch (error) {
//         console.error('Error fetching awards:', error);
//       }
//     };

//     getAwards();
//   }, []);

//   return (
//     <section className="layout-pt-lg layout-pb-lg">
//       <div className="container">
//         <div className="row y-gap-30 pt-10">
//           {awardsData.map((item, index) => {
//             const cleanDescription = item.description?.replace(/^<p>|<\/p>$/g, '');

//             return (
//               <div
//                 key={index}
//                 className="col-lg-3 col-md-6 col-6"
//                 {...(isClient && {
//                   'data-aos': 'fade-up',
//                   'data-aos-offset': '0',
//                   'data-aos-duration': '1000',
//                 })}
//               >
//                 <Link
//                   href={`${api.defaults.baseURL}${item?.awardPdf}`}
//                   target="_blank"
//                   className="baseCard -type-2"
//                 >
//                   <div className="baseCard__image ratio ratio-41:50">
//                     <Image
//                       src={`${api.defaults.baseURL}${item?.awardImage}`}
//                       alt={item.title}
//                       width={300}
//                       height={365}
//                       className="img-ratio"
//                     />
//                   </div>

//                   <div className="baseCard__content mt-10">
//                     <div className="row x-gap-10">
//                       <div className="col-auto lh-14 text-16 md:text-13">
//                         {item?.title}
//                       </div>
//                     </div>

//                     <h4
//                       className="text-20 md:text-17 mt-10"
//                       dangerouslySetInnerHTML={{ __html: cleanDescription }}
//                     ></h4>

//                     <div className="d-flex mt-15 md:d-none">
//                       <Button className="py-0">READ MORE</Button>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "../utils/axios";
import Button from "./ui/Button";
import { useIsClient } from "./AOSProvider";
import Fancybox from "./ui/FancyBox";

export default function AwardsPageContent() {
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
        <div className="row y-gap-30 pt-10">
          <Fancybox>
            {awardsData.map((item, index) => {
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
