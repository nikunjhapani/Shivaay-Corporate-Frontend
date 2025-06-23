'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import api from '../utils/axios';
import { useIsClient } from './AOSProvider';

export default function ArtistryInnovationContent() {
  const [data, setData] = useState([]);
  const isClient = useIsClient();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${api.defaults.baseURL}api/innovation/getAllApi`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });
      const json = await res.json();
      const activeData = (json?.data || []).filter((item) => item.isActive);
      setData(activeData);
    };

    fetchData();
  }, []);

  return (
    <section className="layout-pt-md layout-pb-md bg-light-1">
      <div className="container">
        <div className="row justify-center text-center mb-30 sm:mb-20">
          <div className="col-xl-9 col-lg-9 px-20 sm:px-10">
            <h2
              className="text-34 md:text-30 sm:text-24 capitalize leading-md"
              {...(isClient && {
                'data-aos': 'fade-up',
                'data-aos-offset': '0',
                'data-aos-duration': '1000',
              })}
            >
              At Shivaay Jewels, we believe in the perfect fusion of tradition
              and technology.
            </h2>
          </div>
        </div>

        <div className="grid gap-10">
          {data.map((item, i) => {
            if (i % 3 !== 0) return null;

            const leftItem = data[i];
            const rightItem1 = data[i + 1];
            const rightItem2 = data[i + 2];

            return (
              <div key={i} className="lineGrid -type-1 md:pt-0 sm:pt-50">
                <div className="lineGrid__content">
                  <div
                    className="mb-20 sm:mb-10 sm:order-2"
                    {...(isClient && {
                      'data-aos': 'zoom-in',
                      'data-aos-offset': '0',
                      'data-aos-duration': '1000',
                    })}
                  >
                    <Image
                      src={`${api.defaults.baseURL}${leftItem?.innovationImage}`}
                      alt={leftItem?.subTitle}
                      width={696}
                      height={469}
                      priority
                      
                      className="w-full rounded-4 shadow-md"
                    />
                  </div>
                  <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                    <h3 className="text-32 sm:text-24 mb-10">{leftItem?.subTitle}</h3>
                    <p className="text-16 leading-md">{leftItem?.description}</p>
                  </div>
                </div>

                <div className="lineGrid__line"></div>

                <div className="lineGrid__content">
                  {rightItem1 && (
                    <>
                      <div
                        className="mb-20 sm:mb-10 sm:order-2"
                        {...(isClient && {
                          'data-aos': 'zoom-in',
                          'data-aos-offset': '0',
                          'data-aos-duration': '1000',
                        })}
                      >
                        <Image
                          src={`${api.defaults.baseURL}${rightItem1?.innovationImage}`}
                          alt={rightItem1?.subTitle}
                          width={696}
                          height={469}
                          priority
                          
                          className="w-full rounded-4 shadow-md"
                        />
                      </div>
                      <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                        <h3 className="text-32 sm:text-24 mb-10">{rightItem1?.subTitle}</h3>
                        <p className="text-16 leading-md">{rightItem1?.description}</p>
                      </div>
                    </>
                  )}
                  {rightItem2 && (
                    <>
                      <div
                        className="mb-20 sm:mb-10 sm:order-2"
                        {...(isClient && {
                          'data-aos': 'zoom-in',
                          'data-aos-offset': '0',
                          'data-aos-duration': '1000',
                        })}
                      >
                        <Image
                          src={`${api.defaults.baseURL}${rightItem2?.innovationImage}`}
                          alt={rightItem2?.subTitle}
                          width={696}
                          height={469}
                          priority
                          
                          className="w-full rounded-4 shadow-md"
                        />
                      </div>
                      <div className="px-40 sm:px-20 text-center mb-60 md:mb-60 sm:mb-40">
                        <h3 className="text-32 sm:text-24 mb-10">{rightItem2?.subTitle}</h3>
                        <p className="text-16 leading-md">{rightItem2?.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
