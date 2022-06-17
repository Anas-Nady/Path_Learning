let path = document.querySelectorAll(".path-learning .path");
let buttonCloseAleart = document.querySelector(".aleart > i");
let bodyAleart = document.querySelector(".body-aleart");
let aleart = document.querySelector(".aleart");
let dateNow = new Date();
let setDateInFooter = document.querySelector("footer .date");

path.forEach((e) => {
  if (e.classList.contains("no-active")) {
    e.style.cssText = "transform: translateY(0px)";
  }
});

// Show and Hide The Aleart
path.forEach((e) => {
  e.addEventListener("click", function (e) {
    if (this.classList.contains("no-active")) {
      bodyAleart.style.cssText = "opacity: 1 !important; z-index: 1000";
      aleart.style.cssText = "opacity: 1 !important; z-index: 10000;";
    }
  });
});

function hideAleart() {
  bodyAleart.style.cssText = "opacity: 0 !important; z-index: 0;";
  aleart.style.display = "opacity: 0 !important; z-index: 0;";
}

buttonCloseAleart.onclick = function () {
  hideAleart();
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("body-aleart")) {
    hideAleart();
  }
});

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    hideAleart();
  }
};

// Set Date Created Website In Footer
setDateInFooter.innerHTML = dateNow.getFullYear();
