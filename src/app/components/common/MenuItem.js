"use client";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
import HoveredMenu from "./HoveredMenu";

const MenuItem = ({ name, img, margin }) => {
  const menuImage = `url(${img})`;


  const tl = useRef(null);
  const menuTitleRef = useRef(null);
  const borderRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
      });
      tl.current
        .to(menuTitleRef.current, {
          duration: 0.5,
          color: "#e98527",
          marginLeft: "10px",
          ease: "Expo.easeInOut",
        })
        .to(
          borderRef.current,
          { width: "100%", duration: 0.5, ease: "Expo.easeInOut" },
          0
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      onMouseEnter={() => {tl.current.play()}}
      onMouseLeave={() => tl.current.reverse()}
      data-source={img}
      className="flex flex-col justify-between pb-2 border-black cursor-pointer mouse-pos-list-image-hover"
    >

      <div className="flex items-center ">
        <h3 ref={menuTitleRef} className="pb-4 text-black big ">
          {name}
        </h3>
        <div
          style={{ backgroundImage: menuImage, marginLeft: margin }}
          className="hidden bg-center bg-no-repeat bg-cover rounded-full w-28 h-28 lg:block "
        ></div>
      </div>

      <div className="relative flex flex-row mt-2 overflow-hidden bg-red-500">
        <div
          ref={borderRef}
          className="h-[1.5px] absolute left-0 bottom-0 w-0  stripe "
        ></div>
        <div className="h-[1.5px] bg-black stripe  "></div>
      </div>
    </div>
  );
};

export default MenuItem;
