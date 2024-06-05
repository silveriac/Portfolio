console.log("content EN");
let indexContent  = {
    'Technology':[
        {'src': "./assets/logos/html.png", 'name': "HTML", 'alt': "html", 'lvl': "advanced", "percent": ".84"},
        {'src': "./assets/logos/css.png", 'name': "Css", 'alt': "css", 'lvl': "advanced", "percent": ".78"},
        {'src': "./assets/logos/js.png", 'name': "JavaScript", 'alt': "javascript", 'lvl': "medium", "percent": ".60"},
        {'src': "./assets/logos/node.png", 'name': "Node.js", 'alt': "node", 'lvl': "medium", "percent": ".33"},
        {'src': "./assets/logos/react.png", 'name': "React", 'alt': "react", 'lvl': "basic", "percent": ".12"},
        {'src': "./assets/logos/python.png", 'name': "Python", 'alt': "c", 'lvl': "basic", "percent": ".10"},
        {'src': "./assets/logos/c.png", 'name': "C", 'alt': "c", 'lvl': "basic", "percent": ".10"},
        {'src': "./assets/logos/csharp.png", 'name': "C#", 'alt': "c#", 'lvl': "basic", "percent": ".07"},
        {'src': "./assets/logos/unity.png", 'name': "Unity", 'alt': "unity", 'lvl': "basic", "percent": ".05"}
    ],
    'Design':[
        {'src': "./assets/logos/ps.png", 'name': "Adobe Photoshop", 'alt': "photoshop", 'lvl': "advanced", "percent": ".92"},
        {'src': "./assets/logos/ai.png", 'name': "Adobe Illustrator", 'alt': "illustrator", 'lvl': "advanced", "percent": ".78"},
        {'src': "./assets/logos/pr.png", 'name': "Adobe Premiere", 'alt': "premiere", 'lvl': "medium", "percent": ".45"},
        {'src': "./assets/logos/xd.png", 'name': "Adobe XD", 'alt': "xd", 'lvl': "medium", "percent": ".4"},
        {'src': "./assets/logos/csp.png", 'name': "ClipStudio Paint", 'alt': "clipstudio paint", 'lvl': "medium", "percent": ".65"},
        {'src': "./assets/logos/figma.png", 'name': "Figma", 'alt': "figma", 'lvl': "basic", "percent": ".3"}
    ],
    'Experience':[
        {'title': "Graphic and web designer", 'company': "Sodimac", 'date': "2022 - 2023", "description":
        `• Designed image pieces for <a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac.com.uy</a> and <a target='_blank' href='https://www.sodimac.com.ar/sodimac-ar/'>Sodimac.com.ar</a>.<br>
        •  Maintained and updated code for various landing pages, optimizing readability and improving the
        design team's workflow.<br>
        • Implemented personalization strategies using Dynamic Yield, enhancing client targeting and
        conversion rates<br>
        • Developed an <a href="./html/webdev.html">internal use app</a> using Sodimac's product API, improving accessibility to essential product
information for employees. <br>
        • Created web modules for different campaigns, including temporary discounts and website interactivity improvements.<br><br>`},

        {'title': "Team Leader", 'company': "Doctors wihtout borders", 'date': "2019 - 2021", "description":
        `• Planned team strategies and motivational activities<br>
        • Recruited members who served as monthly financial donors<br>
        • Led member recovery and loyalty campaigns, enhancing donor retention.<br>
        • Managed teams in street-level operations and call center settings.<br>`},

        {'title': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Freelance illustrator, artist and animator", 'company': "<a target='_blank' href='https://www.fiverr.com'>Fiverr</a>", 'date': "2018 - currenty", "description":
        `• Sketch and storyboard clients ideas<br>
        • Design characters and scenarios for books, albums covers, and videogames.<br>
        • Illustrate and animate designs according to clients needs.<br>
        • 5 star rating ⭐⭐⭐⭐⭐.`},
    ],
    'Education':[
        {'title': "Visual Communication Design", 'company': "<a target='_blank' href='http://www.fadu.edu.uy'>FADU</a>", 'date': "2016 - 2018 (no finalizado)", "description": ""},
        {'title': "Become a Software Professional", 'company': "<a target='_blank' href='https://radiumrocket.com'>Radium Rocket</a>", 'date': "2022", "description": ""},
        {'title': "GeneXus Analyst", 'company': "<a target='_blank' href='https://jovenesaprogramar.edu.uy'>Jóvenes a Programar</a>", 'date': "2018", "description": ""},
    ],
    'Proyects':[
        {'title': "<a href='gallery.html?tab=Doodly'>Doodly</a>", 'company': "Art and design stream on <a target='_blank' href='https://www.twitch.tv/dood_ly'>Twitch</a>", 'date': "2020 - currenty", "description": ""},
        {'title': "<a href='games.html#games-page'>Salud, Dinero y Amor</a>", 'company': "Board game - Currently in development", 'date': "2022 - currenty", "description": ""},
        {'title': "<a target='_blank' href='https://youtube.com/clip/Ugkx7iT7OuOkUgt-aKGu-qsT8Lb8CBY5vepS?si=wG3_A3GYTcyAbD8A'>Random</a>", 'company': "Local news TV program", 'date': "2013", "description": ""},
    ],
    'Contact':[
        {'src': "./assets/logos/gmail.svg", 'alt': 'gmail', 'title': "<a target='_blank' href='mailto:erixilva42@gmail.com?'>erixilva42@gmail.com</a>"},
        {'src': "./assets/logos/linkedin.svg", 'alt': 'linkedin', 'title': "<a target='_blank' href='https://www.linkedin.com/in/eric-silva-820683155/'>Eric Silva</a>"},
        {'src': "./assets/logos/behance.svg", 'alt': 'behance', 'title': "<a target='_blank' href='https://www.behance.net/silveriac'>Eric Silva</a>"},
        {'src': "./assets/logos/insta.svg", 'alt': 'instagram', 'title': "<a target='_blank' href='https://www.instagram.com/silveriac_/'>@silveriac_</a>"},
    ],
};
const galleryContent  = {
    'Illustration':[
      {'src': "war-witch.jpg", 'alt': "war witch", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - War Witch - ▶️<a href='https://www.youtube.com/watch?v=eOBUcQpzz8k' target='_blank'>Process video</a>"},
      {'src': "chilling-geralt.png", 'alt': "geralt having a good time", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Geralt having a good time"},
      {'src': "alien-skull.jpg", 'alt': "alien skull", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a> - Alien Skull"},
      {'src': "planet-brain.jpg", 'alt': "planet brain", 'description': "Photography taken by <a href='https://www.instagram.com/antoniobauer31/'>Antonio Bauer</a>"},
      {'src': "poketrainer.jpg", 'alt': "pokemon trainer", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Me as a Pokemon Trainer - ▶️<a href='https://www.youtube.com/watch?v=NBWq45dFhrc'  target='_blank'>Process video</a>"},
      {'src': "joric-jolva.jpg", 'alt': "silveriac's jojo", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Me as a JoJo's Bizarre Adventure character - ▶️<a href='https://www.youtube.com/watch?v=len_06yFK8s' target='_blank'>Process video</a>"},
      {'src': "spiderverse.jpg", 'alt': "into the spider-verse fanart", 'description': "'Spider-Man: Into the Spider Verse' fan art"},
      {'src': "hypno-spooky.jpg", 'alt': "Spooky hypno", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Spooky pokemon: Hypno"},
      {'src': "all-skulls.png", 'alt': "emotion skulls", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "revelation.png", 'alt': "revelation skull", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "creepy-cat.jpg", 'alt': "monster cat", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "blue.jpg", 'alt': "blue", 'description': "A gift for a friend"},
      {'src': "creepydoll.jpg", 'alt': "creepy doll", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "cursed-randall.jpg", 'alt': "cursed randall", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Creepy Randall from Monsters Inc"},
      {'src': "eldritch-momo.png", 'alt': "eldritch momo", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - An eldritch version of Momo from Avatar: The last airbender"},
      {'src': "spike.jpg", 'alt': "spike", 'description': "A digitally painted entry from Inktober 2017"},
      {'src': "gangster-skull.jpg", 'alt': "gagnster skull", 'description': "Gangster skull, a digitally painted sketch from a small notebook"},
      {'src': "gitana.jpg", 'alt': "gitana", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Esotericism - ▶️<a target='_blank' href='https://youtu.be/Jb9v7m4EdnU'>Process video</a>"},
      {'src': "hama.jpg", 'alt': "hama", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Hama from Avatar: The last airbender"},
      {'src': "herosona.jpg", 'alt': "me as a my hero academia character", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Me as a 'My Hero Academia' character"},
      {'src': "me-blu.jpg", 'alt': "me with blue background", 'description': "-"},
      {'src': "me.jpg", 'alt': "silveriac self portrait", 'description': "My self portait"},
      {'src': "me-red.jpg", 'alt': "me with red background", 'description': "-"},
      {'src': "skullwolf.jpg", 'alt': "skull wolf", 'description': "-"},
      {'src': "wolfskull.jpg", 'alt': "wolfskull", 'description': "-"},
      {'src': "wolf.jpg", 'alt': "wolf", 'description': "-"},
      {'src': "venom-rework-black.jpg", 'alt': "venom fanart", 'description': "Venom fanart, rework of my first digital drawing"},
      {'src': "venom-rework-blue.jpg", 'alt': "venom fanart", 'description': "Venom fanart, rework of my first digital drawing"},
      {'src': "vincent-van-hop.jpg", 'alt': "vincent van hop", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Our favourite artists as 'furries'"},
      {'src': "snowman-imaginaerum.jpg", 'alt': "imaginaerum snowman", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - the Snowman from the movie 'Imaginaerum'"},
      {'src': "steampunk-bunnygirl.jpg", 'alt': "steampunk bunnygirl", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "steampunk-bunnygirl-revised.jpg", 'alt': "steampunk bunnygirl", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"}
      //{'src': "", 'alt': "", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> "}
    ],
    'Animation': [
      {'src': "gif/monke.gif", 'alt': "dancing monkey", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Rework of my first animation"},
      {'src': "gif/bear-idle.gif", 'alt': "idle bear", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "gif/bear-run.gif", 'alt': "bear running", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "gif/bear-jump.gif", 'alt': "bear jumping", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "gif/bear-push-small.gif", 'alt': "bear pushing small snowball", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "gif/bear-push-big.gif", 'alt': "bear pushing big snowball", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "gif/mounted-run.gif", 'alt': "bear mounted on dog running", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "gif/dog-mounted-jump.gif", 'alt': "bear mounted on dog jumping", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      //{'src': "gif/mount-pant.gif", 'alt': "bear pushing big snowball"},
      {'src': "gif/pant-mounted.gif", 'alt': "bear mounted on dog panting", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "gif/dog-getup-pant.gif", 'alt': "dog panting", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "gif/clownplete.gif", 'alt': "clown attack", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Pixel art character"},
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
      {'src': "design/sonder-imagotipo-fondo-gris.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Logo and visual identity rework"},
      {'src': "design/sonder-isologo-fondo-gris.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Logo and visual identity rework"},
      {'src': "design/sonder-isotipo1.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "design/sonder-logo.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "design/sonder-brillo-1.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "design/sonder-brillo-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "design/sonder-imagotipo-fondo-marron.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "design/sonder-imagotipo-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - New logo from scratch, client opted to keep the rework version"},
      {'src': "design/Sonder-iso.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - New logo from scratch, client opted to keep the rework version"},
      {'src': "design/Sonder-imagotipo.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - New logo from scratch, client opted to keep the rework version"},
      {'src': "design/sonder-logo-final-transparente.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - New logo from scratch, client opted to keep the rework version"},
      {'src': "design/sonder-card-1.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - contact cards"},
      {'src': "design/sonder-card-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - contact cards"},
      {'src': "design/sonder-logo-anterior.jpeg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Previous design (made by another designer)"},
      {'src': "design/sonder-inicial.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - My notes on previous design"},
      {'src': "design/sippin2.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Card and mascot variation 1"},
      {'src': "design/sippin1.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Card and mascot variation 2"},
      {'src': "design/sippin3.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Card and mascot variation 3"},
      {'src': "design/sippin4.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Card and mascot variation 4"},
      {'src': "design/sippin-mascot-beer.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascot variation 1"},
      {'src': "design/sippin-mascot-whiskey.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascot variation 2"},
      {'src': "design/sippin-mascot-wine.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascot variation 3"},
      {'src': "design/sippin-examples.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Process and options"},
      {'src': "design/sippin-mascot-examples.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Process and options for the ghost mascot"},
      {'src': "design/varo1.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "design/varo2.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "design/varo3.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "design/bloco_ensamble_cuadrado.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/blocopercu/'>El Bloco</a> - Poster"},
      {'src': "design/bloco_ensamble_vertical.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/blocopercu/'>El Bloco</a> - Poster"},
      {'src': "design/360tours-1.jpg", 'alt': "360tours", 'description': "<a target='_blank' href='https://www.instagram.com/360tours.uy/'>360tours</a> - Contact cards using pre-established visual identity"},
      {'src': "design/360tours-2.jpg", 'alt': "360tours", 'description': "<a target='_blank' href='https://www.instagram.com/360tours.uy/'>360tours</a> - Contact cards using pre-established visual identity"},
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
    'Sodimac': 'Promotional banners',
    'Sonder': 'Visual Identity rework based on previous design done by another designer',
    "Sippin' with Spirits": 'Banners and mascot for a podcast about drinks and ghost stories',
    "Varo Percu": 'Designs for a percussionist who makes instruments out of recycled materials',
    "MG Fitness": 'Visual identity design for a personal trainer',
    '360tours': 'Contact cards based on established visual identity',
    "Doodly": `Doodly is a weekly art and design stream, created by Eric Silva and produced by Lucía Techera, Florencia Flores and Eric Silva. We have a different challenge each week, visit our stream on <a target:"_blank" href="https://www.twitch.tv/dood_ly">Twitch</a> every tuesday at 9.30 pm (GMT-3) and join us for drawing!`
  };