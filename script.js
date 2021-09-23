const hamburger = document.getElementById("hamburger");
const headerMenu = document.getElementById("header-menu");

hamburger.addEventListener("click", () =>
{
    console.log("tambien sirve");
    headerMenu.classList.toggle("show");
});