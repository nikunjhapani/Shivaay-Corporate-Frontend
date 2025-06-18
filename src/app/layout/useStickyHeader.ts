"use client";

import { useEffect, useRef } from "react";

const useStickyHeader = (headerRef: React.RefObject<HTMLElement>) => {
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const classFromAttr = header.getAttribute("data-add-bg") || "";

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Hide on scroll down, show on scroll up
      if (scrollTop > lastScrollTop.current) {
        header.classList.add("is-hidden-on-scroll");
      } else {
        header.classList.remove("is-hidden-on-scroll");
      }

      // Add sticky and optional background class
      if (scrollTop > 6) {
        header.classList.add("is-sticky");
        if (classFromAttr) header.classList.add(classFromAttr);
      } else {
        header.classList.remove("is-sticky");
        if (classFromAttr) header.classList.remove(classFromAttr);
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [headerRef]);
};

export default useStickyHeader;
