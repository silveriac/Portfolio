window.onload = () =>{
    //board, jam, steam, personal
    if(document.querySelector('a[href="../indexEN.html"]')) addArea(document.querySelector('a[href="../indexEN.html"]'))
    else addArea(document.querySelector('a[href="../index.html"]'));
    addArea(document.querySelectorAll("footer ul a")[0]);
    addArea(document.querySelectorAll("footer ul a")[1]);
    let gameType = params.get("gameType");

    if(gameType){
        let gameList = document.getElementsByClassName("game");
        console.log(gameList);
        for (let i = 0; i < gameList.length; i++) {
            const element = gameList[i];
            if(element.classList.contains(gameType)) continue;
            else element.classList.add("hide");
        }
    };

}