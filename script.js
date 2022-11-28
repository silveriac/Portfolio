window.onload = function () {
  var imageGal = document.getElementsByClassName("gallery-img");
  imageDiv = document.getElementsByClassName("show-img");
  for (var i = 0; i < imageGal.length; i++){
  imgArray.push(imageGal[i].childNodes[1].getAttribute("src") )
   }
    console.log(imgArray);
}
var imgArray = [];
var modal = document.getElementsByClassName("modal");
var slide = document.getElementsByClassName("slide");
var imageDiv;
var currentSlide;
function galleryTabs(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    };
    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
      tablinks[i].classList.add("correct");
      tablinks[i].classList.remove("tab" + (i + 1));
    };
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += "active";
  };
// next block was shamelessly copied from stackoverflow 
// https://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-pure-js-or-jquery
document.onkeydown = function(evt) { 
  evt = evt || window.event;  
  var isEscape = false;
  if ("key" in evt){
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  }
  else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape){
    modalSlider(0);
  }
};
function modalSlider(action, number){
  if (typeof number == 'number'){
    currentSlide = number;
  };
  switch(action){
    case 1: //open
      modal[0].classList.toggle("switch");
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[number]);
      slide[0].classList.toggle("switch");
      break;
    case 0: //close
      slide[0].classList.toggle("switch");
      modal[0].classList.toggle("switch");
      break;
    case 2: //left
      currentSlide != 0 ? currentSlide = currentSlide - 1 : currentSlide = imgArray.length - 1;
      console.log(currentSlide);
      console.log(imgArray[currentSlide]);
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[currentSlide]);
      break;
    case 3: //right
      currentSlide != (imgArray.length - 1) ? currentSlide = currentSlide + 1 : currentSlide = 0;
      console.log(currentSlide);
      console.log(imgArray[currentSlide]);
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[currentSlide]);
      break;
    default:
      console.log("Modal error");
      modal[0].classList.toggle("switch");
  };
};


