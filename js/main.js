let path = document.querySelectorAll(".path-learning .path");
let buttonCloseAleart = document.querySelector(".aleart > i");
let bodyAleart = document.querySelector(".body-aleart");
let aleart = document.querySelector(".aleart");

path.forEach((e) => {
  if (e.classList.contains("no-active")) {
    e.style.cssText = "transform: translateY(0px)";
  }
});

// Aleart
path.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (this.classList.contains("no-active")) {
      bodyAleart.style.cssText = "opacity: 1; z-index: 123";
      aleart.style.cssText = "opacity: 1; z-index: 12332;";
    }
  });
});

buttonCloseAleart.onclick = function () {
  bodyAleart.style.cssText = "opacity: 0; z-index: 0;";
  aleart.style.display = "opacity: 0; z-index: 0;";
};
