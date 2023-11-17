const date = new Date();
const paperIn = new Image();
const paperOut = new Image();
paperIn.src = '../assets/gallery/doodly/doodly-bg.gif';
paperOut.src = '../assets/gallery/doodly/doodly-bg-out.gif';
let currentTab = params.get("area") ?  params.get("area") : "Illustration" ;
console.log(params.get("area"));
console.log(params.toString());

currentTab = currentTab == "Dev" || currentTab == "web" || currentTab == "GameDev" ? "Animation" : currentTab;
let modal;
let calledDoodly = currentTab == "Doodly" ? 1 : 0;
window.onload = (evt) => {
  if(document.querySelector('a[href="../indexEN.html"]')) addArea(document.querySelector('a[href="../indexEN.html"]'))
  else addArea(document.querySelector('a[href="../index.html"]'));
  addArea(document.querySelectorAll("footer ul a")[0]);
  addArea(document.querySelectorAll("footer ul a")[1]);
  modal = document.getElementsByClassName("modal")[0];
  imageDiv = document.getElementsByClassName("show-img");
  const buttons = document.getElementsByClassName("tabs");
  buttons[0].addEventListener("click", (event) => {changeTabs(event, 'Illustration'); fillTab(currentTab); addQueryToURL("area", currentTab);});
  buttons[1].addEventListener("click", (event) => {changeTabs(event, 'Animation'); fillTab(currentTab); addQueryToURL("area", currentTab);});
  buttons[2].addEventListener("click", (event) => {changeTabs(event, 'Design'); fillTab(currentTab); addQueryToURL("area", currentTab);});
  buttons[3].addEventListener("click", (event) => {changeTabs(event, 'Doodly'); fillDoodlyTab(); addQueryToURL("area", currentTab);});
  changeTabs(evt, currentTab);
  document.querySelector(`[data-tab="${currentTab}"]`).classList.add("active");
  if (currentTab == "Doodly") fillDoodlyTab();
  else fillTab(currentTab);
  if (params.get("img")) modalSlider(1, +params.get("img"));
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
  doodlyBG(currentTab);
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

const addQueryToURL = (key, value) =>{
  let currentURL = window.location.href.replace(/\?.*$/, "");
  if(params.get(key)) params.delete(key);
  params.set(key, value);
  if(!modalState) params.delete("img");
  history.pushState(null, key == "area"? value : null,  currentURL + "?" + params.toString());
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
let imageDiv;
let currentSlide;
let modalState = false;
const modalSlider = (action, number) => {
  if (typeof number == 'number'){
    currentSlide = number;
  };
  modalState = true;
  let description = document.getElementById("description");
  let imgArray = galleryContent[currentTab];
  let left = document.querySelector(".left");
  let right = document.querySelector(".right");
  switch(action){
    case 1: //open
      modal.classList.toggle("switch");
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[number].src);
      description.innerHTML = imgArray[number].description;
      break;
    case 0: //close
      modal.classList.toggle("switch");
      modalState = false;
      break;
    case 2: //left
      currentSlide != 0 ? currentSlide = currentSlide - 1 : currentSlide = imgArray.length - 1;
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[currentSlide].src);
      description.innerHTML = imgArray[currentSlide].description;
      //left.classList.add("take-over");
      break;
    case 3: //right
      currentSlide != (imgArray.length - 1) ? currentSlide = currentSlide + 1 : currentSlide = 0;
      imageDiv[0].childNodes[3].setAttribute("src", imgArray[currentSlide].src);
      description.innerHTML = imgArray[currentSlide].description;
      //right.classList.add("take-over");
      break;
    default:
      console.log("Modal error");
      modal.classList.toggle("switch");
  };

  addQueryToURL("img", currentSlide);

  left.style.animation = 'none';
  right.style.animation = 'none';
  left.offsetHeight;
  right.offsetHeight;
  left.style.animation = null;
  right.style.animation = null;
  let previousSlide = currentSlide == 0 ? imgArray.length - 1 : currentSlide -1;
  let nextSlide = currentSlide == imgArray.length - 1 ? 0 : currentSlide +1;
  setTimeout(()=>{
    left.classList.remove("take-over");
    right.classList.remove("take-over");
    left.innerHTML = `<img class="preview" src="${imgArray[previousSlide].src}" alt="${imgArray[previousSlide].description}">`;
    right.innerHTML = `<img class="preview" src="${imgArray[nextSlide].src}" alt="${imgArray[nextSlide].description}">`;
    if (currentTab == "Animation") {//add still frame1 to gifs
      left.innerHTML += `<img class="frame1" src="${(imgArray[previousSlide].src).replace('gif/','gif/frame1/').replace(/-/g, '_')}" alt="${imgArray[previousSlide].description}">`;
      right.innerHTML += `<img class="frame1" src="${(imgArray[nextSlide].src).replace('gif/','gif/frame1/').replace(/-/g, '_')}" alt="${imgArray[nextSlide].description}">`;
    };
  }, 200)

};

document.onkeydown = (evt) => {
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