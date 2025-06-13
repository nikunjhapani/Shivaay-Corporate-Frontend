"use client";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ParentHeader = ({ settings, menu, submenuMap }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header
        settings={settings}
        setSidebarOpen={setSidebarOpen}
        menu={menu}
        submenuMap={submenuMap}
      />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        menu={menu}
        submenuMap={submenuMap}
        settings={settings}
      />
    </>
  );
};

export default ParentHeader;
