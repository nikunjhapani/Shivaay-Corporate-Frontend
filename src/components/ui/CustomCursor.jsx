"use client";
import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);

  const updateCursor = (e) => {
    const { clientX, clientY } = e;
    setCursorXY({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursor);

    const targets = document.querySelectorAll(
      "a, button, .cursor-hover-target"
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsActive(true));
      el.addEventListener("mouseleave", () => setIsActive(false));
    });

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsActive(true));
        el.removeEventListener("mouseleave", () => setIsActive(false));
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor">
        <div
          className={`custom-cursor-outline ${isActive ? "active" : ""}`}
          style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
