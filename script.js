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

function closeModal(){
  modal =document.getElementsByClassName("modal");
  modal[0].style.display = "none";
};
function openModal(){
  modal =document.getElementsByClassName("modal");
  modal[0].style.display = "flex";
};