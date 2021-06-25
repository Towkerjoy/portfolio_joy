// Navigation Menu
const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".navigation");
const secHero = document.querySelector(".sec");
menuToggle.onclick = function(){
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
    secHero.classList.toggle("active");
}
