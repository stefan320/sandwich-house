var images = document.getElementsByClassName("img-fluid");
var getPaths = document.getElementsByClassName("row");
var getSlider = document.getElementById("slider");
var setSrc = document.getElementById("setSrc");
var prevImage = document.getElementById("arrow-left");
var nextImage = document.getElementById("arrow-right");



  var attrSrc = [];
  var currentIndex;


for(var i = 0;i < images.length; i++){
  attrSrc.push(images[i].attributes.src.value);  //push image src to  attrSrc array;
images[i].addEventListener("click", function(){
  currentIndex = attrSrc.indexOf(this.attributes.src.value);  // find the path in the array  using indexOf method
  setSrc.src = (attrSrc[currentIndex]);   //set the slider image to the one that was preessed attrSrc
  getSlider.classList.toggle("flex");
});
}

getSlider.addEventListener("click", function(){
  if(event.target !== setSrc  && event.target !== prevImage && event.target !== nextImage){
  this.classList.toggle("flex");
}
});

prevImage.addEventListener("click", function(){
  if(currentIndex > 0){
    currentIndex -= 1;
  }else{
  currentIndex = attrSrc.length - 1;
}
  setSrc.src = (attrSrc[currentIndex]);   //set the slider image to the one that was preessed attrSrc
});

nextImage.addEventListener("click", function(){
  if(currentIndex < attrSrc.length -1){
    currentIndex += 1;
  }else{
  currentIndex = 0;
}
  setSrc.src = (attrSrc[currentIndex]);   //set the slider image to the one that was preessed attrSrc
});

console.log(images);
console.info(images[0].srcset);
console.log(images[0].srcset);
