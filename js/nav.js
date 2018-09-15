const burger = document.getElementById('burger');
const mobNav = document.getElementById('mob-nav');
const navLogo = document.getElementById('nav-logo');
const mobUl = document.getElementById('mob-ul');  //The mobile nav ul id
const desktopNav = document.getElementById('desktop-nav');

function showNav(){
  mobUl.style.display = "flex";
}

function checkDisplay(el){
  return  window.getComputedStyle(el).display;
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
