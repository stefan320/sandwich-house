// var pressToStart = document.getElementById('press-start');
// const burger = document.getElementById('burger');
// const mobNav = document.getElementById('mob-nav');
// const navLogo = document.getElementById('nav-logo');
// const mobUl = document.getElementById('mob-ul');  //The mobile nav ul id
// const desktopNav = document.getElementById('desktop-nav');
const startPage = document.getElementById("start-page"); //Traverse to the  content of main page
const baguette = document.getElementById("baguette");
// const logoCenter = document.getElementById('logo-center');  //landing page center logo
const animationText = document.getElementById("animation-text");
const fresh = document.getElementById("fresh");
const croissants = document.getElementById("croissants");
const containerB = document.getElementById("container-b");

// When landing page is scrolled down event listener is fired
// The event listener is immediatly removed
// The centered logo is removed
// the nav icon is shown while the animation for baguette croissant and animation text starts

// function mediaQuery(x) {
//     if (x.matches) {
//         desktopNav.style.display = "inline-block";   // If media query matches
//     } else {
//         desktopNav.style.display = "none";
//     }
// }

// const x = window.matchMedia("(min-width: 1000px)")

function scrollToTop() {
  window.scrollTo(0, 0);
}

function startAnimation() {
  fresh.style.color = "#EAB766";
  baguette.style.right = "0";
  croissants.style.left = "0";
  animationText.style.left = "0";
}

function start() {
  startPage.style.position = "relative";
  scrollToTop();
  containerB.style.paddingTop = "0";
  // navLogo.style.display = "inline-block";
  startAnimation();
  mediaQuery(x); // Call listener function at run time
  x.addListener(mediaQuery); // Attach listener function on state changes
}

window.addEventListener("load", start);

function checkDisplay(el) {
  return window.getComputedStyle(el).display;
}
//
// function showNav(){
//   mobUl.style.display = "flex";
// }
//
// burger.addEventListener("click",()=>{
//     mobNav.classList.toggle('open-nav');
//     if(checkDisplay(mobUl) == "none"){
//     setTimeout(showNav, 300);
//     }else{
//       mobUl.style.display = "none";
//     }
// });
//
// mobUl.addEventListener("click",()=>{
//      mobNav.classList.remove('open-nav');
//      mobUl.style.display = "none";
// });
