/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
/*
 * Rien de difficile ici, il suffit de faire appel une fois à l'instruction
 * prochainClient.mesurerPoids() pour récupérer le poids du 1er client.
 * Ensuite on concatène l'unité de poids à la fin avec l'opérateur "+" et on
 * n'oublie pas l'espace devant kg ;-).
 */
let poidsClient = prochainClient.mesurerPoids();
console.log(poidsClient + " kg");

// Exercice 1
/*
 * On appelle 2 fois de suite prochainClient.mesurerPoids() pour récupérer
 * le poids du 1er puis du 2ème client ensuite qu'on affiche.
 * On peut stocker la valeur du poids du 2ème client dans la variable
 * poidsClient avant de l'afficher ou l'on peut écrire directement :
 * console.log(prochainClient.mesurerPoids()).
 */
let poidsClient = prochainClient.mesurerPoids();
console.log(poidsClient);
poidsClient = prochainClient.mesurerPoids();
console.log(poidsClient);

// Exercice 2
/*
 * La solution de cet exercice est SIMPLE mais sa rédaction est DIFFICILE
 * pour un débutant. Réussir à penser en terme de boucle n'est pas inné.
 * Ça s'apprend avec la pratique et le temps, courage !
 * 
 * On veut afficher le poids des clients *JUSQU'À* ce que le poids
 * retourné par prochainClient.mesurerPoids() soit 0. Il n'existe pas de
 * boucle pour dire "JUSQU'À", on n'a qu'une boucle "TANT QUE" (while).
 * Il faut donc transformer un peu notre condition et dire qu'on veut
 * afficher le poids des clients TANT QUE le poids est DIFFÉRENT de 0.
 *
 * Un peu d'algorithmique :
 *
 * poids ← lire le prochain poids
 * TANT QUE (poids DIFFERENT de 0) FAIRE
 *   afficher(poids)
 *   poids ← lire le prochain poids
 * FIN TANT QUE
 */
let poidsClient = prochainClient.mesurerPoids();
while (poidsClient !== 0) {
  console.log(poidsClient);
  poidsClient = prochainClient.mesurerPoids();
}

// Exercice 3
/*
 * On a la durée totale en minutes dans la variable duree.
 * Il faut maintenant convertir cette durée en minutes en heures et minutes.
 * Explications dans le code ci-dessous.
 */
let duree = nombreDeTours * 12;
let nombreHeures = 0;
let nombreMinutes = 0;

// Si la durée est supérieure à 60 min il faut extraire le nombre d'heures
// et de minutes comme ceci. Pour les explications, regardez à nouveau les
// leçons sur le mini projet.
while (duree >= 60) {
  nombreHeures = nombreHeures + 1;
  duree = duree - 60;
}

nombreMinutes = duree;

// Ce code permet toujours d'afficher sur 2 chiffres le nombre d'heures
if (nombreHeures < 10) {
  nombreHeures = "0" + nombreHeures;
}
// Ce code permet toujours d'afficher sur 2 chiffres le nombre de minutes
if (nombreMinutes < 10) {
  nombreMinutes = "0" + nombreMinutes;
}
console.log(nombreHeures + "h" + nombreMinutes);

// Exercice 4
/*
 * On va utiliser la variable ligne pour construire la guirlande finale.
 * Pour ça il faut concaténer cette variable avec une étoile "*" plusieurs
 * fois de suite. Ce nombre de fois est indiqué par la longueurGuirlande.
 * On peut donc utiliser une boucle for comme ci-dessous.
 * Notez qu'on pourrait également compter à partir de 1 :
 * for (let i = 1; i <= longueurGuirlande; i = i + 1).
 * Attention à bien ajuster la condition d'entrée dans la boucle, on utilise
 * <= longueurGuirlande car on doit compter de 1 à longueurGuirlande inclus.
 * Quand on compte à partir de 0 on compte de 0 à longueurGuirlande exclue
 * donc on utilise < longueurGuirlande. C'est une erreur classique :).
 */
let ligne = "";
for (let i = 0; i < longueurGuirlande; i = i + 1) {
  ligne = ligne + "*";
}
console.log(ligne);

// Exercice 5
/*
 * La difficulté ici est d'ajouter une étoile puis une ampoule alternativement.
 * Pour résoudre ce problème on peut utiliser une variable intermédiaire
 * symbole qu'on va concaténer à chaque tour de boucle à notre variable ligne.
 * Puis on va changer le contenu du symbole à chaque tour de boucle.
 * Quand c'est une étoile on le remplace par une ampoule et vice-versa.
 */
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
/*
 * Ici il faut utiliser 2 boucles. Une première boucle for (let longueurLigne...
 * pour afficher plusieurs lignes, puis une boucle imbriquée pour créer chaque
 * guirlande qui composera chaque ligne.
 * Les erreurs se sont glissées au niveau des valeurs dans les for(let ...).
 */
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
/*
 * Ici on utilise 2 fois 2 boucles imbriquées pour construire les lignes.
 * Le premier groupe de 2 boucles permet de construire les lignes dont le
 * nombre d'étoiles augmente.
 * Le deuxième groupe de 2 boucles permet de construire les lignes dont le
 * nombre d'étoiles diminue.
 * La ligne la plus grande de longueur largeurTriangle sera construite par
 * le premier groupe de 2 boucles.
 * À nouveau ce sont des erreurs dans les for(let ...) qu'il faut corriger.
 */
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
/*
 * La solution peut sembler SIMPLE, mais à nouveau, sa rédaction est
 * DIFFICILE pour un débutant.
 * Il existe plein de façons de résoudre cet exercice différemment.
 * Voici une façon de faire et les explications dans le code ci-dessous.
 */
// On récupère le poids du 1er client
let poidsClient = prochainClient.mesurerPoids();
// Somme des poids des clients pour le prochain tour
let sommePoidsPourCeTour = 0;
// On compte le nombre de tours à faire en tout pour faire passer tout le monde
let nombreDeTours = 0;

// Tant qu'il y a des clients...
while (poidsClient !== 0) {
  // On ajoute leur poids à la somme des poids des clients d'avant
  sommePoidsPourCeTour = sommePoidsPourCeTour + poidsClient;
  // Si cette somme est supérieure à la limite
  if (sommePoidsPourCeTour > 500) {
    // On ajoute un tour au compteur...
    nombreDeTours = nombreDeTours + 1;
    // Le dernier client n'a pas pu aller dans ce tour car il aurait fait
    // dépasser le poids max autorisé, il faut donc compter son poids
    // pour le prochain tour, c'est ce qu'on fait ici
    sommePoidsPourCeTour = poidsClient;
  }
  // On récupère le poids du prochain client
  poidsClient = prochainClient.mesurerPoids();
}

// Ici on traite le cas particulier d'un client qui est le seul
// à passer dans le dernier tour.
if (sommePoidsPourCeTour > 0) {
  nombreDeTours = nombreDeTours + 1;
}

// On met un 's' final ou pas en fonction du nombre de tours
if (nombreDeTours === 0 || nombreDeTours === 1) {
  console.log(nombreDeTours + " tour");
} else {
  console.log(nombreDeTours + " tours");
}