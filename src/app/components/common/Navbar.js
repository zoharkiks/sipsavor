"use client";

import useScrollClass from "@/app/hooks/useScrollClass";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import Button from "./Button";
import initToggleActiveListItem from "@/app/utils/MenuActive";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("theme-nav-dark");

  const toggleMenu = () => {
    const body = document.querySelector("body");
    setIsOpen(!isOpen);
    if (!isOpen) {
      body.setAttribute("data-lenis-prevent", "true");
      body.style.overflow = "hidden";
    } else {
      body.removeAttribute("data-lenis-prevent");
      body.style.overflow = "visible";
    }
  };

  const scrollClass = useScrollClass(50, "scroll-scrolled");

  useLayoutEffect(() => {
    const sectionDark = gsap.utils.toArray(".theme-dark");
    sectionDark.forEach((sectionDark) => {
      ScrollTrigger.create({
        trigger: sectionDark,
        start: "0% 7.5%",
        end: "100% 7.5%",
        onEnter: () => addDarkTheme(),
        onEnterBack: () => addDarkTheme(),
        markers: false,
      });

      const addDarkTheme = () => {
        if (
          document
            .querySelector("main, nav")
            .classList.contains("theme-nav-dark")
        ) {
        } else {
          setTheme("theme-nav-dark");
        }
      };
    });

    const sectionLight = gsap.utils.toArray(".theme-light");

    sectionLight.forEach((sectionLight) => {
      ScrollTrigger.create({
        trigger: sectionLight,
        start: "0% 7.5%",
        end: "100% 7.5%",
        onEnter: () => addLightTheme(),
        onEnterBack: () => addLightTheme(),
        markers: false,
      });

      const addLightTheme = () => {
        if (
          document
            .querySelector("main, nav")
            .classList.contains("theme-nav-light")
        ) {
        } else {
          setTheme("theme-nav-light");
        }
      };
    });

    ScrollTrigger.create({
      trigger: "#header",
      start: "center-=200px",
      end: "bottom-=100px",

      onEnter: () => initToggleActiveListItem(1),
      onEnterBack: () => initToggleActiveListItem(1),
    });

    ScrollTrigger.create({
      trigger: "#about",
      start: "top",

      onEnter: () => initToggleActiveListItem(2),
      onEnterBack: () => initToggleActiveListItem(2),
    });

    ScrollTrigger.create({
      trigger: "#menu",
      start: "top-=50px",

      onEnter: () => initToggleActiveListItem(3),
      onEnterBack: () => initToggleActiveListItem(3),
    });

    ScrollTrigger.create({
      trigger: "#explore",
      start: "top-=50px",

      end: "center+=400px",

      onEnter: () => initToggleActiveListItem(4),
      onEnterBack: () => initToggleActiveListItem(4),
    });

    ScrollTrigger.create({
      trigger: ".trigger",
      start: "top-=500px",

      onEnter: () => initToggleActiveListItem(5),
      onEnterBack: () => initToggleActiveListItem(5),
    });
  }, []);

  return (
    <nav
      className={`  nav-see-through  ${theme} ${
        isOpen ? "nav-mobile-active" : "nav-mobile-not-active"
      } wrapper ${scrollClass}`}
    >
      <div className="nav-links ">
        <div className="flex w-full z-[5] items-center justify-center h-[3em]  relative">
          {/* Logo */}
          <a href="/" className="absolute left-0 text-xl">
            <span className="font-trajan-regular">Sip & Savor </span>
            <span className=" font-roundhand-regular logo2">Cafe</span>
          </a>

          {/* Nav Links for Desktop */}
          <ul className="ul-desktop ">
            <li className="btn btn-link">
              <a href="#header" className="btn-click">
                <div className="btn-fill btn-original-fill"></div>
                <div className="btn-text btn-original-text">
                  <span>Home</span>
                </div>
                <div className="btn-fill btn-duplicate-fill"></div>
                <div className="btn-text btn-duplicate-text">
                  <span>Home</span>
                </div>
              </a>
            </li>

            <li className="btn btn-link">
              <a href="#about" className="btn-click">
                <div className="btn-fill btn-original-fill"></div>
                <div className="btn-text btn-original-text">
                  <span>Our Cafe</span>
                </div>
                <div className="btn-fill btn-duplicate-fill"></div>
                <div className="btn-text btn-duplicate-text">
                  <span>Our Cafe</span>
                </div>
              </a>
            </li>

            <li className="btn btn-link">
              <a href="#explore" className="btn-click">
                <div className="btn-fill btn-original-fill"></div>
                <div className="btn-text btn-original-text">
                  <span>Explore</span>
                </div>
                <div className="btn-fill btn-duplicate-fill"></div>
                <div className="btn-text btn-duplicate-text">
                  <span>Explore</span>
                </div>
              </a>
            </li>

            <li className="btn btn-link">
              <a href="#menu" className="btn-click">
                <div className="btn-fill btn-original-fill"></div>
                <div className="btn-text btn-original-text">
                  <span>Menu</span>
                </div>
                <div className="btn-fill btn-duplicate-fill"></div>
                <div className="btn-text btn-duplicate-text">
                  <span>Menu</span>
                </div>
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="absolute min-w-[7em] h-[4em] right-0 flex items-center overflow-hidden">
            {/* Contact Button on Desktop */}
            <a href="#contact" className="lg:hidden">
              <Button onClick="scrollToSection('#contact')">Contact</Button>
            </a>
            {/* Hamburger Button */}
            <div onClick={() => toggleMenu()} className=" hamburger-wrap">
              <div data-toggle="modal-nav-mobile" className="hamburger ">
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-nav-mobile ">
        <div className="modal-block">
          <div className="modal-block-background"></div>
          <ul id="myList" className="ul-mobile">
            <span className="modal-small-title ">Menu</span>

            <li className="active">
              <a href="#header" onClick={() => toggleMenu()}>
                <span>Home</span>
              </a>
            </li>

            <li className="">
              <a href="#about" onClick={() => toggleMenu()}>
                <span>Our Cafe</span>
              </a>
            </li>

            <li className="">
              <a href="#menu" onClick={() => toggleMenu()}>
                <span>Menu</span>
              </a>
            </li>

            <li className="">
              <a href="#explore" onClick={() => toggleMenu()}>
                <span>Explore</span>
              </a>
            </li>

            <li className="">
              <a href="#contact" onClick={() => toggleMenu()}>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal-nav-background" data-close="modal"></div>
    </nav>
  );
};

export default Navbar;
