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
                  
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </div>
          </div>

          <div className="header__right d-flex items-center h-full">
            <div className="line -vertical bg-white-10 h-full ml-90 mr-90 xl:d-none"></div>

            <Link href="https://lajo.in/" target="_blank">
              <button className="button text-white">
                <svg
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ps-2 sm:d-none">LOGIN</span>
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
