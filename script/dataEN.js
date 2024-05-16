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
        `• I designed image pieces for <a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac.com.uy</a> and <a target='_blank' href='https://www.sodimac.com.ar/sodimac-ar/'>Sodimac.com.ar</a>.<br>
        • I mantained, optimized and updated the code for various of Sodimac's landing pages<br>
        • I worked in personalization strategies using Dynamic Yield.<br>
        • I developed an <a target='_blank' href="https://sodi-labs.com/eric/">internal use app</a> used for searching products by Id.<br>
        • I implemented changes to improve the team's workflow efficiency.
        `},

        {'title': "Team Leader", 'company': "Doctors wihtout borders", 'date': "2019 - 2021", "description":
        `• I recruited donors in public areas, always meeting the set objectives.<br>
        • I worked on donor recovery and loyalty campaigns<br>
        • I led teams both in street-level operations and in a call center setting.<br>
        • I planed team strategies and motivational activities<br>`},

        {'title': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Freelance illustrator, artist and animator", 'company': "<a target='_blank' href='https://www.fiverr.com'>Fiverr</a>", 'date': "2018 - currenty", "description":
        `• I worked on various illustration and animation projects.<br>
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
      {'src': "../assets/gallery/war-witch.jpg", 'alt': "war witch", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - War Witch - <a href='https://www.youtube.com/watch?v=eOBUcQpzz8k' target='_blank'>Process video</a>"},
      {'src': "../assets/gallery/chilling-geralt.png", 'alt': "geralt having a good time", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Geralt having a good time"},
      {'src': "../assets/gallery/alien-skull.jpg", 'alt': "alien skull", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a> - Alien Skull"},
      {'src': "../assets/gallery/planet-brain.jpg", 'alt': "planet brain", 'description': "Photography taken by <a href='https://www.instagram.com/antoniobauer31/'>Antonio Bauer</a>"},
      {'src': "../assets/gallery/poketrainer.jpg", 'alt': "pokemon trainer", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Me as a Pokemon Trainer - <a href='https://www.youtube.com/watch?v=NBWq45dFhrc'  target='_blank'>Process video</a>"},
      {'src': "../assets/gallery/joric-jolva.jpg", 'alt': "silveriac's jojo", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Me as a JoJo's Bizarre Adventure character - <a href='https://www.youtube.com/watch?v=len_06yFK8s' target='_blank'>Process video</a>"},
      {'src': "../assets/gallery/spiderverse.jpg", 'alt': "into the spider-verse fanart", 'description': "'Spider-Man: Into the Spider Verse' fan art"},
      {'src': "../assets/gallery/hypno-spooky.jpg", 'alt': "Spooky hypno", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Spooky pokemon: Hypno"},
      {'src': "../assets/gallery/all-skulls.png", 'alt': "emotion skulls", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "../assets/gallery/revelation.png", 'alt': "revelation skull", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "../assets/gallery/creepy-cat.jpg", 'alt': "monster cat", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "../assets/gallery/blue.jpg", 'alt': "blue", 'description': "A gift for a friend"},
      {'src': "../assets/gallery/creepydoll.jpg", 'alt': "creepy doll", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "../assets/gallery/cursed-randall.jpg", 'alt': "cursed randall", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Creepy Randall from Monsters Inc"},
      {'src': "../assets/gallery/eldritch-momo.png", 'alt': "eldritch momo", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - An eldritch version of Momo from Avatar: The last airbender"},
      {'src': "../assets/gallery/spike.jpg", 'alt': "spike", 'description': "A digitally painted entry from Inktober 2017"},
      {'src': "../assets/gallery/gangster-skull.jpg", 'alt': "gagnster skull", 'description': "Gangster skull, a digitally painted sketch from a small notebook"},
      {'src': "../assets/gallery/gitana.jpg", 'alt': "gitana", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Esotericism  <a target='_blank' href='https://youtu.be/Jb9v7m4EdnU'>Process video</a>"},
      {'src': "../assets/gallery/hama.jpg", 'alt': "hama", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Hama from Avatar: The last airbender"},
      {'src': "../assets/gallery/herosona.jpg", 'alt': "me as a my hero academia character", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Me as a 'My Hero Academia' character"},
      {'src': "../assets/gallery/me-blu.jpg", 'alt': "me with blue background", 'description': "-"},
      {'src': "../assets/gallery/me.jpg", 'alt': "silveriac self portrait", 'description': "My self portait"},
      {'src': "../assets/gallery/me-red.jpg", 'alt': "me with red background", 'description': "-"},
      {'src': "../assets/gallery/skullwolf.jpg", 'alt': "skull wolf", 'description': "-"},
      {'src': "../assets/gallery/wolfskull.jpg", 'alt': "wolfskull", 'description': "-"},
      {'src': "../assets/gallery/wolf.jpg", 'alt': "wolf", 'description': "-"},
      {'src': "../assets/gallery/venom-rework-black.jpg", 'alt': "venom fanart", 'description': "Venom fanart, rework of my first digital drawing"},
      {'src': "../assets/gallery/venom-rework-blue.jpg", 'alt': "venom fanart", 'description': "Venom fanart, rework of my first digital drawing"},
      {'src': "../assets/gallery/vincent-van-hop.jpg", 'alt': "vincent van hop", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Our favourite artists as 'furries'"},
      {'src': "../assets/gallery/snowman-imaginaerum.jpg", 'alt': "imaginaerum snowman", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - the Snowman from the movie 'Imaginaerum'"},
      {'src': "../assets/gallery/steampunk-bunnygirl.jpg", 'alt': "steampunk bunnygirl", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"},
      {'src': "../assets/gallery/steampunk-bunnygirl-revised.jpg", 'alt': "steampunk bunnygirl", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac'>Comission Work</a>"}
      //{'src': "../assets/gallery/", 'alt': "", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> "}
    ],
    'Animation': [
      {'src': "../assets/gallery/gif/monke.gif", 'alt': "dancing monkey", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Rework of my first animation"},
      {'src': "../assets/gallery/gif/bear-idle.gif", 'alt': "idle bear", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "../assets/gallery/gif/bear-run.gif", 'alt': "bear running", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "../assets/gallery/gif/bear-jump.gif", 'alt': "bear jumping", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "../assets/gallery/gif/bear-push-small.gif", 'alt': "bear pushing small snowball", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "../assets/gallery/gif/bear-push-big.gif", 'alt': "bear pushing big snowball", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "../assets/gallery/gif/mounted-run.gif", 'alt': "bear mounted on dog running", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "../assets/gallery/gif/dog-mounted-jump.gif", 'alt': "bear mounted on dog jumping", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      //{'src': "../assets/gallery/gif/mount-pant.gif", 'alt': "bear pushing big snowball"},
      {'src': "../assets/gallery/gif/pant-mounted.gif", 'alt': "bear mounted on dog panting", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "../assets/gallery/gif/dog-getup-pant.gif", 'alt': "dog panting", 'description': "<a target='_blank' href='https://www.fiverr.com/silveriac/make-a-short-character-animation'>Comission Work</a> - The heart of the Teddy Bear"},
      {'src': "../assets/gallery/gif/clownplete.gif", 'alt': "clown attack", 'description': "<a target='_blank' href='https://www.twitch.tv/dood_ly'>Doodly</a> - Pixel art character"},
      {'src': "../assets/gallery/gif/idle-oso.gif", 'alt': "idle bear", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "../assets/gallery/gif/idle-arma-oso.gif", 'alt': "idle bear with gun", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "../assets/gallery/gif/caminata-oso.gif", 'alt': "bear walking", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "../assets/gallery/gif/caminata-con-arma-oso.gif", 'alt': "idle walking with gun", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "../assets/gallery/gif/disparos-oso.gif", 'alt': "bear shooting", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "../assets/gallery/gif/salto-oso.gif", 'alt': "bear jumping", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
      {'src': "../assets/gallery/gif/salto-con-arma-oso.gif", 'alt': "bear jumping with gun", 'description': "<a target='_blank' href='https://v3.globalgamejam.org/2020/games/cotton-revenge-2'>Global Game Jam 2020</a>"},
    ],
    'Design': [
      {'src': "../assets/gallery/design/sodimac/airelibre.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - Aire Libre"},
      {'src': "../assets/gallery/design/sodimac/blackweek.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - Black Week"},
      {'src': "../assets/gallery/design/sodimac/cyberlunes.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - CyberLunes"},
      {'src': "../assets/gallery/design/sodimac/cyberlunes2.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - CyberLunes"},
      {'src': "../assets/gallery/design/sodimac/electroflash.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - ElectroFlash"},
      {'src': "../assets/gallery/design/sodimac/renovacionbanos.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - Especial Renovación"},
      {'src': "../assets/gallery/design/sodimac/renovacionpisos.jpg", 'alt': "Sodimac", 'description': "<a target='_blank' href='https://www.sodimac.com.uy/sodimac-uy/'>Sodimac</a> - Especial Renovación"},
      {'src': "../assets/gallery/design/sonder-imagotipo-fondo-gris.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Logo and visual identity rework"},
      {'src': "../assets/gallery/design/sonder-isologo-fondo-gris.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Logo and visual identity rework"},
      {'src': "../assets/gallery/design/sonder-isotipo1.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "../assets/gallery/design/sonder-logo.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "../assets/gallery/design/sonder-brillo-1.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "../assets/gallery/design/sonder-brillo-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "../assets/gallery/design/sonder-imagotipo-fondo-marron.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - color variation"},
      {'src': "../assets/gallery/design/sonder-imagotipo-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - New logo from scratch, client opted to keep the rework version"},
      {'src': "../assets/gallery/design/Sonder-iso.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - New logo from scratch, client opted to keep the rework version"},
      {'src': "../assets/gallery/design/Sonder-imagotipo.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - New logo from scratch, client opted to keep the rework version"},
      {'src': "../assets/gallery/design/sonder-logo-final-transparente.png", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - New logo from scratch, client opted to keep the rework version"},
      {'src': "../assets/gallery/design/sonder-card-1.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - contact cards"},
      {'src': "../assets/gallery/design/sonder-card-2.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - contact cards"},
      {'src': "../assets/gallery/design/sonder-logo-anterior.jpeg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - Previous design (made by another designer)"},
      {'src': "../assets/gallery/design/sonder-inicial.jpg", 'alt': "Sonder", 'description': "<a target='_blank' href='https://www.instagram.com/sonder_producciones/'>Sonder</a> - My notes on previous design"},
      {'src': "../assets/gallery/design/sippin2.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Card and mascot variation 1"},
      {'src': "../assets/gallery/design/sippin1.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Card and mascot variation 2"},
      {'src': "../assets/gallery/design/sippin3.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Card and mascot variation 3"},
      {'src': "../assets/gallery/design/sippin4.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Card and mascot variation 4"},
      {'src': "../assets/gallery/design/sippin-mascot-beer.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascot variation 1"},
      {'src': "../assets/gallery/design/sippin-mascot-whiskey.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascot variation 2"},
      {'src': "../assets/gallery/design/sippin-mascot-wine.png", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Mascot variation 3"},
      {'src': "../assets/gallery/design/sippin-examples.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Process and options"},
      {'src': "../assets/gallery/design/sippin-mascot-examples.jpg", 'alt': "Sippin' with Spirits", 'description': "Sippin' with Spirits - Process and options for the ghost mascot"},
      {'src': "../assets/gallery/design/varo1.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "../assets/gallery/design/varo2.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "../assets/gallery/design/varo3.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/varopercu/'>Varo Percu</a>"},
      {'src': "../assets/gallery/design/bloco_ensamble_cuadrado.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/blocopercu/'>El Bloco</a> - Poster"},
      {'src': "../assets/gallery/design/bloco_ensamble_vertical.jpg", 'alt': "Varo Percu", 'description': "<a target='_blank' href='https://www.instagram.com/blocopercu/'>El Bloco</a> - Poster"},
      {'src': "../assets/gallery/design/360tours-1.jpg", 'alt': "360tours", 'description': "<a target='_blank' href='https://www.instagram.com/360tours.uy/'>360tours</a> - Contact cards using pre-established visual identity"},
      {'src': "../assets/gallery/design/360tours-2.jpg", 'alt': "360tours", 'description': "<a target='_blank' href='https://www.instagram.com/360tours.uy/'>360tours</a> - Contact cards using pre-established visual identity"},
      {'src': "../assets/gallery/design/gm-fitness.jpg", 'alt': "MG Fitness", 'description': "MG fitness"},
      {'src': "../assets/gallery/design/gm-fitness2.jpg", 'alt': "MG Fitness", 'description': "MG fitness"}
    ],
    'Doodly': [
      {'src': "../assets/gallery/gif/lu.gif", 'alt': "lu doodly", "name": "Doodly", 'description': "https://www.instagram.com/yolumith/"},
      {'src': "../assets/gallery/gif/flo.gif", 'alt': "flo doodly", "name": "Doodly", 'description': "https://www.instagram.com/floobi3/"},
      {'src': "../assets/gallery/gif/eric.gif", 'alt': "eric doodly", "name": "Doodly", 'description': "https://www.instagram.com/silveriac_/"}
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