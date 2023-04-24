import gsap from "gsap";

const initCursor = () => {
  var posXBtn = 0;
  var posYBtn = 0;
  var posXImage = 0;
  var posYImage = 0;
  var mouseX = 0;
  var mouseY = 0;

  if (document.querySelector(".custom-cursor")) {
    gsap.to({}, 0.0083333333, {
      repeat: -1,
      onRepeat: function () {
        if (document.querySelector(".custom-cursor")) {
          posXBtn += (mouseX - posXBtn) / 5;
          posYBtn += (mouseY - posYBtn) / 5;
          gsap.set(document.querySelector(".custom-cursor"), {
            css: {
              left: posXBtn,
              top: posYBtn,
            },
          });
        }
        if (document.querySelector(".mouse-pos-list-image")) {
          posXImage += (mouseX / 1 - posXImage) / 5;
          posYImage += (mouseY - posYImage) / 5;
          gsap.set(document.querySelector(".mouse-pos-list-image"), {
            css: {
              left: posXImage,
              top: posYImage,
            },
          });
        }
      },
    });
  }

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  //   Mouse Init
  document.querySelector("main").addEventListener("mousemove", function () {
    if (
      document.querySelector(".custom-cursor").classList.contains("cursor-init")
    ) {
    } else {
      document.querySelector(".custom-cursor").classList.add("cursor-init");
    }
  });

  document.addEventListener("mouseleave", function (e) {
    document.querySelector(".custom-cursor").classList.remove("cursor-init");
  });
  ``;
  // Mouse Pos List Image Init
  document
    .querySelectorAll(".mouse-pos-list-image-hover")
    .forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        document.querySelector(".mouse-pos-list-image").classList.add("active");
        const bgImage = document.querySelector(".image-test");
        const newSrc = e.dataset.source;
        bgImage.setAttribute("data-src", newSrc);
        const hoveredImage = bgImage.dataset.src;
        bgImage.src = hoveredImage;
      });
      e.addEventListener("mouseleave", function () {
        document
          .querySelector(".mouse-pos-list-image")
          .classList.remove("active");
      });
    });
};

export default initCursor;
