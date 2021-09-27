(() => {
  // src/components/SectionSlider.js
  function SectionSlider(div, parent) {
    let line = div.querySelector(".subslidesLine");
    let img = parent ? parent.querySelector("img") : null;
    let slides = [...line.children];
    let index = 0;
    let n = slides.length;
    slides[0].classList.add("opened");
    if (n < 2) {
      return;
    }
    line.style.width = window.innerWidth * n + 1 + "px";
    let leftb = document.createElement("div");
    let rightb = document.createElement("div");
    leftb.classList.add("leftBut");
    rightb.classList.add("rightBut");
    leftb.innerHTML = "&lt;";
    rightb.innerHTML = "&gt;";
    div.appendChild(leftb);
    div.appendChild(rightb);
    leftb.addEventListener("click", prv);
    rightb.addEventListener("click", nxt);
    function nxt(e) {
      if (e)
        e.preventDefault();
      index++;
      if (index >= n)
        index = 0;
      showActual();
    }
    function prv(e) {
      if (e)
        e.preventDefault();
      index--;
      if (index < 0)
        index = n - 1;
      showActual();
    }
    function showActual() {
      if (img) {
        if (index == 0) {
        } else {
        }
      }
      slides.map((s, i) => {
        if (i == index) {
          s.classList.add("opened");
        } else {
          s.classList.remove("opened");
        }
      });
    }
  }

  // src/main.js
  var AUTO = false;
  var apdiv;
  window.addEventListener("DOMContentLoaded", (event) => {
    apdiv = document.getElementById("js-app");
    init();
  });
  function init() {
    let sto;
    let slides = [...document.querySelectorAll(".slider > div")];
    let index = 0;
    let n = slides.length;
    slides.map((s) => {
      let sub = s.querySelector(".subslides");
      if (sub)
        SectionSlider(sub, s);
    });
    let prevSection = document.getElementById("prevSection");
    let nextSection = document.getElementById("nextSection");
    prevSection.addEventListener("click", prev);
    nextSection.addEventListener("click", next);
    showActual();
    function next() {
      index++;
      if (index >= n)
        index = 0;
      showActual();
    }
    function prev() {
      index--;
      if (index < 0)
        index = n - 1;
      showActual();
    }
    function showActual() {
      slides.map((s, i) => {
        if (i == index) {
          s.classList.add("opened");
        } else {
          s.classList.remove("opened");
        }
      });
      if (AUTO) {
        clearTimeout(sto);
        sto = setTimeout(() => {
          next();
        }, 4e3);
      }
    }
  }
})();
