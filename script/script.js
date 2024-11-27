const params = new URLSearchParams(window.location.search);
const area = params.get("area");
const styleSheet = document.styleSheets[4];
let body;
let BGColor =   ``
switch(area){
  default:
    break;
  case "Web":
    BGColor = `--base-bg-color: 110, 85, 255;`;
    break;
  case "Illustration":
    BGColor = `--base-bg-color: 193, 87, 255;`;
    break;
  case "Animation":
    BGColor = `--base-bg-color: 193, 87, 255;`;
    break;
  case "Design":
    BGColor = `--base-bg-color: 110, 85, 255;`;
    break;
  case "Dev":
    BGColor = `--base-bg-color: 32, 148, 129;`;
    break;
  case "GameDev":
    BGColor = `--base-bg-color: 20, 105, 150;`;
    break;
}

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

styleSheet.insertRule(`:root{${BGColor}}`);//this needs to be at the end, so if it breaks it won't break the rest of the script
