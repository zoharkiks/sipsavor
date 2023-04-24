import gsap from "gsap";
import barba from "@barba/core";

// Initial Page Load

const initLoader = () => {
  var tl = gsap.timeline();
  tl.set(".loading-screen", {
    yPercent: 0,
    scale: 1,
  });

  tl.set(".loader-words-wrap.active .single-word-inner", {
    y: 0,
  });

  tl.set("html", {
    cursor: "wait",
  });

  tl.set(".test", {
    opacity: 0,
    x:-1000
  });



  tl.to(".single-word-inner", {
    duration: 1.5,
    yPercent: 100,
    ease: "Expo.easeIn",
  });

  tl.to(".loading-screen", {
    duration: 0.8,
    yPercent: -106,
    scale: 1,
    ease: "Expo.easeInOut",
    delay: 1,
  });

  tl.set(
    "html",
    {
      cursor: "auto",
    },
    "< -0.3"
  );

  tl.to(".header-image", {
    opacity: 1,
  });



  tl.to(".test", {
    duration: 0.8,
    opacity: 1,
    // ease: "Expo.easeIn",
    x:0
  });
};

const initPageTransitions = () => {
  barba.init({
    sync: true,
    debug: false,
    timeout: 7000,
    transitions: [
      {
        once(data) {
          initLoader();
        },
      },
    ],
  });
};

export default initPageTransitions;
