const menubtn = document.querySelector(".bar-holder");
let menuOpen = false;

const mobile_menu = document.querySelector(".mobile-nav");

menubtn.addEventListener("click", () => {
  if (!menuOpen) {
    menubtn.classList.add("open");
    menuOpen = true;
    mobile_menu.classList.add("active");
  } else {
    menubtn.classList.remove("open");
    menuOpen = false;
    mobile_menu.classList.remove("active");
  }
});

// const colors = document.querySelectorAll("#business-link");
// const colorsaray = ["#ffdeff", "#f7594e", "#edd5ed", "#d8e2e7", "#e6eeef"];

// for (i = 0; i < colors.length; i++) {
//   colors[i].style.background = colorsaray[i];
// }

var mqls = [
  // list of window.matchMedia() queries
  window.matchMedia("(max-width: 380px)"),
  window.matchMedia("(max-width: 768px)"),
  window.matchMedia("(max-width: 1000px)"),
  window.matchMedia("(max-width: 1440px)"),
  window.matchMedia("(min-width: 1441px)"),
];

function mediaqueryresponse(mql) {
  if (mqls[4].matches) {
    document.getElementById("img1000").src = "./Grop/L.png";
  }

  if (mqls[3].matches) {
    document.getElementById("img1000").src = "./Grop/M.png";
  }

  if (mqls[2].matches) {
    document.getElementById("img1000").src = "./Grop/S.png";
  }

  if (mqls[1].matches) {
    console.log("700");
    document.getElementById("img1000").src = "./Grop/XS.png";
  }

  if (mqls[0].matches) {
    document.getElementById("img1000").src = "./Grop/XXS.png";
  }
}

for (var i = 0; i < mqls.length; i++) {
  // loop through queries
  mediaqueryresponse(mqls[i]); // call handler function explicitly at run time
  mqls[i].addListener(mediaqueryresponse); // call handler function whenever the media query is triggered
}

var splash = document.querySelector(".splash");

window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    //splash.className("spl");
    document.getElementById("splash").className += "MyClass";
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  var splide1 = new Splide(".splide", {
    drag: "free",
    rewind: true,
    fixedWidth: "280px",
    fixedHeight: "280px",
    arrows: false,
    pagination: false,
  });
  splide1.mount();
});
