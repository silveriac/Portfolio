const params = new URLSearchParams(window.location.search);
// switch(params.get("")){
//   case
// }
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