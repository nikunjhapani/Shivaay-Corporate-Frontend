"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "../../utils/axios";
import useStickyHeader from "./useStickyHeader";

export default function Header() {
  const [siteSettings, setSiteSettings] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  useStickyHeader(headerRef);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch(`${api.defaults.baseURL}/api/menu/getAllApi`, {
          method: "POST", // use POST or GET based on your API
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const data = await res.json();
        setMenuData(data?.data || []);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    }
    async function fetchSettings() {
      try {
        const res = await fetch(
          `${api.defaults.baseURL}/api/websiteSettings/getSettings`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch website settings");
        }
        const data = await res.json();
        setSiteSettings(data?.data || {});
      } catch (error) {
        console.error("Error fetching site settings:", error);
      }
    }

    fetchSettings();
    fetchMenu();
  }, []);

 
  const filteredMenuData = menuData.filter(
    (item) => item.menuName.toLowerCase() !== "home"
  );
  const parentMenus = filteredMenuData.filter((item) => !item.parentId);
  const submenuMap = menuData.reduce((acc, item) => {
    if (item.parentId && item.parentId._id) {
      const parentKey = item.parentId._id;
      if (!acc[parentKey]) acc[parentKey] = [];
      acc[parentKey].push(item);
    }
    return acc;
  }, {});
  return (
    <>
      <div
        className={`menuFullScreen js-menuFullScreen ${
          isOpen ? "is-active" : ""
        }`}
      >
        <div className="menuFullScreen__topMobile js-menuFullScreen-topMobile">
          <div
            className="d-flex items-center text-white js-menuFullScreen-toggle"
            onClick={toggleMenu}
          >
            <i className="icon-menu text-9"></i>
            <div className="text-15 sm:text-13 uppercase ml-30 sm:d-none">
              Menu
            </div>
          </div>

          <div className="menuFullScreen__img">
            <img src="img/general/logo.png" alt="logo" />
          </div>
        </div>

        <div className="menuFullScreen__mobile__bg js-menuFullScreen-mobile-bg"></div>

        <div className="menuFullScreen__left">
          <div className="menuFullScreen__bg js-menuFullScreen-bg">
            <img src="img/menu/bg.png" alt="image" />
          </div>

          <button
            className="menuFullScreen__close js-menuFullScreen-toggle js-menuFullScreen-close-btn"
            onClick={toggleMenu}
          >
            <span className="icon">
              <span></span>
              <span></span>
            </span>
            CLOSE
          </button>

          <div className="menuFullScreen-links js-menuFullScreen-links">
            {parentMenus.map((item, index) => (
              <div className="menuFullScreen-links__item" key={index}>
                <Link href={item?.menuURL} onClick={handleLinkClick}>
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
                    {submenuMap[item._id].map((submenuItem) => (
                      <div
                        className="menuFullScreen-links-subnav__item"
                        key={submenuItem._id}
                      >
                        <Link
                          href={submenuItem.menuURL}
                          onClick={handleLinkClick}
                        >
                          {submenuItem.menuName}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className="menuFullScreen__right js-menuFullScreen-right"
          style={{
            backgroundImage: `url(${api.defaults.baseURL}/${siteSettings?.menuImage1})`,
          }}
        >
          <div className="text-center">
            <div className="mt-40">
              <div className="text-24 text-sec fw-500 text-white">Location</div>
              <div
                className="mt-10 text-white"
                dangerouslySetInnerHTML={{ __html: siteSettings?.address }}
              ></div>
            </div>

            <div className="mt-40">
              <div className="text-24 text-sec text-white fw-500">
                Phone Support
              </div>
              <div className="mt-10 text-white">
                <div>
                  <Link href={`tel:${siteSettings?.phone}`}>
                    {siteSettings?.phone}
                  </Link>
                </div>
                <div>
                  <Link href={`mailto:${siteSettings?.email}`}>
                    {siteSettings?.email}
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-40">
              <div className="text-24 text-white text-sec fw-500">
                Connect With Us
              </div>
              <div className="mt-10 text-white">
                <Link href={`tel:${siteSettings?.mobile}`}>
                  {siteSettings?.mobile}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className="header -h-110 -mx-60 -blur -border-bottom-1 js-header is-hidden-on-scroll bg-accent-1 is-sticky"
        data-add-bg="bg-accent-1"
        data-x="header"
        data-x-toggle="-is-menu-opened"
        ref={headerRef}
      >
        <div className="header__container h-full items-center">
          <div className="header__left d-flex items-center">
            <button
              className="d-flex items-center cursor-pointer js-menuFullScreen-toggle"
              onClick={toggleMenu}
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
                  src={`${api.defaults.baseURL}/${siteSettings?.websiteLogo}`}
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
    </>
  );
}
