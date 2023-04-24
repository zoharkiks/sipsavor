"use client";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const sectionTimeline = gsap.timeline({
      paused: true,
      defaults: { duration: 0.8, ease: "power2.out" },
    });
    sectionTimeline.fromTo(
      footerRef.current,
      { y: -250, opacity: 0 },
      { y: 0, opacity: 1 }
    );

    ScrollTrigger.create({
      trigger: ".trigger",
      start: "bottom 60%",
      scrub: 1,
      onEnter: () => sectionTimeline.play(),
      onLeaveBack: () => sectionTimeline.reverse(),
    });

    return () => {
      sectionTimeline.kill();
    };
  }, []);

  return (
    <footer ref={footerRef} className=" section theme-dark">
      <div className="container">
        <div className="flex justify-center space-x-3">
          <h2 className="font-trajan-regular ">Sip & Savor  </h2>
          <h2 className=" font-roundhand-regular">Cafe</h2>
        </div>

        <div className="flex flex-wrap items-center justify-between py-[var(--section-padding-small)] relative gap-4 ">
          <div className="mb-6 stripe"></div>
          <div className="flex flex-wrap space-x-4">
            <p>
              <a target="_blank" href="/">
                Linkedin
              </a>
            </p>

            <p>
              <a target="_blank" href="/">
                Instagram
              </a>
            </p>
          </div>

          <div className="">
            <p>
              <a target="_blank" href="/">
                Made By Zohar
              </a>
            </p>
          </div>

          <div className="">
            <p>
              <a target="_blank" href="/">
                Privacy and Cookies Policy
              </a>
            </p>
          </div>

          <div className="">
            <p>
              <a target="_blank" href="/">
              Sip&Savor © 2023
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
