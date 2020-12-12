//recherche du dom
const box = document.querySelector(".container");
const nombre = document.querySelector(".nombre");
const btn = document.querySelector(".bouton");
const limite = document.querySelector(".limite");

//variables de travail
let nombreChoisi;

//Quand on click sur
btn.addEventListener("click", () => {
  if (nombre.value == "" || nombre.value > 5000) {
    alert("veuillez entrez un nombre valide ");
  } else {
    nombreChoisi = nombre.value;
    limite.style.display = "none";
    affichageNombre(nombreChoisi);
  }
});

//Fonction de vérification de nombre premier
let verifPremier = (nombreATester) => {
  let nbrPremier = true;
  for (let j = 2; j < nombreATester; j++) {
    if (nombreATester % j == 0) {
      nbrPremier = false;
    }
  }
  return nbrPremier;
};

//fonction d'affichage des nombres
let affichageNombre = (nombreChoisi) => {
  for (let i = 1; i <= nombreChoisi; i++) {
    let div = document.createElement("span");
    div.textContent = i;

    //Retour a la ligne a chaque dizaine
    if (i % 10 == 0) {
      div.style.display = "inline-block";
    }

    //si le nombre est premier on change sa couleur
    if (verifPremier(i)) {
      div.style.background = "rgb(15, 100, 173)";
      div.style.color = "rgb(240, 155, 80)";
    }
    box.append(div);
  }
};
