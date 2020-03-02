/*
 * Tapez votre code sous chacun des commentaires.
 * Vous devez faire les exercices dans l'ordre !
 *
 * Si vous rencontrez un bogue, contactez-moi par email à l'adresse
 * jeremy@javascriptdezero.com.
 *
 * Merci et bon courage ! 🤘
 */

/*****************************************************************************
 *          📣 OYEZ OYEZ BRAVES DÉVELOPPEURS ET DÉVELOPPEUSES ! 📣            *
 *****************************************************************************
 *
 * Maintenant vous savez ce que sont les fonctions.
 * Ne supprimez pas les fonctions déjà écrites !
 * 
 * Insérez votre code là où c'est demandé et tout ira bien :).
 * 
 * Lisez tous les commentaires partout, merci ! 👍
 */

// Exercice 0
// Pour faire cet exercice : 
// 1. Décommentez le code de Tom ci-dessous
// 2. Rédigez le corps de la fonction afficherAdresseClient
// let nom = "Tom REDOCEMIA";
// let numeroRue = 21;
// let nomRue = "rue du bloc d'instructions";
// let codePostal = 1337;
// let ville = "POINT-VIRGULE";
// afficherTitre("Destinataire");
// afficherAdresseClient(nom, numeroRue, nomRue, codePostal, ville);

function afficherTitre(titre) {
  console.log("===[ " + titre + " ]===");
}

// <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
// Rédigez la fonction afficherAdresseClient ci-dessous
function afficherAdresseClient(nom, numeroRue, nomRue, codePostal, ville) {

}
// <===== FIN DE VOTRE CODE CI-DESSUS =====>

// Exercice 1
// <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====> 
// Complétez le corps de la fonction ci-dessous pour renvoyer la bonne valeur avec le mot-clé return
// function formaterNumeroClient(numero) { 

// }
// <===== FIN DE VOTRE CODE CI-DESSUS =====>


// Exercice 2
// Pour faire cet exercice : 
// 1. Décommentez le code de Tom ci-dessous
// 2. Rédigez le code manquant juste après le code de Tom
// let adresseMagiciensDuCode = `MagiciensDuCode
// 42 avenue de l'accolade ouvrante
// 1337 POINT-VIRGULE`;
// let numeroClient = 5842;

// afficherTitre("Notre adresse");
// console.log(adresseMagiciensDuCode);
// console.log("");

// <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
// D'ici vous avez accès à toutes les variables précédemment déclarées dont l'adresse de Tom (nom, numeroRue, nomRue, codePostal, ville), adresseMagiciensDuCode et numeroClient.
// Vous avez également accès à toutes les fonctions afficherTitre, afficherAdresseClient, formaterNumeroClient


// <===== FIN DE VOTRE CODE CI-DESSUS =====>

// Exercice 3
function afficherLigneLogo(esp1, esp2, esp3) {
  // <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
  // Rédigez le corps de la fonction afficherLigneLogo ci-dessous


  // <===== FIN DE VOTRE CODE CI-DESSUS =====>
}

// Voici la liste des appels de la fonction afficherLigneLogo, il ne reste plus qu'à rédiger cette fonction !
afficherLigneLogo(6, 14, 6);
afficherLigneLogo(4, 15, 9);
afficherLigneLogo(2, 16, 12);
afficherLigneLogo(0, 17, 15);
afficherLigneLogo(2, 14, 14);
afficherLigneLogo(4, 11, 13);
afficherLigneLogo(6, 8, 12);

// Chassez le bogue ! 0
// Tom a découpé son code en plusieurs fonctions, décommentez-le et corrigez les bogues !
// function construireLigneAvecBoules(longueurLigne) {
//   let ligne = "";
//   let symbole = "*";
//   for (let i = 0; i < longueurLigne; i = i + 1) {
//     ligne = ligne + symbole;
//     if (symbole !== "*") {
//       symbole = "o";
//     } else {
//       symbole = "*";
//     }
//   }
//   return ligne;
// }

// function construirePlusieursEspaces(nombre) {
//   let ligne = "";
//   for (let i = 0; i <= nombre; i = i + 1) {
//     ligne = ligne + " ";
//   }
//   return ligne;
// }

// console.log(construirePlusieursEspaces(5) + construireLigneAvecBoules(1));
// console.log(construirePlusieursEspaces(3) + construireLigneAvecBoules(3));
// console.log(construirePlusieursEspaces(3) + construireLigneAvecBoules(4));
// console.log(construirePlusieursEspaces(2) + construireLigneAvecBoules(7));
// console.log(construirePlusieursEspaces(1) + construireLigneAvecBoules(10));
// console.log(construirePlusieursEspaces(0) + construireLigneAvecBoules(11));

// for (let i = 0; i < 2; i = i + 1) {
//   console.log(construirePlusieursEspaces(4) + "***");
// }

