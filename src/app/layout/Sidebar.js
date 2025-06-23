"use client";
import React, { useState } from "react";
import "./Sidebar.css";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  menu,
  submenuMap,
  settings,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [closing, setClosing] = useState(false);

  const menuData = menu?.filter(
    (item) => item.menuName?.toLowerCase() !== "home"
  );

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setClosing(true);
      setTimeout(() => {
        setSidebarOpen(false);
        setClosing(false);
      }, 600);
    } else {
      setSidebarOpen(true);
    }
  };

  return (
    <>
      {/* For Desktop */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""} ${closing ? "closing" : ""
          }`}
      >
        <div className="sidebar-container">
          <div
            className={`sidebar-menu ${sidebarOpen && !closing ? "show" : ""}`}
          >
            <button
              className="menuFullScreen__close js-menuFullScreen-toggle js-menuFullScreen-close-btn"
              onClick={toggleSidebar}
            >
              <span className="icon">
                <span></span>
                <span></span>
              </span>
              CLOSE
            </button>

            <div className="menuFullScreen-links js-menuFullScreen-links">
              {menuData
                ?.filter((item) => item?.isActive)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`menuFullScreen-links__item ${item?.menuType === "Sub Menu"
                      ? "js-menuFullScreen-has-children"
                      : ""
                      }`}
                  >
                    <Link
                      href={
                        item?.menuType === "Sub Menu"
                          ? "#"
                          : item?.menuURL || "#"
                      }
                      onClick={toggleSidebar}
                    >
                      {item?.menuName}
                      {item?.menuType === "Sub Menu" && (
                        <>
                          <i className="icon-arrow-right"></i>
                          <i className="icon-chevron-right"></i>
                        </>
                      )}
                    </Link>

                    {submenuMap[item?._id] &&
                      submenuMap[item?._id]?.length > 0 && (
                        <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
                          {submenuMap[item?._id]
                            ?.filter((sub) => sub?.isActive)
                            .map((submenuItem) => (
                              <div
                                key={submenuItem?._id}
                                className="menuFullScreen-links-subnav__item"
                              >
                                <Link
                                  href={submenuItem?.menuURL}
                                  onClick={toggleSidebar}
                                >
                                  {submenuItem?.menuName}
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
            className={`sidebar-banner ${sidebarOpen && !closing ? "show" : closing ? "closing" : ""
              }`}
          >
            <Image
              src={`${baseUrl}${settings?.menuImage1}`}
              alt="Sidebar Banner"
              width={600}
              height={400}
              priority
              
            />
            <div className="text-on-image">
              <div className="text-center">
                <div className="mt-40">
                  <div className="text-24 text-sec fw-500 text-white">
                    Location
                  </div>
                  <div
                    className="mt-10 text-white force-white"
                    dangerouslySetInnerHTML={{
                      __html: settings.address,
                    }}
                  ></div>
                </div>

                <div className="mt-40">
                  <div className="text-24 text-sec text-white fw-500">
                    Phone Support
                  </div>
                  <div className="mt-10 text-white">
                    <div>
                      <Link href={`tel:${settings?.phone}`}>
                        {settings?.phone}
                      </Link>
                    </div>
                    <div>
                      <Link href={`mailto:${settings?.email}`}>
                        {settings?.email}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-40">
                  <div className="text-24 text-white text-sec fw-500">
                    Connect With Us
                  </div>
                  <div className="mt-10 text-white">
                    <Link href={`tel:${settings?.mobile}`}>
                      {settings?.mobile}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <div
        className={`sidebar-overlay-mobile ${sidebarOpen ? "open" : ""} ${closing ? "closing" : ""
          }`}
      >
        <div className="menuFullScreen__topMobile js-menuFullScreen-topMobile">
          <div
            className="d-flex items-center text-white js-menuFullScreen-toggle"
            onClick={toggleSidebar}
          >
            <i className="icon-menu text-9"></i>
            <div className="text-15 sm:text-13 uppercase ml-30 sm:d-none">
              Menu
            </div>
          </div>

          <div className="menuFullScreen__img">
            <Image
              src={`${baseUrl}${settings?.websiteLogo}`}
              width={100}
              height={100}
              priority
              
              alt="logo"
            />
          </div>
        </div>
        <div className="sidebar-mobile-menu">
          <div className="accordion-menu">
            {menuData?.map((item, index) => {
              const hasSubmenu =
                item?.menuType === "Sub Menu" &&
                submenuMap[item?._id]?.length > 0;
              return (
                <div key={index} className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() =>
                      hasSubmenu
                        ? setOpenAccordionIndex(
                          openAccordionIndex === index ? null : index
                        )
                        : toggleSidebar()
                    }
                  >
                    <Link
                      href={
                        item?.menuType === "Sub Menu"
                          ? "#"
                          : item?.menuURL || "#"
                      }
                    >
                      {item?.menuName}
                    </Link>
                    {hasSubmenu && (
                      <span
                        className={`accordion-toggle ${openAccordionIndex === index ? "rotate" : ""
                          }`}
                      >
                        <i className="icon-chevron-right"></i>
                      </span>
                    )}
                  </div>
                  {hasSubmenu && openAccordionIndex === index && (
                    <div className="accordion-body">
                      {submenuMap[item?._id].map((submenuItem) => (
                        <div
                          key={submenuItem?._id}
                          className="accordion-subitem"
                        >
                          <Link
                            href={submenuItem?.menuURL}
                            onClick={toggleSidebar}
                          >
                            {submenuItem?.menuName}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
