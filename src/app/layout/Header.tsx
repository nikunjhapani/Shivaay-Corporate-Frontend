"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ settings, setSidebarOpen, menu, submenuMap }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [headerColor, setHeaderColor] = useState("-blur");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHeaderColor("bg-accent-1 oc-9 ");
      } else {
        setHeaderColor("-blur");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSidebar = () => {
    setSidebarOpen((prev: any) => !prev);
  };

  return (
    <>
      <header
        className={`header -h-110 -mx-60 -border-bottom-1 ${headerColor} is-sticky`}
        data-add-bg="bg-accent-1"
        data-x="header"
        data-x-toggle="-is-menu-opened"
        // ref={headerRef}
      >
        <div className="header__container h-full items-center">
          <div className="header__left d-flex items-center">
            <button
              className="d-flex items-center cursor-pointer js-menuFullScreen-toggle"
              onClick={openSidebar}
            >
              <i className="icon-menu text-11 text-white"></i>
              <div className="text-15 sm:text-13 uppercase text-white ml-15 sm:d-none fw-600">
                Menu
              </div>
            </button>
          </div>

          <div className="header__center">
            <div className="header__logo">
              <Link href="/">
                <Image
                  src={`${baseUrl}${settings?.websiteLogo}`}
                  alt="logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="header__right d-flex items-center h-full">
            <div className="line -vertical bg-white-10 h-full ml-90 mr-90 xl:d-none"></div>

            <Link href="#">
              <button className="button text-white mr-30 xl:d-none">
                <i className="icon-phone text-20 text-white mr-15"></i>
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="menuFullScreen js-menuFullScreen">
        <div className="menuFullScreen__topMobile js-menuFullScreen-topMobile">
          <div className="d-flex items-center text-white js-menuFullScreen-toggle">
            <i className="icon-menu text-9"></i>
            <div className="text-15 sm:text-13 uppercase ml-30 sm:d-none">
              Menu
            </div>
          </div>
          <div className="menuFullScreen__img">
            <Image
              src={`${baseUrl}${settings?.websiteLogo}`}
              alt="logo"
              width={120}
              height={40}
              priority
            />
          </div>
        </div>

        <div className="menuFullScreen__mobile__bg js-menuFullScreen-mobile-bg"></div>
      </div>
    </>
  );
}
