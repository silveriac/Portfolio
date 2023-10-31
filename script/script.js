const changeTabs = (evt, tabName) => {
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
  console.log("hola");
};




