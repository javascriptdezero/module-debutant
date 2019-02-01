/* Les conditions */

// Exécuter du code lorsqu'une expression est vraie : if ()
let expression = true;

if (expression) {
  console.log("L'expression (expression) est vraie");
}

// console.log("Ligne pour éviter que le débogueur saute à fin du fichier...");

/* Les blocs d'instructions */

// let expression = true;

// if (expression) {
//   console.log("Je suis toujours entouré de deux accolades { }");
//   console.log("Je suis la deuxième instruction du bloc");
//   console.log("Par convention, on indente mes instructions");

//   let reponse = 42;
//   if (reponse === 42) {
//     console.log("La réponse est toujours " + reponse);
//   }
// }

// Exécuter du code lorsqu'une expression est fausse : else {}
// let expression = false;

// if (expression) {
//   console.log("L'expression (expression) est vraie");
// } else {
//   console.log("L'expression (expression) est fausse");
// }

// console.log("Ligne pour éviter que le débogueur saute à fin du fichier...");

/* Évaluation d'une expression complexe */

// // Limites
// let poidsMaxAutorise = 120;
// let ageMajorite = 18;

// // Infos du client
// let ageDuClient = 22;
// let poidsDuClient = 80;

// if (ageDuClient >= 18 && poidsDuClient < poidsMaxAutorise) {
//   console.log("Vous pouvez monter dans ce manège");
// } else {
//   console.log("Vous ne pouvez pas monter dans ce manège");
// }

// console.log("Ligne pour éviter que le débogueur saute à fin du fichier...");

/* La notion d'espace blanc */

// console.log("Est-ce que je vais m'afficher ?");

/* Bonnes pratiques */

// Guides de style de programmation (AirBnB, Google, JS Standard)

// 1. Problème pour les débutants
// 2. Plus facile d'ajouter une instruction supplémentaire
// 3. Débogage plus facile

// let expression = true;

// if (expression) {
//   console.log("(expression) est vraie");
//   console.log("exécute toi seulement si expression est vraie");
// }

// Position du else
// let expression = true;

// if (expression) {
//   console.log("Je m'exécute si (expression) est vraie");
//   console.log("Moi aussi ! Moi aussi !");
// } else {
//   console.log("Pas moi... je m'exécute que si");
// }

// Gestion des longues expressions
// let reponse = 42;
// let langageFavori = "JavaScript";
// if ((reponse === 42 || reponse === "42") && reponse != 1337 || langageFavori === "JavaScript") {
//   console.log("Faciliter la lisibilité du code est une bonne pratique");
// }

// Facilement lisible
// if (
//   (reponse === 42 || reponse === "42") 
//   && reponse != 1337 
//   || langageFavori === "JavaScript"
// ) {
//   console.log("On aligne le nom des variables et les opérateurs");
// }

