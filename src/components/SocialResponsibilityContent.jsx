'use client';

import React, { useEffect, useState } from 'react';
import api from '../utils/axios';
import Image from 'next/image';
import { useIsClient } from './AOSProvider';

export default function SocialResponsibilityContent() {
  const [data, setData] = useState([]);
  const isClient = useIsClient();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${api.defaults.baseURL}api/socialActivity/getAllApi`, {
          method: 'POST',
          body: JSON.stringify({}),
        });
        const json = await res.json();
        setData((json?.data || []).filter((item) => item.isActive));
      } catch (error) {
        console.error('Error fetching social responsibility data:', error);
      }
    };

    getData();
  }, []);

  return (
    <section className="layout-pt-md layout-pb-md">
      {data.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div className={`container ${!isEven ? 'bg-accent-1' : ''}`} key={item._id}>
            <div className="row justify-between items-center">
              {/* Image column */}
              <div
                className={`col-xl-6 col-lg-6 p-0 ${isEven ? '' : 'order-lg-2 order-1'}`}
                {...(isClient && {
                  'data-aos': 'zoom-in',
                  'data-aos-offset': '0',
                  'data-aos-duration': '1000',
                })}
              >
                <Image
                  src={`${api.defaults.baseURL}${item?.socialActivityphoto}`}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              </div>

              {/* Text column */}
              <div
                className={`col-xl-6 col-lg-6 p-lg-5 px-md-3 p-4 ${isEven ? '' : 'order-lg-1 order-2'}`}
              >
                <div
                  className="sr-icon mb-3"
                  style={{ filter: isEven ? 'invert(1)' : 'none' }}
                >
                  <Image
                    src={`${api.defaults.baseURL}${item?.socialActivityIcon}`}
                    alt="Icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h4
                  className={`text-30 lg:text-30 sm:text-20 mt-15 ${isEven ? '' : 'text-white'}`}
                  {...(isClient && {
                    'data-aos': 'fade-up',
                    'data-aos-offset': '0',
                    'data-aos-duration': '1000',
                  })}
                >
                  {item.title}
                </h4>
                <p className={`text-16 sm:text-15 mt-15 ${isEven ? '' : 'text-white'}`}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
