"use strict";

(function () {
  window.scrollTo(0, 0);

  document.querySelectorAll(".contactpage").forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      document.querySelectorAll(".contactpage").forEach((elem) => {
        elem.style.webkitFilter = "blur(20px)";
      });
      element.style.webkitFilter = "blur(0px)";
    });
    element.addEventListener("mouseleave", (e) => {
      document.querySelectorAll(".contactpage").forEach((elem) => {
        elem.style.webkitFilter = "blur(0px)";
      });
    });
  });

  fetch('./js/eventdata.json')
  .then(response => response.json())
  .then(data => data.forEach((element => document.querySelector(".kalender").insertAdjacentHTML('beforeend', `<div><h2>${element.titel}</h2><p>${element.beschrijving}</p><p>${element.datum}</p></div>`))));

  let animation = anime({
    targets: ['.wordVrijwilliger'],
    rotate: 360,
    borderRadius: '50%',
    duration: 7000,
    loop: true,
    hover: () => {
      this.rotate = this.rotate - 720;
    }
});

document.querySelector('.page2').onmouseover = () => animation.add({rotate: -720});
// document.querySelector('.page2').onmouseover = animation.hover;
document.querySelector('.page2').onmouseleave = animation.play;

})();