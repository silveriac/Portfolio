const params = new URLSearchParams(window.location.search);
const area = params.get("area");
const styleSheet = document.styleSheets[5];
let body;
let BGColor =   `--main-bg-color: rgb(193, 87, 255);
  --main-bg-color-opacity: rgba(193, 87, 255, .95);`
switch(area){
  default:
    break;
  case "Web":
    BGColor = `--main-bg-color: rgb(110, 85, 255);
    --main-bg-color-opacity: rgba(110, 85, 255, .95)`;
    break;
  case "Illustration":
    BGColor = `--main-bg-color: rgb(193, 87, 255);
    --main-bg-color-opacity: rgba(193, 87, 255, .95);`;
    break;
  case "Animation":
    BGColor = `--main-bg-color: rgb(193, 87, 255);
    --main-bg-color-opacity: rgba(193, 87, 255, .95);`;
    break;
  case "Design":
    BGColor = `--main-bg-color: rgb(110, 85, 255);
    --main-bg-color-opacity: rgba(110, 85, 255, .95)`;
    break;
  case "Dev":
    BGColor = `--main-bg-color: rgb(32, 148, 129);
    --main-bg-color-opacity: rgba(32, 148, 129, .95);`;
    break;
  case "GameDev":
    BGColor = `--main-bg-color: rgb(240, 145, 65);
    --main-bg-color-opacity: rgba(240, 145, 65, .95);`;
    break;
}
styleSheet.insertRule(`:root{${BGColor}}`);

const changeTabs = (evt, tabName) => {
  document.getElementsByClassName("tab-bar")[0].classList.toggle("shrink");
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tabs");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  };
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
    tablinks[i].classList.add("correct");
  };
  document.getElementById(tabName).style.display = "inline-flex";
  evt.currentTarget.className += " active";
  currentTab = tabName;
};

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const addArea = element => {
  if(area) element.setAttribute("href", `${element.href}?area=${area}`);
}

