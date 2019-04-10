/* Les boucles */

// La boucle while (tant que)
// let compteur = 0;
// while (compteur < 3) {
//   console.log("compteur : " + compteur);
//   console.log("Une instruction à exécuter");
//   compteur = compteur + 1;
// }

// console.log("Ligne pour éviter que le débogueur saute à la fin du fichier...");

// Boucle infinie
// while (true) {
//   console.log("compteur : " + compteur);
//   compteur = compteur + 1;
// }

// console.log("Ligne pour éviter que le débogueur saute à la fin du fichier...");

// Utilité d'une boucle infinie ?
// Jeux vidéo, Système embarqué / OS

// Boucle do... while (faire... tant que)
let compteur = 0;
do {
  console.log("compteur : " + compteur);
  console.log("Une instruction à exécuter");
  compteur = compteur + 1;
} while (compteur < 3);