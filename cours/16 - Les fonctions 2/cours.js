/* Les fonctions */

// Déclaration avec plusieurs paramètres
function presentation(prenom, age, metier) {
  console.log(prenom + " (" + age + " ans) - " + metier);
}

// Appel avec plusieurs arguments codés en dur
presentation("Jérémy", 33, "Développeur");

// Appel avec plusieurs arguments codés en dur + variables
// let professionTom = "Développeur Junior JS";
// presentation("Tom", 20, professionTom);

// Et si le nombre d'arguments est !== du nombre de paramètres ?
// presentation();
// presentation("Jérémy", 33);
// presentation("Jérémy", 33, "Développeur", "Je suis en trop");

/* Retourner une valeur */

// Utilisation du mot-clé "return"
// function calculerPrixTTC(prixHorsTaxe, TVAEnPourcent) {
//   return prixHorsTaxe * (1 + TVAEnPourcent / 100);
// }

// On n'utilise pas la valeur de retour
// calculerPrixTTC(10, 20);

// On utilise la valeur de retour
// console.log(calculerPrixTTC(10, 20));

// On récupère la valeur de retour dans une variable
// let prixTTC = calculerPrixTTC(10, 20);
// console.log("Prix TTC : " + prixTTC);

// console.log("Fin du code");

/* Retourner une valeur via une variable */

// function calculerPrixTTC(prixHorsTaxe, TVAEnPourcent) {
//   let prixTTC = prixHorsTaxe * (1 + TVAEnPourcent / 100);
//   return prixTTC;
// }

// console.log("Prix TTC : " + calculerPrixTTC(10, 20));

// console.log("Fin du code");