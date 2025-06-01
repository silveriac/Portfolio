console.log("content ES");
let indexContent  = {
    'Technology':[
        {'src': "./assets/logos/html.png", 'name': "HTML", 'alt': "html", 'lvl': "avanzado", "percent": ".84"},
        {'src': "./assets/logos/css.png", 'name': "Css", 'alt': "css", 'lvl': "avanzado", "percent": ".78"},
        {'src': "./assets/logos/js.png", 'name': "JavaScript", 'alt': "javascript", 'lvl': "medio", "percent": ".60"},
        {'src': "./assets/logos/node.png", 'name': "Node.js", 'alt': "node", 'lvl': "medio", "percent": ".33"},
        {'src': "./assets/logos/react.png", 'name': "React", 'alt': "react", 'lvl': "básico", "percent": ".12"},
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
        `• Diseñé piezas visuales para varias páginas de <a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac.com.uy</a> y <a target='_blank' href='https://www.sodimac.com.ar/sodimac-ar/'>Sodimac.com.ar</a>.<br>
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

        {'title': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Ilustrador y artista freelance", 'company': "<a target='_blank' href='https://www.fiverr.com'>Fiverr</a>", 'date': "2018 - actualidad", "description":
        `• Trabajé en proyectos varios de ilustración, diseño y animación.<br>
        • Puntuación de 5 estrellas ⭐⭐⭐⭐⭐.`},
    ],
    'Education':[
        {'title': "Diseño de comunicación visual", 'company': "<a target='_blank' href='http://www.fadu.edu.uy'>FADU</a>", 'date': "2016 - 2018 (no finalizado)", "description": ""},
        {'title': "Become a Software Professional", 'company': "<a target='_blank' href='https://radiumrocket.com'>Radium Rocket</a>", 'date': "2022", "description": ""},
        {'title': "Analista GeneXus", 'company': "<a target='_blank' href='https://jovenesaprogramar.edu.uy'>Jóvenes a Programar</a>", 'date': "2018", "description": ""},
    ],
    'Proyects':[
        {'title': "<a href='gallery.html?tab=Doodly'>Doodly</a>", 'company': "Stream de arte y diseño en <a target='_blank' href='https://www.twitch.tv/dood_ly'>Twitch</a>", 'date': "2020 - actualidad", "description": ""},
        {'title': "<a href='games.html#games-page'>Salud, Dinero y Amor</a>", 'company': "Juego de mesa en desarrollo", 'date': "2022 - actualidad", "description": ""},
        {'title': "<a target='_blank' href='https://youtube.com/clip/Ugkx7iT7OuOkUgt-aKGu-qsT8Lb8CBY5vepS?si=wG3_A3GYTcyAbD8A'>Random</a>", 'company': "Programa de TV en canal 6", 'date': "2013", "description": ""},
    ],
    'Contact':[
        {'src': "./assets/logos/gmail.svg", 'alt': 'gmail', 'title': "erixilva42@gmail.com", 'link': 'mailto:erixilva42@gmail.com?'},
        {'src': "./assets/logos/linkedin.svg", 'alt': 'linkedin', 'title': "Eric Silva", 'link': 'https://www.linkedin.com/in/eric-silva-820683155/'},
        {'src': "./assets/logos/behance.svg", 'alt': 'behance', 'title': "Eric Silva", 'link': 'https://www.behance.net/silveriac'},
        {'src': "./assets/logos/insta.svg", 'alt': 'instagram', 'title': "@silveriac_", 'link': 'https://www.instagram.com/silveriac_/'},
    ],
};
const galleryContent  = {
    'Illustration':[
      {'src': "war-witch.jpg", 'alt': "war witch", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Bruja Guerrera - ▶️<a href='https://www.youtube.com/watch?v=eOBUcQpzz8k' target='_blank'>Video proceso</a>"},
      {'src': "chilling-geralt.png", 'alt': "geralt having a good time", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Geralt pasándola bien"},
      {'src': "alien-skull.jpg", 'alt': "alien skull", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Encargo</a> - Alien Skull"},
      {'src': "planet-brain.jpg", 'alt': "planet brain", 'description': "Fotografía de <a href='https://www.instagram.com/antoniobauer31/'>Antonio Bauer</a>"},
      {'src': "poketrainer.jpg", 'alt': "pokemon trainer", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Yo como entrenador Pokemon - ▶️<a href='https://www.youtube.com/watch?v=NBWq45dFhrc'  target='_blank'>Video proceso</a>"},
      {'src': "joric-jolva.jpg", 'alt': "silveriac's jojo", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Yo como personaje de JoJo's Bizarre Adventure - ▶️<a href='https://www.youtube.com/watch?v=len_06yFK8s' target='_blank'>Video Proceso</a>"},
      {'src': "spiderverse.jpg", 'alt': "into the spider-verse fanart", 'description': "'Spider-Man: Into the Spider Verse' fan art"},
      {'src': "hypno-spooky.jpg", 'alt': "Spooky hypno", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Pokemon escalofriantes: Hypno"},
      {'src': "nordicshaman.png", 'alt': "nordic shaman", 'description': "Chamán nórdico invocando guardián espiritual - ▶️<a href='https://youtu.be/lFrnUis0h5Q' target='_blank'>Video proceso</a>"},
      {'src': "all-skulls.png", 'alt': "emotion skulls", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Encargo</a>"},
      {'src': "revelation.png", 'alt': "revelation skull", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Encargo</a>"},
      {'src': "creepy-cat.jpg", 'alt': "monster cat", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Encargo</a>"},
      {'src': "blue.jpg", 'alt': "blue", 'description': "Un regalo"},
      {'src': "creepydoll.jpg", 'alt': "creepy doll", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Encargo</a>"},
      {'src': "cursed-randall.jpg", 'alt': "cursed randall", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Randall aterrador de Monsters Inc"},
      {'src': "eldritch-momo.png", 'alt': "eldritch momo", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Una versión éldrica de Momo de Avatar: El último maestro aire"},
      {'src': "spike.jpg", 'alt': "spike", 'description': "Una pieza de Inktober 2017 pintada digitalmente"},
      {'src': "gangster-skull.jpg", 'alt': "gagnster skull", 'description': "Calabera mafiosa, un boceto de un cuaderno pequeño pintado digitalmente"},
      {'src': "gitana.jpg", 'alt': "gitana", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Estoterismo - ▶️<a target='_blank' href='https://youtu.be/Jb9v7m4EdnU'>Video proceso</a>"},
      {'src': "hama.jpg", 'alt': "hama", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Hama de Avatar: El último maestro aire"},
      {'src': "herosona.jpg", 'alt': "me as a my hero academia character", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Yo como personaje de 'My Hero Academia'"},
      {'src': "me-blu.jpg", 'alt': "me with blue background", 'description': "-"},
      {'src': "me.jpg", 'alt': "silveriac self portrait", 'description': "Autoretrato"},
      {'src': "me-red.jpg", 'alt': "me with red background", 'description': "-"},
      {'src': "skullwolf.jpg", 'alt': "skull wolf", 'description': "-"},
      {'src': "wolfskull.jpg", 'alt': "wolfskull", 'description': "-"},
      {'src': "wolf.jpg", 'alt': "wolf", 'description': "-"},
      {'src': "venom-rework-black.jpg", 'alt': "venom fanart", 'description': "Venom fanart, reedición de mi primer dibujo digital"},
      {'src': "venom-rework-blue.jpg", 'alt': "venom fanart", 'description': "Venom fanart, reedición de mi primer dibujo digital"},
      {'src': "vincent-van-hop.jpg", 'alt': "vincent van hop", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Nuestros artistas favoritos como 'furries'"},
      {'src': "snowman-imaginaerum.jpg", 'alt': "imaginaerum snowman", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - the El hombre de nieve de la película 'Imaginaerum'"},
      {'src': "steampunk-bunnygirl.jpg", 'alt': "steampunk bunnygirl", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Encargo</a>"},
      {'src': "steampunk-bunnygirl-revised.jpg", 'alt': "steampunk bunnygirl", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Encargo</a>"}
      //{'src': "", 'alt': "", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> "}
    ],
    'Animation': [
      {'src': "gif/monke.gif", 'alt': "dancing monkey", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Reedición de mi primer animación"},
      {'src': "gif/bear-idle.gif", 'alt': "idle bear", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      {'src': "gif/bear-run.gif", 'alt': "bear running", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      {'src': "gif/bear-jump.gif", 'alt': "bear jumping", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      {'src': "gif/bear-push-small.gif", 'alt': "bear pushing small snowball", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      {'src': "gif/bear-push-big.gif", 'alt': "bear pushing big snowball", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      {'src': "gif/mounted-run.gif", 'alt': "bear mounted on dog running", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      {'src': "gif/dog-mounted-jump.gif", 'alt': "bear mounted on dog jumping", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      //{'src': "gif/mount-pant.gif", 'alt': "bear pushing big snowball"},
      {'src': "gif/pant-mounted.gif", 'alt': "bear mounted on dog panting", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      {'src': "gif/dog-getup-pant.gif", 'alt': "dog panting", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Encargo</a> - The heart of the Teddy Bear"},
      {'src': "gif/clownplete.gif", 'alt': "clown attack", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Personaje en pixel art"},
      {'src': "gif/idle-oso.gif", 'alt': "idle bear", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "gif/idle-arma-oso.gif", 'alt': "idle bear with gun", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "gif/caminata-oso.gif", 'alt': "bear walking", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "gif/caminata-con-arma-oso.gif", 'alt': "idle walking with gun", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "gif/disparos-oso.gif", 'alt': "bear shooting", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "gif/salto-oso.gif", 'alt': "bear jumping", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "gif/salto-con-arma-oso.gif", 'alt': "bear jumping with gun", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
    ],
    'Design': [
      {'src': "design/sodimac/airelibre.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - Aire Libre"},
      {'src': "design/sodimac/blackweek.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - Black Week"},
      {'src': "design/sodimac/cyberlunes.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - CyberLunes"},
      {'src': "design/sodimac/cyberlunes2.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - CyberLunes"},
      {'src': "design/sodimac/electroflash.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - ElectroFlash"},
      {'src': "design/sodimac/renovacionbanos.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - Especial Renovación"},
      {'src': "design/sodimac/renovacionpisos.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - Especial Renovación"},
      {'src': "design/sonder-imagotipo-fondo-gris.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Reedición de logo e identidad visual"},
      {'src': "design/sonder-isologo-fondo-gris.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Reedición de logo e identidad visual"},
      {'src': "design/sonder-isotipo1.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Variación de color"},
      {'src': "design/sonder-logo.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Variación de color"},
      {'src': "design/sonder-brillo-1.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Variación de color"},
      {'src': "design/sonder-brillo-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Variación de color"},
      {'src': "design/sonder-imagotipo-fondo-marron.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Variación de color"},
      {'src': "design/sonder-imagotipo-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Logo alternativo, el cliente optó por la otra versión"},
      {'src': "design/Sonder-iso.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Logo alternativo, el cliente optó por la otra versión"},
      {'src': "design/Sonder-imagotipo.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Logo alternativo, el cliente optó por la otra versión"},
      {'src': "design/sonder-logo-final-transparente.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Logo alternativo, el cliente optó por la otra versión"},
      {'src': "design/sonder-card-1.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Tarjetas de contacto"},
      {'src': "design/sonder-card-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Tarjetas de contacto"},
      {'src': "design/sonder-logo-anterior.jpeg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Diseño previo (hecho por otro diseñador)"},
      {'src': "design/sonder-inicial.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Mi notas respecto al diseño anterior"},
      {'src': "design/contradanza.jpg", 'alt': "Contradanza", 'description': "Portada de investigación sobre el colectivo Contradanza</a>", bigger:true},
      {'src': "design/sippin2.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Banner y mascota variación 1"},
      {'src': "design/sippin1.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Banner y mascota variación 2"},
      {'src': "design/sippin3.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Banner y mascota variación 3"},
      {'src': "design/sippin4.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Banner y mascota variación 4"},
      {'src': "design/sippin-mascot-beer.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascota variación 1"},
      {'src': "design/sippin-mascot-whiskey.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascota variación 2"},
      {'src': "design/sippin-mascot-wine.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascota variación 3"},
      {'src': "design/sippin-examples.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Proceso y opciones"},
      {'src': "design/sippin-mascot-examples.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Proceso y opciones de mascota"},
      {'src': "design/varo1.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "design/varo2.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "design/varo3.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "design/varo3.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "design/bloco_ensamble_cuadrado.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/blocopercu/'>El Bloco</a> - Afiche"},
      {'src': "design/bloco_ensamble_vertical.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/blocopercu/'>El Bloco</a> - Afiche"},
      {'src': "design/360tours-1.jpg", 'alt': "360tours", 'description': "<a target='_blank' href='https://www.instagram.com/360tours.uy/'>360tours</a> - Tarjetas de contacto usando identidad visual preestablecida"},
      {'src': "design/360tours-2.jpg", 'alt': "360tours", 'description': "<a target='_blank' href='https://www.instagram.com/360tours.uy/'>360tours</a> - Tarjetas de contacto usando identidad visual preestablecida"},
      {'src': "design/gm-fitness.jpg", 'alt': "MG Fitness", 'description': "MG fitness"},
      {'src': "design/gm-fitness2.jpg", 'alt': "MG Fitness", 'description': "MG fitness"}
    ],
    'Doodly': [
      {'src': "gif/lu.gif", 'alt': "lu doodly", "name": "Doodly", 'description': "https://www.instagram.com/yolumith/"},
      {'src': "gif/flo.gif", 'alt': "flo doodly", "name": "Doodly", 'description': "https://www.instagram.com/floobi3/"},
      {'src': "gif/eric.gif", 'alt': "eric doodly", "name": "Doodly", 'description': "https://www.instagram.com/silveriac_/"}
    ]
  };
  const proyectos = {
    'Sodimac': 'Diseño de banners promocionales',
    'Sonder': 'Reedición de indentidad visual basada en diseño otro diseñador',
    "Contradanza": 'Portada de investigación sobre el colectivo de danza',
    "Sippin' with Spirits": 'Banners y mascota para un podcast sobre bebidas e historias de terror',
    "Varo Percu": 'Diseños para percusionista que trabaja con instrumentos a base de materiales reciclados',
    '360tours': 'Tarjetas de contacto basadas en identidad visual preestablecida',
    "MG Fitness": 'Diseño de identidad visual para un personal trainer',
    '360tours': 'Tarjetas de contacto basadas en identidad visual preestablecida',
    "Doodly": `Doodly es un programa semanal de arte y diseño, creado por Eric Silva y producido por Lucía Techera, Florencia Flores y Eric Silva. Todas las semanas tenemos una consigna de dibujo, pasá por el stream en <a target:"_blank" href="https://www.twitch.tv/dood_ly">Twitch</a> todos los martes a las 21:30 ¡y sumate a dibujar con nosotros!`,
  };