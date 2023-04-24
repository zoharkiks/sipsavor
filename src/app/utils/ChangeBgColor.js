const initChangeBgColor = () => {
  // Change Background Color
  document.querySelectorAll(".cafe-image").forEach(function (image) {
    image.addEventListener("mouseenter", function () {
      var dataBackgroundColor = this.getAttribute("data-background-color");
      document.querySelector(".data-change-color-main").style.backgroundColor =
        dataBackgroundColor;
    });

    image.addEventListener("mouseleave", function () {
      document
        .querySelector(".data-change-color-main")
        .removeAttribute("style");
    });
  });

  // Adding class hover on all mapped images
  document.querySelectorAll(".image-grid").forEach(function (gridWork) {
    gridWork.querySelectorAll("li img").forEach(function (a) {
      a.addEventListener("mouseenter", function () {
        gridWork.querySelectorAll("li").forEach(function (li) {
          li.classList.add("no-hover");
        });
        this.parentElement.classList.remove("no-hover");
        this.parentElement.classList.add("hover");
      });

      a.addEventListener("mouseleave", function () {
        gridWork.querySelectorAll("li").forEach(function (li) {
          li.classList.remove("no-hover");
          li.classList.remove("hover");
        });
      });
    });
  });
};

export default initChangeBgColor;
