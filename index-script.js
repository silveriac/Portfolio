let currentTab = 'Education';

window.onload = () => {
    document.getElementsByClassName("enlacesinicio")[0].addEventListener("click", () =>{
        document.getElementById("aboutMe").classList.toggle("grow");
        setTimeout(() => {
            document.getElementById("aboutMe").scrollIntoView({ behavior: 'smooth' });
        }, 100);
    });

    const buttons = document.getElementsByClassName("tabs");
    console.log(buttons);
    buttons[0].addEventListener("click", (event) => changeTabs(event, 'Education'));
    buttons[1].addEventListener("click", (event) => changeTabs(event, 'Technology'));
    buttons[2].addEventListener("click", (event) => changeTabs(event, 'Experience'));
    buttons[3].addEventListener("click", (event) => changeTabs(event, 'Proyects'));

    localStorage.setItem("visited", "true");
    console.log(localStorage.getItem("visited"))
    if(localStorage.getItem("visited") === "true"){
        for (let i = 0; i < document.getElementsByClassName("enlacesinicio").length; i++) {
            console.log(document.getElementsByClassName("enlacesinicio")[i]);
            document.getElementsByClassName("enlacesinicio")[i].classList.add("duration-reset");
        }
    }
    /*document.querySelector("h1").addEventListener("mouseenter", (event) => {
        let text = event.target.textContent;   
        const letters = ["E", "e", "r", "i", "c", " ", "S", "i", "l", "v", "a"];
        const interval = setInterval(() => {
            for (let i = 0; i < text.length; i++) {
                text = text.substring(0, i) + letters[Math.floor(Math.random() * 11)] + text.substring(i + 1);
                event.target.innerHTML = text;
                console.log(event.target.innerHTML);
            }

        }, 300);
        setTimeout(()=>{
            event.target.innerHTML = "Silveriac ";
            clearInterval(interval);
        }, 3000)
    })*/
};
