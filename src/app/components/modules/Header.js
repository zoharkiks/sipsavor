"use client";

import React, { useLayoutEffect } from "react";


const Header = () => {
  return (
    <header id='header' className=" section default-header home-header wrapper">
      <div className="container ">
        <div className="absolute top-0 left-0 w-full h-full opacity-0 header-image ">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80')] bg-cover bg-center bg-no-repeat opacity-[.2] "></div>
        </div>
        <div className="justify-start h-[50vh] ">
         <h1 className="w-3/4  md:leading-[4.5rem] test ">Start Your Day With Our Coffee</h1>
       
        </div>

        <div className="stripe"></div>
      </div>
    </header>
  );
};

export default Header;
