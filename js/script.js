// Navigation Menu
const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".navigation");
const secHero = document.querySelector(".sec");
menuToggle.onclick = function(){
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
    secHero.classList.toggle("active");
}
// Type .js
var typed = new Typed('#type_2', {
    strings:[
        "Html,",
        "Css,",
        "Bootstrap,",
        "WordPress,",
        "JavaScript,",
        "Jquery,",
        "Php,",
        "MySql"
    ],
    typeSpeed:120,
    backSpeed:100,
    loop:true,
  });