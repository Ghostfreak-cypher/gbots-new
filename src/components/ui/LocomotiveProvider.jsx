"use client";

import React, { useEffect, useRef } from "react";

const LocomotiveProvider = ({ children }) => {
  const containerRef = useRef(null);
  const locoRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    // Only run on client
    if (typeof window === "undefined" || !containerRef.current) return;

    const setup = async () => {
      try {
        // Dynamically import to avoid SSR touching DOM
        await import("locomotive-scroll/dist/locomotive-scroll.css");
        const mod = await import("locomotive-scroll");
        if (!isMounted || !containerRef.current) return;

        const instance = new mod.default({
          el: containerRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.08,
          smartphone: { smooth: true },
          tablet: { smooth: true },
          class: "is-inview",
        });

        locoRef.current = instance;

        const onResize = () => instance.update();
        window.addEventListener("resize", onResize);

        // Cleanup function
        return () => {
          window.removeEventListener("resize", onResize);
          try {
            instance.destroy();
          } catch (_) {}
          locoRef.current = null;
        };
      } catch (_) {
        // Silently ignore if import fails
        return () => {};
      }
    };

    let cleanup = () => {};
    setup().then((fn) => {
      if (typeof fn === "function") cleanup = fn;
    });

    return () => {
      isMounted = false;
      cleanup();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveProvider;
