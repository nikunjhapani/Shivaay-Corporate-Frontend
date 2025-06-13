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
            <img src="img/logo/logo.png" alt="logo" />
          </div>
        </div>

        <div className="menuFullScreen__mobile__bg js-menuFullScreen-mobile-bg"></div>

        <div className="menuFullScreen__left">
          <div className="menuFullScreen__bg js-menuFullScreen-bg">
            <img src="img/menu/bg.png" alt="menu-bg" />
          </div>

          <button className="menuFullScreen__close js-menuFullScreen-toggle js-menuFullScreen-close-btn">
            <span className="icon">
              <span></span>
              <span></span>
            </span>
            CLOSE
          </button>

          <div className="menuFullScreen-links js-menuFullScreen-links">
            {menu.map((item: any, index: number) => (
              <div
                className="menuFullScreen-links__item js-menuFullScreen-has-children"
                key={index}
              >
                <Link href={item?.menuURL}>
                  {item?.menuName}
                  {item?.menuType === "Sub Menu" && (
                    <>
                      <i className="icon-arrow-right"></i>
                      <i className="icon-chevron-right"></i>
                    </>
                  )}
                </Link>

                {submenuMap[item._id] && submenuMap[item._id].length > 0 && (
                  <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
                    {submenuMap[item._id].map((sub) => (
                      <div
                        className="menuFullScreen-links-subnav__item"
                        key={sub._id}
                      >
                        <Link href={sub.menuURL}>{sub.menuName}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* <div className="menuFullScreen-links__item js-menuFullScreen-has-children">
              <Link href="#">
                ABOUT US
                <i className="icon-arrow-right"></i>
                <i className="icon-chevron-right"></i>
              </Link>

              <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
                <div className="menuFullScreen-links-subnav__item">
                  <Link href="#">OUR JOURNEY</Link>
                </div>
                <div className="menuFullScreen-links-subnav__item">
                  <Link href="#">OUR PHILOSOPHY</Link>
                </div>
                <div className="menuFullScreen-links-subnav__item">
                  <Link href="#">VISION</Link>
                </div>
                <div className="menuFullScreen-links-subnav__item">
                  <Link href="#">MISSION</Link>
                </div>
                <div className="menuFullScreen-links-subnav__item">
                  <Link href="#">GALLERY</Link>
                </div>
              </div>
            </div> */}

            {/* <div className="menuFullScreen-links__item">
              <Link href="#">ARTISTRY & INNOVATION</Link>
            </div>

            <div className="menuFullScreen-links__item">
              <Link href="#">GLOBAL PRESENCE</Link>
            </div>

            <div className="menuFullScreen-links__item">
              <Link href="#">SOCIAL RESPONSIBILITY</Link>
            </div>

            <div className="menuFullScreen-links__item">
              <Link href="#">GALLERY</Link>
            </div>

            <div className="menuFullScreen-links__item">
              <Link href="#">AWARDS & CERTIFICATES</Link>
            </div>

            <div className="menuFullScreen-links__item">
              <Link href="#">CAREER</Link>
            </div>

            <div className="menuFullScreen-links__item">
              <Link href="#">CONTACT US</Link>
            </div> */}
          </div>
        </div>

        <div className="menuFullScreen__right js-menuFullScreen-right">
          <div className="text-center">
            <div className="mt-40">
              <div className="text-24 text-sec fw-500 text-white">Location</div>
              <div className="mt-10 text-white">
                Plot No. 101-102, Surat Special Economic Zone,
                <br />
                Sursez, Sachin, Surat, <br />
                Gujarat 394230
              </div>
            </div>

            <div className="mt-40">
              <div className="text-24 text-sec text-white fw-500">
                Phone Support
              </div>
              <div className="mt-10 text-white">
                <div>
                  <Link href="#">0261 239 9533</Link>
                </div>
                <div>
                  <Link href="#">info@shivaayjewels.com</Link>
                </div>
              </div>
            </div>

            <div className="mt-40">
              <div className="text-24 text-white text-sec fw-500">
                Connect With Us
              </div>
              <div className="mt-10 text-white">
                <Link href="#">+ 91 98981 98982</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
