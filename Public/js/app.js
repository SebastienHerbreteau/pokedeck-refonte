
function fetchPokemon(id){
   
  fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then((response) => response.json())
        .then((pokemon) => {
              let modal = document.querySelector(".modal");

              modal.innerHTML = 
          `
          <img id="close" src="assets/images/close.webp" alt="fermer">
          <img id="left" src="assets/images/arrowleft.webp" alt="gauche">
          <img id="right" src="assets/images/arrowright.webp" alt="droite">
          
              <div class="typeModal">${type(pokemon)}</div>

              <div class="spec">
                  <div class="section2">
                	<div class="immunise ff">${immunise(pokemon)}</div>
                    <div class="tresResistant ff">${tresResistant(pokemon)}</div>
                    <div class="resistant ff">${resistant(pokemon)}</div>
                    <div class="neutre ff">${normal(pokemon)}</div>
                    <div class="vulnerable ff">${vulnerable(pokemon)}</div>
                    <div class="tresVulnerable ff">${tresVulnerable(pokemon)}</div>
                  </div>
				  <div class="section1">
                  	<div class="ff">HP : ${pokemon.stats.HP}</div>
                  	<div class="ff">Attaque : ${pokemon.stats.attack}</div>
                  	<div class="ff">Défense : ${pokemon.stats.defense}</div>
                  	<div class="ff">Attaque spéc. : ${pokemon.stats.special_attack}</div>
                  	<div class="ff">Défense spéc. : ${pokemon.stats.special_defense}</div>
                  	<div class="ff">Vitesse : ${pokemon.stats.speed}</div><br>
				  </div>
              </div>
              <img class="imgPokeModal" id="ipm" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
              <h2 class="h2Modal">${pokemon.name}</h2>
              <div class="id"><p>#${pokemon.id}</p></div>
             
          </div>
          `
}
        )}

function type(pokemon) {
  if (pokemon.apiTypes[1] === undefined) {
    return `<div class="type1"><img class="typeImage" src="${pokemon.apiTypes[0].image}" alt="image de ${pokemon.apiTypes[0].name}"/>
                <p>${pokemon.apiTypes[0].name}</p></div>`;
  } else {
    return `<div class="type2"><img class="typeImage" src="${pokemon.apiTypes[1].image}" alt="image de ${pokemon.apiTypes[1].name}"/>
                <p>${pokemon.apiTypes[1].name}</p></div>
                <div class="type1"><img class="typeImage" src="${pokemon.apiTypes[0].image}" alt="image de ${pokemon.apiTypes[0].name}"/>
                <p>${pokemon.apiTypes[0].name}</p></div>`;
  }
}

function immunise(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "immune") {
      recupDamage = `<span><p>${recupName} : </p><p class="gold"> Immunisé</p></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function tresResistant(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "twice_resistant") {
      recupDamage = `<span><p>${recupName} : </p><p class="silver"> Très résistant</p></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function resistant(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "resistant") {
      recupDamage = `<span><p>${recupName} : </p><p class="green"> Résistant</p></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function vulnerable(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "vulnerable") {
      recupDamage = `<span><p>${recupName} : </p><p class="orange"> Vulnérable</p></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function tresVulnerable(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "twice_vulnerable") {
      recupDamage = `<span><p>${recupName} : </p><p class="rouge"> Très vulnérable</p></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function normal(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "neutral") {
      recupDamage = `<span><p>${recupName} : </p><p class="blue"> Neutre</p></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}
//--------------------------------------------------Comportement HEADER---------------------------------------------------
let lastScroll = 0;
let recherche = document.querySelector(".containerInput")


window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) { // si le dernier scroll est supérieur au précedent le menu ne bouge pas
    recherche.style.top = 0;
  } else {
    recherche.style.top = "-350px"; // sinon il remonte de 350px
  }

  lastScroll = window.scrollY;
  
});
 

//-----------------------------------------Comportement modal après click sur resultat recherche---------------------------------------------------
let modal = document.querySelector(".modal");
let cards = document.querySelectorAll(".card");




cards.forEach((card) => {                                        // selection de toute les cartes
  card.addEventListener("click", () => { 

    

    modal.classList.add("modalActive");                            // classe activée sur la modale
    let id = card.firstElementChild.textContent;                   // selection du contenu texte du premier enfant de "card" => ici l'"id"
    fetchPokemon(id);                                              // appel de la fonction qui remplit la modale avec l'id precedemment récupérer
    

    modal.addEventListener('touchstart', function (event) {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, false);
    
    modal.addEventListener('touchend', function (event) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesture(modal);
    }, false);
    
    
    function handleGesture(modal) {
      if (touchendX < touchstartX) {
        modal.classList.add('swipeLeft')
        
          setTimeout(() => {
            id++;
            fetchPokemon(id);
          }, 500); 
          setTimeout(() => {
            modal.classList.remove('swipeLeft')
          }, 1000);
      }
    
      if (touchendX > touchstartX) {
        modal.classList.add('swipeRight')
        
        setTimeout(() => {
          id--;
          fetchPokemon(id);
        }, 500); 
        setTimeout(() => {
          modal.classList.remove('swipeRight')
        }, 1000);
      }

    }


    window.onclick = function (e) {   
      if(e.target.id === "left")
        {                              
        id--;
        fetchPokemon(id);  
        }
      else if(e.target.id === "right")
        {
        id++;
        fetchPokemon(id);
      }                                      
      else if(e.target.id === "close") 
        {          
        modal.classList.remove("modalActive");                         
        };   
      };

    window.addEventListener("keydown",(e)=>{                       // flèche droite clavier on rajoute +1 à l'id et on remplit la modale avec le nouveau contenu
      if (e.code === "ArrowRight"){
      id++;
      fetchPokemon(id);
      }
      })
    

    window.addEventListener("keydown",(e)=>{                       //flèche gauche clavier on rajoute +1 à l'id et on remplit la modale avec le nouveau contenu
      if (e.code === "ArrowLeft"){
      id--;
      fetchPokemon(id);
      }
      })
}); }) 


//---------------------------------------------MENU BURGER---------------------------------------------------------------------

let burger = document.querySelector(".burger")
let haut = document.querySelector(".haut")
let centre = document.querySelector(".centre")
let bas = document.querySelector(".bas")
let nav = document.querySelector(".navigation")

burger.addEventListener("click",()=>{
  haut.classList.toggle("active-rota-haut")
  centre.classList.toggle("active-bg-centre")
  bas.classList.toggle("active-rota-bas")
  nav.classList.toggle("active-nav")
})
