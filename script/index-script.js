
let currentTab = 'Education';
let EN;
window.onload = () => {
    addArea(document.querySelectorAll("footer ul a")[0]);
    addArea(document.querySelectorAll("footer ul a")[1]);
    const buttons = document.getElementsByClassName("tabs");
    const aboutMe = document.getElementById("aboutMe");
    document.getElementById("linkAboutMe").addEventListener("click", () =>{
        aboutMe.classList.toggle("grow");
        setTimeout(() => {
            aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        let tabs = document.getElementsByClassName("tabs");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.add("fall" + (i+1));
        };
    });
    document.getElementById("linkContact").addEventListener("click", (event) =>{
        if(!(aboutMe.classList.contains("grow"))){
            aboutMe.classList.toggle("grow");
            setTimeout(() => {
                aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
        let tabs = document.getElementsByClassName("tabs");
        let j = 6;
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.add("fall" + (j));
            j--;
            console.log(j);
        };
        changeTabs(event, 'Contact');
        buttons[5].classList.add("active");
        fillTab("Contact");
    });
    console.log(buttons);
    buttons[0].addEventListener("click", (event) => {changeTabs(event, 'Education'); fillTab("Education");});
    buttons[1].addEventListener("click", (event) => {changeTabs(event, 'Technology'); fillTab("Technology");});
    buttons[2].addEventListener("click", (event) => {changeTabs(event, 'Design'); fillTab("Design");});
    buttons[3].addEventListener("click", (event) => {changeTabs(event, 'Experience'); fillTab("Experience");});
    buttons[4].addEventListener("click", (event) => {changeTabs(event, 'Proyects'); fillTab("Proyects")});
    buttons[5].addEventListener("click", (event) => {changeTabs(event, 'Contact'); fillTab("Contact")});
    document.getElementById("expandList").addEventListener("click", () => {
        if(document.querySelector('.active')){
            document.getElementsByClassName('tab-bar')[0].classList.toggle('shrink');
            document.getElementsByClassName('tab-bar')[0].classList.add('menu-over')
            document.querySelector('#aboutMe span img').classList.toggle('rotate-180')
        };
    });
    if(sessionStorage.getItem("visited")) document.querySelector('body').classList.add("visited")
    else sessionStorage.setItem("visited", "true");
    console.log(localStorage.getItem("visited"));
    const enlacesInicio = document.querySelectorAll(".nav > li");
    console.log(enlacesInicio);
    for (let i = 1; i < (enlacesInicio.length - 1); i++) {
        addArea(enlacesInicio[i].childNodes[0]);
    }
    switch(area){
        default:
          break;
        case "Web":
            enlacesInicio[2].remove();
            break;
        case "Illustration":
        case "Animation":
            enlacesInicio[1].remove();
            buttons[1].remove();
            break;
        case "Design":
            break;
        case "Dev":
            enlacesInicio[2].remove();
        break;
        case "GameDev":
            enlacesInicio[1].remove();
        break;
    }
    EN = document.getElementById("EN") ? true : false;
};

const fillTab = (tab) => {
    contentArray = indexContent[tab];
    setTimeout(() =>{document.querySelector('.tab-bar').scrollIntoView()}, 150);
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
                        <div class="progress-bar" style="width: ${100 * item.percent}%; animation-delay: ${(index*1.5)/10}s">
                            <p class="tech-lvl">${EN? "level:" : "nivel"}&nbsp;${item.lvl}</p>
                        </div>
                    </div>
                    <p class="tech-lvl">${EN? "level:" : "nivel"}&nbsp;${item.lvl}</p>`;
                setTimeout(() =>{container.appendChild(div);}, 110);
            });
            break;
        case "Experience":
        case "Education":
        case "Proyects":
            const list = document.querySelector(`#${tab} .fill-ul`);
            console.log(list)
            if (list.childElementCount != 0) return;
            contentArray.forEach((item, index) => {
                const seeMore = tab == "Experience" ? ` • <span onclick="seeMoreExp(${index})">ver más</span>` : "";
                const description = tab == "Experience" ? `<p class="exp-description">${item.description}</p>` : "";
                const li = document.createElement("li");
                li.classList.add("exp-item");
                li.setAttribute("style", `animation-delay: ${0.1 + ((index*1.5)/10)}s`);
                li.innerHTML +=
                    `<div class="dot"></div>
                    <div>
                        <p class="exp-title">${item.title}</p>
                        <p class="exp-company">${item.company}</p>
                        <p class="exp-date">${item.date}
                            ${seeMore}
                        </p>
                        ${description}
                    </div>`;
                    list.appendChild(li)
                    setTimeout(() =>{list.appendChild(li);}, 110);
            });
            break;
        case "Contact":
            const contactList = document.querySelector(`#${tab} .fill-ul`);
            if (contactList.childElementCount != 0) return;
            contentArray.forEach((item, index) => {
                const li = document.createElement("li");
                li.classList.add("exp-item");
                li.setAttribute("style", `animation-delay: ${0.1 + ((index*1.5)/10)}s`);
                li.innerHTML +=
                    `<div class="contact-logo">
                        <object data="${item.src}" type="image/svg+xml"></object>
                        <!--<img src="${item.src}" alt="${item.alt}">-->
                    </div>
                    <div>
                        <p class="exp-title">${item.title}</p>
                    </div>`;
                    setTimeout(() =>{contactList.appendChild(li);}, 110);
            });
            break;
    };

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
    console.log(document.getElementsByClassName('exp-description')[number])
    let span = document.querySelectorAll('.exp-date > span')[number];
    span.innerHTML = span.innerHTML == "ver más" ? "ver menos" : "ver más";
}