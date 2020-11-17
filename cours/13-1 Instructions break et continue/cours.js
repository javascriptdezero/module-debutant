/* L'instruction break */

// Permet d'arrêter d'itérer immédiatement

/* La boucle while (tant que) */
let compteur = 0;
while (compteur < 42) {
  console.log(compteur);
  if (compteur > 18) {
    break;
  }
  compteur = compteur + 10;
}

console.log("Fin de la boucle.");

/* Boucle do... while (faire... tant que) */
// let compteur = 0;
// do {
//   console.log(compteur);
//   if (compteur > 18) {
//     break;
//   }
//   compteur = compteur + 10;
// } while (compteur < 42);

// console.log("Fin de la boucle.");

/* Boucle for */
// for (let compteur = 0; compteur < 42; compteur = compteur + 10) {
//   console.log(compteur);
//   if (compteur > 18) {
//     break;
//   }
// }

// console.log("Fin de la boucle.");

/* L'instruction continue */

// Permet de sauter immédiatement à l'itération suivante

/* La boucle while (tant que) */
// let compteur = 0;
// while (compteur < 42) {
//   compteur = compteur + 10;
//   if (compteur === 30) {
//     continue;
//   }
//   console.log(compteur);
// }

// console.log("Fin de la boucle.");

/* Boucle do... while (faire... tant que) */
// let compteur = 0;
// do {
//   compteur = compteur + 10;
//   if (compteur === 30) {
//     continue;
//   }
//   console.log(compteur);
// } while (compteur < 42);

// console.log("Fin de la boucle.");

/* Boucle for */
// for (let compteur = 0; compteur < 42; compteur = compteur + 10) {
//   if (compteur === 30) {
//     continue;
//   }
//   console.log(compteur);
// }

// console.log("Fin de la boucle.");
