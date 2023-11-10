const date = new Date();
const paperIn = new Image();
const paperOut = new Image();
paperIn.src = '../assets/gallery/doodly/doodly-bg.gif';
paperOut.src = '../assets/gallery/doodly/doodly-bg-out.gif';
let currentTab = params.get("tab") ?  params.get("tab") : "Illustration" ;
let modal;
let calledDoodly = currentTab == "Doodly" ? 1 : 0;
window.onload = (evt) => {
  modal = document.getElementsByClassName("modal")[0];
  imageDiv = document.getElementsByClassName("show-img");
  const buttons = document.getElementsByClassName("tabs");
  buttons[0].addEventListener("click", (event) => {changeTabs(event, 'Illustration'); fillTab(currentTab);});
  buttons[1].addEventListener("click", (event) => {changeTabs(event, 'Animation'); fillTab(currentTab);});
  buttons[2].addEventListener("click", (event) => {changeTabs(event, 'Design'); fillTab(currentTab);});
  buttons[3].addEventListener("click", (event) => {changeTabs(event, 'Doodly'); doodlyBG(currentTab); fillDoodlyTab();});
  changeTabs(evt, currentTab);
  if (currentTab == "Doodly") fillDoodlyTab()
  else fillTab(currentTab)
  if (date.getDay() == 2 && date.getHours() > 20) {
    new Twitch.Player("twitch-embed", {
      channel: "dood_ly"
    });
  }
};

const fillTab = (tab) => {
  contentArray = galleryContent[tab];
  if(calledDoodly > 0) doodlyBG(currentTab);
  const container = document.getElementById(tab);
  if (document.querySelector(`#${tab} .gallery-img`)) return;
  const styleSheet = document.styleSheets[4];
  let proyecto = "";
  let proyectCounter = 1;
  contentArray.forEach((image, index) => {
    if (image.alt != proyecto & tab == "Design"){
      proyecto = image.alt;
      const div = document.createElement("div");
      div.classList.add("titlediv");
      div.style.animationDelay = (index * 2.5) /10 + "s";
      div.innerHTML += `<h2>${proyecto}</h2><h4>${proyectos[proyecto]}</h4>`;
      container.appendChild(div);
      proyectCounter++;
    }
    proyecto = image.alt;
    styleSheet.insertRule(`#${tab} .gallery-img:nth-child(${index + proyectCounter}):hover::after{content:"${image.description.replace(/<[^>]*>/g, '')}"}`);
    const div = document.createElement("div");
    div.classList.add("gallery-img");
    div.setAttribute("style", `animation-delay: ${(index*3)/10}s`);
    if (tab == "Animation") div.innerHTML += `<img class="frame1" src="${(image.src).replace('gif/','gif/frame1/').replace(/-/g, '_')}" alt="${image.alt}">` //add still frame1 to gifs
    div.innerHTML += `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
    container.appendChild(div);
    div.addEventListener("click", () => modalSlider(1, index));
  });
}

const fillDoodlyTab = () =>{
  contentArray = galleryContent["Doodly"];
  if(calledDoodly > 0) doodlyBG(currentTab);
  const container = document.getElementById("Doodly");
  if (document.querySelector(`#Doodly .gallery-img`)) return;
  let proyecto = "";
  contentArray.forEach((image, index) => {
    if(image.name != proyecto){
      proyecto = image.name;
      const div = document.createElement("div");
      div.classList.add("titlediv");
      div.style.animationDelay = (index * 2.5) /10 + "s";
      div.innerHTML += `<!--<h2>${proyecto}</h2>--> <h4>${proyectos[proyecto]}</h4>`;
      container.appendChild(div);
    };
    const div = document.createElement("div");
    div.classList.add("gallery-img");
    div.setAttribute("style", `animation-delay: ${(index*3)/10}s`);
    div.innerHTML +=
    `<a target="_blank" href="${image.description}">
      <img class="frame1" src="${(image.src).replace('gif/','gif/frame1/').replace(/-/g, '_')}" alt="${image.alt}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
    </a>`
    container.appendChild(div);
  })
}


const doodlyBG = (tab) =>{
  const doodlyBGDiv = document.getElementsByTagName("body")[0];
  if (tab === "Doodly") {
    paperIn.onload = function() {
      doodlyBGDiv.classList.add("doodly-bg");
      doodlyBGDiv.classList.remove("doodly-bg-out");
    };
    // Check if the image is already complete, if not, the load event listener will handle it
  if (paperIn.complete) {
    doodlyBGDiv.classList.add("doodly-bg");
    doodlyBGDiv.classList.remove("doodly-bg-out");
  }
  } else {
    paperOut.onload = function() {
      doodlyBGDiv.classList.add("doodly-bg-out");
      doodlyBGDiv.classList.remove("doodly-bg");
    };
    // Check if the image is already complete, if not, the load event listener will handle it
  if (paperOut.complete) {
    doodlyBGDiv.classList.add("doodly-bg-out");
    doodlyBGDiv.classList.remove("doodly-bg");
  }
  }
  calledDoodly++;
}

//const modal = document.getElementsByClassName("modal");
console.log(modal);
let slide = document.getElementsByClassName("slide");
let imageDiv;
let currentSlide;

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
  let description = document.getElementById("description");
  let imgArray = galleryContent[currentTab]
  switch(action){
    case 1: //open
      modal.classList.toggle("switch");
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[number].src);
      description.innerHTML = imgArray[number].description;
      break;
    case 0: //close
      modal.classList.toggle("switch");
      break;
    case 2: //left
      currentSlide != 0 ? currentSlide = currentSlide - 1 : currentSlide = imgArray.length - 1;
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[currentSlide].src);
      description.innerHTML = imgArray[currentSlide].description;
      break;
    case 3: //right
      currentSlide != (imgArray.length - 1) ? currentSlide = currentSlide + 1 : currentSlide = 0;
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[currentSlide].src);
      description.innerHTML = imgArray[currentSlide].description;
      break;
    default:
      console.log("Modal error");
      modal.classList.toggle("switch");
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
