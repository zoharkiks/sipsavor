"use client";

import { useEffect } from "react";
import { MouseCursor, Navbar } from "./components/common";
import Loading from "./components/common/Loading";
import "./styles/globals.css";

import Lenis from "@studio-freight/lenis";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import {
  initChangeBgColor,
  initCursor,
  initPageTransitions,
  initSplitText,
} from "./utils";
import useScrollDirection from "./hooks/useScrollClass";
import { Footer } from "./components/modules";

export const metadata = {
  title: "Sip & Savor Cafe",
  description: "Get Ready To Be Amazed",
};

export default function RootLayout({ children }) {
  useSmoothScroll();
  useScrollDirection();
  useEffect(() => {
    initCursor();
    initPageTransitions();
    initSplitText();
  }, []);

  return (
    <html lang="en">
      <body data-barba="wrapper" className="selection:bg-[#e98527]  ">
        <MouseCursor />

        <Navbar />

        {children}
        <Loading />
      </body>
    </html>
  );
}
