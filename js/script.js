// Navigation Menu
const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".navigation");
const secHero = document.querySelector(".sec");
menuToggle.onclick = function(){
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
    secHero.classList.toggle("active");
}
// Dark System
const moon = document.querySelector(".darkMood");
const darkHeader = document.querySelector("header");
const darkToggle = document.querySelector(".toggle")
const darkBtn = document.querySelector(".btn")
const darkBody = document.querySelector("body")
const darkh2 = document.querySelector("h2")
const darkAboutTitle = document.querySelector("p")
const darkTypeJsTitle = document.querySelector(".typejs-title")
const darkIcon = document.querySelector(".forDark")
const darkIcon2 = document.querySelector(".forDark2")
const darkIcon3 = document.querySelector(".forDark3")
moon.addEventListener("click",  darkMoodSty);

function darkMoodSty(){
    darkHeader.classList.toggle("dark");
    darkToggle.classList.toggle("dark")
    darkBtn.classList.toggle("dark")
    darkBody.classList.toggle("dark");
    darkh2.classList.toggle("dark");
    darkTypeJsTitle.classList.toggle("dark")
    darkAboutTitle.classList.toggle("dark")
    darkIcon.classList.toggle("dark")
    darkIcon2.classList.toggle("dark")
    darkIcon3.classList.toggle("dark")
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
