//I used this tutorial to learn how to do the javascript for a hamburger menu: https://www.youtube.com/watch?v=dIFNHeHTja0
hamburger = document.querySelector(".hamburger");
nav = document.querySelector(".navChild");

hamburger.onclick = function() {
    nav.classList.toggle("active");
}
