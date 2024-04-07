let svg = document.querySelector(".gear");
svg.onclick = function () {
  this.classList.toggle("fa-spin");
  this.classList.toggle("active");
  document.querySelector(".ul-set").classList.toggle("open");
  document.querySelector(".navbar").classList.toggle("active");
};


let imgBox = document.querySelector(".img-box img");
let bullet = document.querySelectorAll(".slider li");
let index = 0;
let imgArr = [
  "imgs/slider.jpg",
  "imgs/slider2.jpg",
  "imgs/slider3.jpg",
  "imgs/slider4.jpg",
];
bullet.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.currentTarget.parentElement
      .querySelectorAll(".active")
      .forEach((element) => {
        element.classList.remove("active");
      });
    li.classList.add("active");
    randomImg();
  });
});

function randomImg() {
  index = ++index % imgArr.length;
  imgBox.src = imgArr[index];
}
let section = document.querySelectorAll(".navbar li a");

function goTothelinks(element) {
  element.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

goTothelinks(section);
