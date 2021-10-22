/* Les boucles imbriquées */

// Les boucles qui se suivent (classique)
let compteur = 0;
while (compteur < 3) {
  console.log("boucle while : " + compteur);
  compteur = compteur + 1;
}

for (let autreCompteur = 0; autreCompteur < 3; autreCompteur = autreCompteur + 1) {
  console.log("boucle for : " + autreCompteur);
}

// On peut imbriquer tous les types de boucles entre eux
// let compteur = 0;
// while (compteur < 3) {
//   console.log("boucle while : " + compteur);
//   compteur = compteur + 1;
//   for (let autreCompteur = 0; autreCompteur < 3; autreCompteur++) {
//     console.log("boucle for : " + autreCompteur);
//   }
//   console.log("dernière instruction du while");
// }

// Les niveaux d'imbrications sont illimités
// for (...) {
//   for (...) {
//     for (...) {
//       while (...) {
//         do {
//           for (...) {
//             ...
//           }
//         } while (...);
//       }
//     }
//   }
// }

// Quel est l'intérêt d'une boucle imbriquée ?
// for (let ligne = 0; ligne < 3; ligne++) { // <- Boucle dite "extérieure"
//   let guirlande = "";
//   for (let colonne = 0; colonne < 5; colonne++) { // <- Boucle dite "intérieure"
//     guirlande = guirlande + "*";
//   }
//   console.log(ligne + ": " + guirlande);
// }

// On peut accéder aux variables des boucles extérieures
// for (let ligne = 0; ligne < 10; ligne++) { // <- Boucle dite "extérieure"
//   let guirlande = "";
//   for (let colonne = 0; colonne < ligne; colonne++) { // <- Boucle dite "intérieure"
//     guirlande = guirlande + "*";
//   }
//   console.log(ligne + ": " + guirlande);
// }

// Utilisez le débogueur pour bien comprendre chaque étape !