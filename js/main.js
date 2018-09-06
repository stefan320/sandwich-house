var pressToStart = document.getElementById('press-start');
var burger = document.getElementById('burger');
var mobNav = document.getElementById('mob-nav');
var navLogo = document.getElementById('nav-logo');
var mobUl = document.getElementById('mob-ul');  //The mobile nav ul id
var startPage = document.getElementById('start-page');  //Traverse to the  content of main page
var baguette = document.getElementById('baguette');
var logoCenter = document.getElementById('logo-center');  //landing page center logo
var animationText = document.getElementById('animation-text');
var fresh = document.getElementById('fresh');
var croissants = document.getElementById('croissants');
var containerB = document.getElementById('container-b');
var desktopNav = document.getElementById('desktop-nav');
// When landing page is scrolled down event listener is fired
// The event listener is immediatly removed
// The centered logo is removed
// the nav icon is shown while the animation for baguette croissant and animation text starts

function mediaQuery(x) {
    if (x.matches) { // If media query matches
        desktopNav.style.display = "inline-block";
    } else {
        desktopNav.style.display = "none";
    }
}

var x = window.matchMedia("(min-width: 1000px)")



function scrollToTop(){
    window.scrollTo(0, 0);
}

function start(){
    document.removeEventListener("scroll", reduceLogoWidth);
    startPage.style.position = "initial";
    scrollToTop();
    containerB.style.paddingTop = "0";
    logoCenter.style.display = "none";
    navLogo.style.display = "inline-block";
    fresh.style.color = "#EAB766";
    baguette.style.right = "0";
    croissants.style.left = "0";
    animationText.style.left = "0";
    mediaQuery(x) // Call listener function at run time
    x.addListener(mediaQuery) // Attach listener function on state changes
}


function reduceLogoWidth(){
  setTimeout(scrollToTop, 300);
  var logoWidth = window.getComputedStyle(logoCenter).width;
  console.log(logoWidth);
  var newWidth = parseInt(logoWidth, 10) - 30;
  if( newWidth >= 30){
  var widthValue = newWidth.toString() + "px";
  var updatedWidth = logoCenter.style.width = widthValue;
}else{
  start();
}
}


document.addEventListener("scroll", reduceLogoWidth);





// document.addEventListener("scroll",function startPage(){
//     document.removeEventListener("scroll", startPage);
//     logoCenter.style.display = "none";
//     navLogo.style.display = "block";
//     baguette.style.right = "0";
//     croissants.style.left = "0";
//     animationText.style.left = "2%";
// });

function checkDisplay(el){
  return  window.getComputedStyle(el).display;
}
//
function showNav(){
  mobUl.style.display = "flex";
}

burger.addEventListener("click",()=>{
    mobNav.classList.toggle('open-nav');
    if(checkDisplay(mobUl) == "none"){
    setTimeout(showNav, 300);
}else{
  mobUl.style.display = "none";
}
});

mobUl.addEventListener("click",()=>{
     mobNav.classList.remove('open-nav');
     mobUl.style.display = "none";
});
