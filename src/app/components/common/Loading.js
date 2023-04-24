"use client";
import React, { useEffect } from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-black z-[800] grid place-items-center  loading-screen ">
      <div className="loading-words"> 
      <h3 className="loader-words-wrap active">
      <span className="split-words-wrap ">Sip&SavorCafe</span>
        
      </h3>
      </div>
    </div>
  );
};

export default Loading;
