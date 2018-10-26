const burger = document.getElementById("burger");
const mobNav = document.getElementById("mob-nav");
const mobUl = document.getElementById("mob-ul"); //The mobile nav ul id

function showNav() {
  mobUl.style.display = "flex";
}

function checkDisplay(el) {
  return window.getComputedStyle(el).display;
}

function closeNav() {
  mobUl.style.display = "none";
  burger.style.transform = "rotate(0deg)";
}

burger.addEventListener("click", () => {
  mobNav.classList.toggle("open-nav");
  if (checkDisplay(mobUl) == "none") {
    setTimeout(showNav, 300);
    burger.style.transform = "rotate(90deg)";
  } else {
    closeNav();
  }
});

mobUl.addEventListener("click", () => {
  mobNav.classList.remove("open-nav");
  closeNav();
});
