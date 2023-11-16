window.onload = () =>{
    //board, jam, steam, personal
    if(document.querySelector('a[href="../indexEN.html"]')) addArea(document.querySelector('a[href="../indexEN.html"]'))
    else addArea(document.querySelector('a[href="../index.html"]'));
    let gameType = params.get("gameType");
    console.log(gameType);
    console.log("tuvieja");
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