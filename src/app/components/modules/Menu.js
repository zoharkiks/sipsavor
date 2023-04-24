"use client";

import { Button } from "../common";
import { MenuItem } from "../common";
import { menu } from "../../data/menu";
import { useEffect, useState } from "react";

const Menu = () => {

  let margin = 0;

  const marginArray = [];
  for (let i = 0; i < menu.length + 1; i++) {
    margin += 15;
    marginArray.push(margin);
  }

 

  return (
    <section id="menu"  className=" opacity-90 section rounded-[var(--border-radius)] wrapper theme-light">
      <div className="container ">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-y-14 gap-x-10">
          {/* Left Side */}
          <div className="col-span-1 pt-4">
            <h2 className="text-black small ">OUR MENU</h2>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center col-span-2 gap-y-6 ">
            {menu.map((menuItem) => (
              <MenuItem
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                key={menuItem.id}
                name={menuItem.name}
                img={menuItem.img}
                margin={marginArray[menuItem.id]}
              />
            ))}
          </div>
        </div>
        <div className=" min-w-[7em] h-[4em] theme-nav-light flex items-center overflow-hidden  w-full justify-center mt-6 ">
          <Button>Explore More</Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
