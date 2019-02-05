/* Les conditions */

// Exécuter du code lorsqu'une expression est vraie : if ()
// let expression = true;

// if (expression) {
//   console.log("L'expression (expression) est vraie");
// }

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

// console.log("Ligne pour éviter que le débogueur saute à fin du fichier...");

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

// if (ageDuClient >= ageMajorite && poidsDuClient < poidsMaxAutorise) {
//   console.log("Vous pouvez monter dans ce manège");
// } else {
//   console.log("Vous ne pouvez pas monter dans ce manège");
// }

// console.log("Ligne pour éviter que le débogueur saute à fin du fichier...");

/* La notion d'espace blanc */

// console.log("Est-ce que je vais m'afficher ?");

/* Bonnes pratiques */

// Guides de style de programmation (AirBnB, Google, JS Standard)

// Utilisation systématique des accolades
// 1. Débogage plus facile, si faux ça prête à confusion !
// 2. Problème pour les débutants
// 3. Plus facile d'ajouter une instruction supplémentaire
// 4. Position du else
// let expression = true;
// if (expression) {
//   console.log("Je suis la seule instruction");
// }

// console.log("Ligne pour éviter que le débogueur saute à fin du fichier...");

/* Gestion de longues expressions */

// let reponse = 42;
// let langageFavori = "JavaScript";

// if ((reponse === 42 || reponse === "42") && reponse != 1337 || langageFavori === "JavaScript") {
//   console.log("Faciliter la lisibilité du code est une bonne pratique");
// }

// if (
//   (reponse === 42 || reponse === "42") 
//   && reponse !== 1337 
//   || langageFavori === "JavaScript"
// ) {
//   console.log("On aligne le nom des variables et les opérateurs");
// }

