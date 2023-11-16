window.onload = () =>{
    if(document.querySelector('a[href="../indexEN.html"]')) addArea(document.querySelector('a[href="../indexEN.html"]'))
    else addArea(document.querySelector('a[href="../index.html"]'));
    addArea(document.querySelectorAll("footer ul a")[0]);
    addArea(document.querySelectorAll("footer ul a")[1]);
}