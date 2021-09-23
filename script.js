const hamburger = document.getElementById("hamburger");
const headerMenu = document.getElementById("header-menu");
const arrowUp = document.getElementById("arrow-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}


hamburger.addEventListener("click", () =>
{
    
    headerMenu.classList.toggle("show");
});