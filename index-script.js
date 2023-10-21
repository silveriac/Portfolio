let indexContent  = {
    'Technology':[
        {'src': "./assets/logos/html.png", 'name': "HTML", 'alt': "html", 'lvl': "avanzado", "percent": ".84"},
        {'src': "./assets/logos/css.png", 'name': "Css", 'alt': "css", 'lvl': "avanzado", "percent": ".78"},
        {'src': "./assets/logos/js.png", 'name': "JavaScript", 'alt': "javascript", 'lvl': "medio", "percent": ".60"},
        {'src': "./assets/logos/node.png", 'name': "Node.js", 'alt': "node", 'lvl': "medio", "percent": ".33"},
        {'src': "./assets/logos/python.png", 'name': "Python", 'alt': "c", 'lvl': "básico", "percent": ".10"},
        {'src': "./assets/logos/c.png", 'name': "C", 'alt': "c", 'lvl': "básico", "percent": ".10"},
        {'src': "./assets/logos/csharp.png", 'name': "C#", 'alt': "c#", 'lvl': "básico", "percent": ".07"},
        {'src': "./assets/logos/unity.png", 'name': "Unity", 'alt': "unity", 'lvl': "básico", "percent": ".05"}
    ],
    'Design':[
        {'src': "./assets/logos/ps.png", 'name': "Adobe Photoshop", 'alt': "photoshop", 'lvl': "avanzado", "percent": ".92"},
        {'src': "./assets/logos/ai.png", 'name': "Adobe Illustrator", 'alt': "illustrator", 'lvl': "avanzado", "percent": ".78"},
        {'src': "./assets/logos/pr.png", 'name': "Adobe Premiere", 'alt': "premiere", 'lvl': "medio", "percent": ".45"},
        {'src': "./assets/logos/xd.png", 'name': "Adobe XD", 'alt': "xd", 'lvl': "medio", "percent": ".4"},
        {'src': "./assets/logos/csp.png", 'name': "ClipStudio Paint", 'alt': "clipstudio paint", 'lvl': "medio", "percent": ".65"},
        {'src': "./assets/logos/figma.png", 'name': "Figma", 'alt': "figma", 'lvl': "básico", "percent": ".3"}
    ]
};
let currentTab = 'Education';
window.onload = () => {
    document.getElementsByClassName("enlacesinicio")[0].addEventListener("click", () =>{
        document.getElementById("aboutMe").classList.toggle("grow");
        setTimeout(() => {
            document.getElementById("aboutMe").scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });

    const buttons = document.getElementsByClassName("tabs");
    console.log(buttons);
    buttons[0].addEventListener("click", (event) => changeTabs(event, 'Education'));
    buttons[1].addEventListener("click", (event) => {
        changeTabs(event, 'Technology');
        fillTab("Technology");
    });
    buttons[2].addEventListener("click", (event) => {
        changeTabs(event, 'Design');
        fillTab("Design");
    });
    buttons[3].addEventListener("click", (event) => changeTabs(event, 'Experience'));
    buttons[4].addEventListener("click", (event) => changeTabs(event, 'Proyects'));

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
const fillTab = (tab) => {
    contentArray = indexContent[tab];
    console.log(tab);
    const container = document.getElementById(tab);
    if (container.childElementCount != 0) return;
    contentArray.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("tech-item");
      div.setAttribute("style", `animation-delay: ${0.1 + ((index*2)/10)}s`);
      div.innerHTML +=
        `<div class="tech-logo">
            <img src="${item.src}" alt="${item.alt}">
        </div>
        <div class="tech-name">
            <p>${item.name}</p>
            <div class="progress-bar" style="width: ${100 * item.percent}%; animation-delay: ${(index*2)/10}s"></div>
            
        </div>
        <p class="tech-lvl">nivel ${item.lvl}</p>`;
      setTimeout(() =>{container.appendChild(div);}, 250);
    });
    //document.getElementsByClassName("tech-item")[0].scrollIntoView({ behavior: 'smooth', block: 'start' }); scrollear no funciona por el delay, solucionar
};