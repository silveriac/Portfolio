window.onload = () =>{
    //board, jam, steam, personal
    let gameType = params.get("gameType");
    console.log(gameType);
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