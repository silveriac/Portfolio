var modal = document.getElementsByClassName("modal")
var slide = document.getElementsByClassName("slide");
function galleryTabs(evt, cityName) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabs");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  };

function switchModal(action, number){
  
  console.log(slide);
  console.log(slide.length);
  switch (action){ //1 is open //2 is close
    case 1:
      modal[0].style.display = "flex";
      slide[number].style.display = "flex";
      break;
    case 0:
      for(var i = 0; i < slide.length; i++){
        console.log("adsa");
        slide[i].style.display = "none";
      }  
      modal[0].style.display = "none";
      break;
    default:
      console.log("Modal error");
      modal[0].style.display = "none";
  }
};

function arrows(current, action){
  switch(action){
    case 1: //right
      slide[current].style.display = "none";
      slide[current+1].style.display = "flex";
      break;
    case 0: //left
      slide[current].style.display = "none";
      slide[current-1].style.display = "flex";
      break;
    default:
      slide[current].style.display = "none";
  }
}