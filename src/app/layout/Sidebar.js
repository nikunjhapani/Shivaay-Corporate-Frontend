"use client";
import React, { useState } from "react";
import "./Sidebar.css";
// import { Link } from "react-router-dom";
// import img1 from "../assets/imgs/homeImgs/bg01.png";
import sidebarMenuData from "./menuData.json";
import Link from "next/link";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
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
            {sidebarMenuData.map((item, index) => (
              <div
                key={index}
                className={`menuFullScreen-links__item ${
                  item.hasSubnav ? "js-menuFullScreen-has-children" : ""
                }`}
              >
                <Link href={item.link || "#"} onClick={toggleSidebar}>
                  {item.title}
                  {item.hasSubnav && (
                    <>
                      <i className="icon-arrow-right" />
                      <i className="icon-chevron-right" />
                    </>
                  )}
                </Link>

                {item.hasSubnav && (
                  <div className="menuFullScreen-links-subnav js-menuFullScreen-subnav">
                    {item.subnav.map((sub, subIndex) => (
                      <div
                        key={subIndex}
                        className="menuFullScreen-links-subnav__item"
                      >
                        <Link href={sub.link} onClick={toggleSidebar}>
                          {sub.label}
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
      </div>
    </div>
  );
};

export default Sidebar;
