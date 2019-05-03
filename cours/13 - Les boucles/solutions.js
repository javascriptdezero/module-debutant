/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
let poidsClient = prochainClient.mesurerPoids();
console.log(poidsClient + " kg");

// Exercice 1
let poidsClient = prochainClient.mesurerPoids();
console.log(poidsClient);
poidsClient = prochainClient.mesurerPoids();
console.log(poidsClient);

// Exercice 2
let poidsClient = prochainClient.mesurerPoids();
while (poidsClient !== 0) {
  console.log(poidsClient);
  poidsClient = prochainClient.mesurerPoids();
}

// Exercice 3
let duree = nombreDeTours * 12;
let nombreHeures = 0;
let nombreMinutes = 0;

while (duree >= 60) {
  nombreHeures = nombreHeures + 1;
  duree = duree - 60;
}

nombreMinutes = duree;

if (nombreHeures < 10) {
  nombreHeures = "0" + nombreHeures;
}
if (nombreMinutes < 10) {
  nombreMinutes = "0" + nombreMinutes;
}
console.log(nombreHeures + "h" + nombreMinutes);

// Exercice 4
let ligne = "";
for (let i = 0; i < longueurGuirlande; i = i + 1) {
  ligne = ligne + "*";
}
console.log(ligne);

// Exercice 5
let ligne = "";
let symbole = "*";
for (let i = 0; i < longueurGuirlande; i = i + 1) {
  ligne = ligne + symbole;
  if (symbole === "*") {
    symbole = "o";
  } else {
    symbole = "*";
  }
}
console.log(ligne);

// Chassez le bogue ! 0
let ligne = "";
for (let longueurLigne = largeurTriangle; longueurLigne > 0; longueurLigne = longueurLigne - 2) {
  // On construit la ligne à afficher
  for (let position = 0; position < longueurLigne; position = position + 1) {
    ligne = ligne + "*";
  }
  console.log(ligne);
  ligne = "";
}

// Chassez le bogue ! 1
let ligne = "";
for (let longueurLigne = 1; longueurLigne <= largeurTriangle; longueurLigne = longueurLigne + 2) {
  // On construit la ligne à afficher
  for (let position = 0; position < longueurLigne; position = position + 1) {
    ligne = ligne + "*";
  }
  console.log(ligne);
  ligne = "";
}
for (let longueurLigne = largeurTriangle - 2; longueurLigne > 0; longueurLigne = longueurLigne - 2) {
  // On construit la ligne à afficher
  for (let position = 0; position < longueurLigne; position = position + 1) {
    ligne = ligne + "*";
  }
  console.log(ligne);
  ligne = "";
}

// Exercice BONUS
let poidsClient = prochainClient.mesurerPoids();
let sommePoidsPourCeTour = 0;
let nombreDeTours = 0;

while (poidsClient !== 0) {
  sommePoidsPourCeTour = sommePoidsPourCeTour + poidsClient;
  if (sommePoidsPourCeTour > 500) {
    nombreDeTours = nombreDeTours + 1;
    sommePoidsPourCeTour = poidsClient;
  }
  poidsClient = prochainClient.mesurerPoids();
}

if (sommePoidsPourCeTour > 0) {
  nombreDeTours = nombreDeTours + 1;
}

if (nombreDeTours === 0 || nombreDeTours === 1) {
  console.log(nombreDeTours + " tour");
} else {
  console.log(nombreDeTours + " tours");
}