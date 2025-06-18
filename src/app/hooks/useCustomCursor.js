"use client";
import { useEffect } from "react";

export default function useCustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const cursor = document.querySelector(".js-cursor");
    if (!cursor) return;

    let state = true; // track cursor enable state

    const disableBreakpoint = 768; // example width threshold, customize as needed

    const follower = cursor.querySelector(".js-follower");
    const label = cursor.querySelector(".js-label");
    const icon = cursor.querySelector(".js-icon");

    let clientX = -100;
    let clientY = -100;
    const cursorWidth = cursor.offsetWidth / 2;
    const cursorHeight = cursor.offsetHeight / 2;

    // Functions to add/remove event listeners on triggers
    function update() {
      const triggers = document.querySelectorAll([
        "button",
        "a",
        "input",
        "[data-cursor]",
        "[data-cursor-label]",
        "[data-cursor-label-light]",
        "[data-cursor-icon]",
        "textarea",
      ]);
      triggers.forEach((el) => {
        el.addEventListener("mouseenter", enterHandler);
        el.addEventListener("mouseleave", leaveHandler);
      });
      cursorTriggers.current = triggers;
    }

    function clear() {
      if (cursorTriggers.current) {
        cursorTriggers.current.forEach((el) => {
          el.removeEventListener("mouseenter", enterHandler);
          el.removeEventListener("mouseleave", leaveHandler);
        });
      }
    }

    // Store triggers for cleanup
    const cursorTriggers = { current: null };

    const enterHandler = ({ target }) => {
      if (!state) return; // do nothing if disabled

      cursor.classList.add("is-active");

      if (target.getAttribute("data-cursor-label")) {
        cursor.classList.add("has-label");
        label.innerHTML = target.getAttribute("data-cursor-label");
      }

      if (target.getAttribute("data-cursor-label-light")) {
        cursor.classList.add("has-label-light");
        label.innerHTML = target.getAttribute("data-cursor-label-light");
      }

      if (target.getAttribute("data-cursor-icon")) {
        cursor.classList.add("has-icon");
        const iconAttr = target.getAttribute("data-cursor-icon");
       // icon.innerHTML = feather.icons[iconAttr]?.toSvg?.() || "";
      }
    };

    const leaveHandler = () => {
      cursor.classList.remove(
        "is-active",
        "has-label",
        "has-label-light",
        "has-icon"
      );
      label.innerHTML = "";
      icon.innerHTML = "";
    };

    const render = () => {
      if (!state) {
        cursor.style.transform = `translate(-100px, -100px)`; // hide offscreen
      } else {
        cursor.style.transform = `translate(${clientX - cursorWidth}px, ${
          clientY - cursorHeight
        }px)`;
      }
      requestAnimationFrame(render);
    };

    // The breakpoint logic to enable/disable cursor based on width
    function breakpoint() {
      let width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      if (width < disableBreakpoint) {
        state = false;
        cursor.classList.remove("is-enabled");
        clear();
      } else {
        state = true;
        cursor.classList.add("is-enabled");
        update();
      }
    }

    // Initial setup
    breakpoint();

    window.addEventListener("resize", breakpoint);

    document.addEventListener("mousemove", (event) => {
      clientX = event.clientX;
      clientY = event.clientY;
    });

    document.addEventListener("mousedown", () => {
      if (state) cursor.classList.add("is-mouse-down");
    });

    document.addEventListener("mouseup", () => {
      if (state) cursor.classList.remove("is-mouse-down");
    });

    requestAnimationFrame(render);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", breakpoint);
      document.removeEventListener("mousemove", render);
      document.removeEventListener("mousedown", null);
      document.removeEventListener("mouseup", null);
      clear();
    };
  }, []);
}
