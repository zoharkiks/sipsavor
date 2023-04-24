"use client";
import Masonry from "react-masonry-css";

import React, { useEffect } from "react";
import { initChangeBgColor } from "@/app/utils";

const Gallery = () => {
  var dummyData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1658933932348-5ba690e7c98e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Image 1",
      bgColor: "#3B6971",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1667112016529-b61c178c0a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Image 2",
      bgColor: "#E66898",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Image 3",
      bgColor: "#1D068D",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Image 4",
      bgColor: "#80B710",
    },
    {
      id: 5,
      image: "https://plus.unsplash.com/premium_photo-1679548651541-7aee0870528e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Image 5",
      bgColor: "#13FBFD",
    },
    // Add more items as needed
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };

  // Convert array to JSX items
  dummyData = dummyData.map(function (item) {
    return (
      <li className="list-none single-image " key={item.id}>
        <img
          className=" cafe-image h-[20rem] w-[20rem]  object-cover  "
          src={item.image}
          alt=""
          data-background-color={item.bgColor}
        />
      </li>
    );
  });

  useEffect(() => {
    initChangeBgColor();
  }, []);

  return (
    <section className="bg-white section data-change-color-section theme-dark">
      <div className="container">
        <h2 className="mb-20 uppercase small">Gallery</h2>

        <div className="grid items-center grid-cols-4 gap-10 center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center image-grid">
          {dummyData}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
