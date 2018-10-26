const startPage = document.getElementById("start-page"); //Traverse to the  content of main page
const baguette = document.getElementById("baguette");
const animationText = document.getElementById("animation-text");
const fresh = document.getElementById("fresh");
const croissants = document.getElementById("croissants");
const containerB = document.getElementById("container-b");
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
}

window.addEventListener("load", start);
