"use client";
import React, { useState } from "react";
import "./Sidebar.css";
import Link from "next/link";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  menu,
  submenuMap,
  settings,
}) => {
  const [closing, setClosing] = useState(false);

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
    <div
      className={`sidebar-overlay ${sidebarOpen ? "open" : ""} ${
        closing ? "closing" : ""
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
            {menu?.map((item, index) => (
              <div
                key={index}
                className={`menuFullScreen-links__item ${
                  item?.menuType === "Sub Menu"
                    ? "js-menuFullScreen-has-children"
                    : ""
                }`}
              >
                <Link href={item?.menuURL || "#"} onClick={toggleSidebar}>
                  {item?.menuName}
                  {item?.menuType === "Sub Menu" && (
                    <>
                      <i className="icon-arrow-right"></i>
                      <i className="icon-chevron-right"></i>
                    </>
                  )}
                </Link>

                {submenuMap[item?._id] && submenuMap[item?._id]?.length > 0 && (
                  <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
                    {submenuMap[item?._id].map((submenuItem) => (
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
          className={`sidebar-banner ${
            sidebarOpen && !closing ? "show" : closing ? "closing" : ""
          }`}
        >
          <img src="/img/bg01.png" alt="Sidebar Banner" />
          <div className="text-on-image">
            <div className="text-center">
              <div className="mt-40">
                <div className="text-24 text-sec fw-500 text-white">
                  Location
                </div>
                <div
                  className="mt-10 text-white"
                  dangerouslySetInnerHTML={{
                    __html:
                      typeof settings?.address === "string"
                        ? settings.address
                        : "",
                  }}
                ></div>
              </div>

              <div className="mt-40">
                <div className="text-24 text-sec text-white fw-500">
                  Phone Support
                </div>
                <div className="mt-10 text-white">
                  <div>
                    <Link href="#">{settings?.phone}</Link>
                  </div>
                  <div>
                    <Link href="#">{settings?.email}</Link>
                  </div>
                </div>
              </div>

              <div className="mt-40">
                <div className="text-24 text-white text-sec fw-500">
                  Connect With Us
                </div>
                <div className="mt-10 text-white">
                  <Link href="#">{settings?.mobile}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
