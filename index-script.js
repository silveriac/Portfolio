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
    ],
    'Experience':[
        {'title': "Diseñador gráfico y web", 'company': "Sodimac", 'date': "2022 - 2023", "description":
        `• Diseñé piezas visuales para varias páginas de Sodimac.com.uy y Sodimac.com.ar.<br>
        • También mantuve, optimicé y actualicé el código de varias de las 'landing pages' de Sodimac.<br>
        • Trabajé en estrategias de personalización usando Dynamic Yield.<br>
        • Desarrollé una <a target='_blank' href="https://sodi-labs.com/eric/">aplicación de uso interno</a> para búsqueda de productos.<br>
        • Implementé cambios para mejorar la eficiencia del flujo de trabajo del equipo.
        <!-- <p class="exp-description">I designed image pieces for Sodimac's Homepage, as well as mantained, improved and updated code for various of Sodimac's landing pages. I also worked in personalization strategies using Dynamic Yield. Futhermore, I developed an internal use application and made changes to improve the team's workflow.</p> -->
        `},

        {'title': "Líder de equipos", 'company': "Médicos sin Fronteras", 'date': "2019 - 2021", "description":
        `• Capté socios y donantes en vía callejera, cumpliendo siempre los objetivos planteados.<br>
        • Trabajé en campañas de recuperación de socios y fidelidad.<br>
        • Lideré equipos tanto en vía callejera como en modalidad call center.<br>
        • Planeé estrategias de equipo y actividades motivacionales<br>`},

        {'title': "<a target='_blank' href='https://www.fiverr.com'>Ilustrador y artista freelance", 'company': "<a target='_blank' href='https://www.fiverr.com'>Fiverr</a>", 'date': "2018 - actualidad", "description":
        `• Worked on various illustration and animation projects<br>.
        • Rated five stars`},
    ],
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
    buttons[1].addEventListener("click", (event) => {changeTabs(event, 'Technology'); fillTab("Technology");});
    buttons[2].addEventListener("click", (event) => {changeTabs(event, 'Design'); fillTab("Design");});
    buttons[3].addEventListener("click", (event) => {changeTabs(event, 'Experience'); fillTab("Experience");});
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
    switch(tab){
        default:
            const container = document.getElementById(tab);
            if (container.childElementCount != 0) return;
            contentArray.forEach((item, index) => {
                const div = document.createElement("div");
                div.classList.add("tech-item");
                div.setAttribute("style", `animation-delay: ${0.1 + ((index*1.5)/10)}s`);
                div.innerHTML +=
                    `<div class="tech-logo">
                        <img src="${item.src}" alt="${item.alt}">
                    </div>
                    <div class="tech-name">
                        <p>${item.name}</p>
                        <div class="progress-bar" style="width: ${100 * item.percent}%; animation-delay: ${(index*1.5)/10}s"></div>
                    </div>
                    <p class="tech-lvl">nivel ${item.lvl}</p>`;
                setTimeout(() =>{container.appendChild(div);}, 110);
            });
            break;
        case "Experience":
            const list = document.getElementsByClassName("fill-ul")[0];
            if (list.childElementCount != 0) return;
            contentArray.forEach((item, index) => {
                console.log(item);
                const li = document.createElement("li");
                li.classList.add("exp-item");
                li.setAttribute("style", `animation-delay: ${0.1 + ((index*1.5)/10)}s`);
                li.innerHTML +=
                    `<div class="dot"></div>
                    <div>
                        <p class="exp-title">${item.title}</p>
                        <p class="exp-company">${item.company}</p>
                        <p class="exp-date">${item.date} •
                            <span onclick="seeMoreExp(${index})">ver más</span>
                        </p>
                        <p class="exp-description">
                            ${item.description}
                        </p>
                    </div>`;
                setTimeout(() =>{list.appendChild(li);}, 110);
            });
            break;
    }
    /*contentArray.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("tech-item");
      div.setAttribute("style", `animation-delay: ${0.1 + ((index*1.5)/10)}s`);
      div.innerHTML +=
        `<div class="tech-logo">
            <img src="${item.src}" alt="${item.alt}">
        </div>
        <div class="tech-name">
            <p>${item.name}</p>
            <div class="progress-bar" style="width: ${100 * item.percent}%; animation-delay: ${(index*1.5)/10}s"></div>
        </div>
        <p class="tech-lvl">nivel ${item.lvl}</p>`;
      setTimeout(() =>{container.appendChild(div);}, 110);
    });*/
    //document.getElementsByClassName("tech-item")[0].scrollIntoView({ behavior: 'smooth', block: 'start' }); scrollear no funciona por el delay, solucionar
};

const seeMoreExp = (number) => {
    document.getElementsByClassName('exp-description')[number].classList.toggle('grow');
    let span = document.querySelectorAll('.exp-date > span')[number];
    span.innerHTML = span.innerHTML == "ver más" ? "ver menos" : "ver más"
}