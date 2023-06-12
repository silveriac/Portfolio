let galleryContent  = {
  'Illustration':[
    {'src': "./assets/gallery/planet-brain.jpg", 'alt': "planet brain"},
    {'src': "./assets/gallery/spiderverse.jpg", 'alt': "into the spider-verse fanart"},
    {'src': "./assets/gallery/poketrainer.jpg", 'alt': "pokemon trainer"},
    {'src': "./assets/gallery/creepy-cat.jpg", 'alt': "monster cat"},
    {'src': "./assets/gallery/alien-skull.jpg", 'alt': "alien skull"},
    {'src': "./assets/gallery/chilling-geralt.png", 'alt': "geralt having a good time"}
  ],
  'Animation': [
    {'src': "./assets/gallery/gif/bear-idle.gif", 'alt': "idle bear"},
    {'src': "./assets/gallery/gif/bear-run.gif", 'alt': "bear running"},
    {'src': "./assets/gallery/gif/bear-jump.gif", 'alt': "bear jumping"},
    {'src': "./assets/gallery/gif/bear-push-small.gif", 'alt': "bear pushing small snowball"},
    {'src': "./assets/gallery/gif/bear-push-big.gif", 'alt': "bear pushing big snowball"},
    {'src': "./assets/gallery/gif/mounted-run.gif", 'alt': "bear pushing big snowball"},
    {'src': "./assets/gallery/gif/dog-mounted-jump.gif", 'alt': "bear pushing big snowball"},
    {'src': "./assets/gallery/gif/mount-pant.gif", 'alt': "bear pushing big snowball"},
    {'src': "./assets/gallery/gif/pant-mounted.gif", 'alt': "bear pushing big snowball"},
  ]
};
let imgArray = galleryContent.Illustration;
let currentTab = 'Illustration';
window.onload = function () {
  var imageGal = document.getElementsByClassName("gallery-img");
  imageDiv = document.getElementsByClassName("show-img");
    console.log(imgArray);
    const buttons = document.getElementsByClassName("tabs");
    buttons[0].addEventListener("click", (event) => galleryTabs(event, 'Illustration'));
    buttons[1].addEventListener("click", (event) => galleryTabs(event, 'Animation'));
    buttons[2].addEventListener("click", (event) => galleryTabs(event, 'Design'));
    buttons[3].addEventListener("click", (event) => galleryTabs(event, 'Doodly'));
    fillTab(currentTab);
    new Twitch.Player("twitch-embed", {
      channel: "dood_ly"
    });
};

const fillTab = (tab) => {
  contentArray = galleryContent[tab];
  console.log(tab);
  contentArray.forEach((image, index) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const container = document.getElementById(tab);
    div.classList.add("gallery-img");
    img.setAttribute("src", image.src);
    img.setAttribute("alt", image.alt);
    div.appendChild(img);
    container.appendChild(div);
    div.addEventListener("click", () => modalSlider(1, index));
  })
}

/* const expandBackground = (action) => { //animate doodly tab
  const doodlyBG = document.getElementById("doodlyBG");
  switch(action){
    case 1:
      let i = 0;
      const animate = setInterval(() => {
        i++;
        doodlyBG.style.width = `${i * 16}px`;
        doodlyBG.style.height = `${i * 9}px`;
        console.log(i == 100);
        if(i > 50){doodlyBG.style.borderRadius = `${100 - i}%`}
        if(i == 100){clearInterval(animate)}
      }, 1);
      animate();
      break;
    case 2:
      i = 100;
      const deanimate = setInterval(() => {
        i++;
        doodlyBG.style.width = `${100 - i * 16}px`;
        doodlyBG.style.height = `${100 - i * 9}px`;
        console.log(i == 100);
        if(i > 50){doodlyBG.style.borderRadius = `${i - 50}%`}
        if(i == 100){clearInterval(deanimate)}
      }, 1);
      deanimate();
  };
};*/

const modal = document.getElementsByClassName("modal");
let slide = document.getElementsByClassName("slide");
let imageDiv;
let currentSlide;

const galleryTabs = (evt, tabName) => {
  var i, tabcontent, tablinks;
  /*if(tabName == 'Doodly'){
    expandBackground(1);
  }else{
    expandBackground(2);
  };*/
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
  currentTab = tabName;
  fillTab(currentTab);
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
  let imgArray = galleryContent[currentTab]
  switch(action){
    case 1: //open
      modal[0].classList.toggle("switch");
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[number].src);
      break;
    case 0: //close
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



/*
let allCards = [
  {
   'id': "1",
   'nombre': "Hacer ejercicio",
   'tipo': 'accion',
   'efecto': (jugador) => {
      jugador.salud += 2;
   }
  },
  {
    'id': "15",
    'nombre': "Consumismo",
    'tipo': 'accion',
    'efecto': (jugador) => {
      jugador.mercado.forEach( () => {draw(jugador)})
   }
  }
]
*/
