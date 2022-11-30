let imgArray = [
  {'src': "./assets/gallery/planet-brain.jpg", 'alt': "planet brain"},
  {'src': "./assets/gallery/spiderverse.jpg", 'alt': "into the spider-verse fanart"},
  {'src': "./assets/gallery/poketrainer.jpg", 'alt': "pokemon trainer"},
  {'src': "./assets/gallery/creepy-cat.jpg", 'alt': "monster cat"},
  {'src': "./assets/gallery/alien-skull.jpg", 'alt': "alien skull"},
  {'src': "./assets/gallery/chilling-geralt.png", 'alt': "geralt having a good time"}
]


window.onload = function () {
  var imageGal = document.getElementsByClassName("gallery-img");
  imageDiv = document.getElementsByClassName("show-img");
  /*for (var i = 0; i < imageGal.length; i++){
  imgArray.push(imageGal[i].childNodes[1].getAttribute("src") )
   }*/
    console.log(imgArray);
    const buttons = document.getElementsByClassName("tabs");
    buttons[0].addEventListener("click", (event) => galleryTabs(event, 'Illustration'));
    buttons[1].addEventListener("click", (event) => galleryTabs(event, 'Animation'));
    buttons[2].addEventListener("click", (event) => galleryTabs(event, 'Design'));
    buttons[3].addEventListener("click", (event) => galleryTabs(event, 'Doodly'));

    imgArray.forEach((image, index) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const container = document.getElementById("Illustration");
      div.classList.add("gallery-img");
      img.setAttribute("src", image.src);
      img.setAttribute("alt", image.alt);
      div.appendChild(img);
      container.appendChild(div);
      div.addEventListener("click", () => modalSlider(1, index));
    })
}

//let imgArray = [];
const modal = document.getElementsByClassName("modal");
let slide = document.getElementsByClassName("slide");
let imageDiv;
let currentSlide;

const galleryTabs = (evt, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    };
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
      tablinks[i].classList.add("correct");
    };
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
  };

document.onkeydown = function(evt) {
  evt = evt || window.event;
  let isEscape = false;
  let isLeft = false;
  let isRight = false;
  if ("key" in evt){
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  }
  else {
    isEscape = (evt.keyCode === 27);
  }
  if ("key in evt"){
    isLeft = (evt.key === "ArrowLeft");
  }
  else {
    isLeft = (evt.keyCode === 37)
  }
  if ("key in evt"){
    isRight = (evt.key === "ArrowRight");
  }
  else {
    isRight = (evt.keyCode === 39)
  }
  if (isEscape){
    modalSlider(0);
  }
  else if (isLeft){
    modalSlider(2);
  }
  else if (isRight){
    modalSlider(3);
  }
};

const modalSlider = (action, number) => {
  if (typeof number == 'number'){
    currentSlide = number;
  };
  switch(action){
    case 1: //open
      modal[0].classList.toggle("switch");
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[number].src);
      slide[0].classList.toggle("switch");
      break;
    case 0: //close
      slide[0].classList.toggle("switch");
      modal[0].classList.toggle("switch");
      break;
    case 2: //left
      currentSlide != 0 ? currentSlide = currentSlide - 1 : currentSlide = imgArray.length - 1;
      console.log(currentSlide);
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[currentSlide].src);
      break;
    case 3: //right
      currentSlide != (imgArray.length - 1) ? currentSlide = currentSlide + 1 : currentSlide = 0;
      console.log(currentSlide);
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[currentSlide].src);
      break;
    default:
      console.log("Modal error");
      modal[0].classList.toggle("switch");
  };
};


