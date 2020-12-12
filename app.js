const box = document.querySelector(".container");

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




for (let i = 1; i <= 500; i++) {
  let div = document.createElement("span");
  div.textContent = i;
  box.append(div);

  //Retour a la ligne a chaque dizaine
  if (i % 10 == 0) {
    div.style.display = "inline-block";
  }

  //si le nombre est premier on change sa couleur
  if(verifPremier(i)) {
    div.style.background = "rgb(58, 7, 122)";
    div.style.color = "rgb(190, 176, 132)";
  }
}
